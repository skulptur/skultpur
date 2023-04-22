import {
  RecoveryStrategyProps,
  createDefaultRecoveryStrategy,
  QueueProps,
  createQueue,
} from './queue'

describe('Queue', () => {
  let mockProcessFunction: jest.Mock
  let mockIdGenerator: jest.Mock
  let queueProps: QueueProps<any>

  beforeEach(() => {
    mockProcessFunction = jest.fn()
    mockIdGenerator = jest.fn().mockReturnValue('testId')
    queueProps = {
      processFunction: mockProcessFunction,
      idGenerator: mockIdGenerator,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('createQueue', () => {
    it('should create a new queue', () => {
      const queue = createQueue(queueProps)
      expect(queue).toBeDefined()
      expect(queue.queue.length).toBe(0)
      expect(queue.isProcessing).toBe(false)
    })

    it('should subscribe to provided event callbacks', () => {
      const onItemAdded = jest.fn()
      const onItemRemoved = jest.fn()
      const onQueueCleared = jest.fn()
      const onItemUpdated = jest.fn()
      const onProcessingStarted = jest.fn()
      const onProcessingStopped = jest.fn()
      const onItemCompleted = jest.fn()
      const onItemError = jest.fn()

      queueProps.onItemAdded = onItemAdded
      queueProps.onItemRemoved = onItemRemoved
      queueProps.onQueueCleared = onQueueCleared
      queueProps.onItemUpdated = onItemUpdated
      queueProps.onProcessingStarted = onProcessingStarted
      queueProps.onProcessingStopped = onProcessingStopped
      queueProps.onItemCompleted = onItemCompleted
      queueProps.onItemError = onItemError

      const queue = createQueue(queueProps)
      const testItem = { id: 'testId', status: 'pending', data: 'testData' }

      queue.addToQueue('testData')
      expect(onItemAdded).toHaveBeenCalledWith(testItem)

      queue.removeFromQueue('testId')
      expect(onItemRemoved).toHaveBeenCalledWith('testId')

      queue.clearQueue()
      expect(onQueueCleared).toHaveBeenCalled()

      queue.updateQueueItem('testId', { status: 'completed' })
      expect(onItemUpdated).toHaveBeenCalledWith({
        id: 'testId',
        updatedItem: { status: 'completed' },
      })

      queue.startProcessing()
      expect(onProcessingStarted).toHaveBeenCalled()

      queue.stopProcessing()
      expect(onProcessingStopped).toHaveBeenCalled()
    })
  })

  describe('addToQueue', () => {
    it('should add an item to the queue and start processing', () => {
      const queue = createQueue(queueProps)
      const newItem = queue.addToQueue('testData')

      expect(newItem).toEqual({
        id: 'testId',
        status: 'pending',
        data: 'testData',
      })
      expect(queue.queue[0]).toEqual({ ...newItem, status: 'in progress' })
      expect(queue.isProcessing).toBe(true)
    })
  })

  describe('removeFromQueue', () => {
    it('should remove an item from the queue', () => {
      const queue = createQueue(queueProps)
      queue.addToQueue('testData')

      expect(queue.queue.length).toBe(1)

      queue.removeFromQueue('testId')
      expect(queue.queue.length).toBe(0)
    })
  })

  describe('clearQueue', () => {
    it('should clear the queue', () => {
      const queue = createQueue(queueProps)
      queue.addToQueue('testData1')
      queue.addToQueue('testData2')

      expect(queue.queue.length).toBe(2)

      queue.clearQueue()
      expect(queue.queue.length).toBe(0)
    })
  })

  describe('updateQueueItem', () => {
    it('should update an item in the queue', () => {
      const queue = createQueue(queueProps)
      const newItem = queue.addToQueue('testData')

      expect(newItem.status).toBe('pending')

      queue.updateQueueItem('testId', { status: 'completed' })
      const updatedItem = queue.queue.find((item) => item.id === 'testId')

      expect(updatedItem).toBeDefined()
      expect(updatedItem?.status).toBe('completed')
    })
  })

  describe('startProcessing and stopProcessing', () => {
    it('should start and stop processing the queue', () => {
      const queue = createQueue(queueProps)

      expect(queue.isProcessing).toBe(false)

      queue.startProcessing()
      expect(queue.isProcessing).toBe(true)

      queue.stopProcessing()
      expect(queue.isProcessing).toBe(false)
    })
  })

  it('should add an item to the queue while it is processing', async () => {
    mockProcessFunction.mockResolvedValue(null)
    const queue = createQueue(queueProps)
    queue.addToQueue('testData1')
    await new Promise((resolve) => setTimeout(resolve, 100))
    const newItem = queue.addToQueue('testData2')

    expect(queue.isProcessing).toBe(true)
    expect(newItem).toEqual({
      id: 'testId',
      status: 'pending',
      data: 'testData2',
    })
    expect(queue.queue).toContain(newItem)
  })

  it('should continue processing with the next item after a successful completion', async () => {
    const resolveDelay = (value: any) =>
      new Promise((resolve) => setTimeout(() => resolve(value), 100))
    mockProcessFunction.mockImplementation(async () => resolveDelay(null))

    const itemCompletedPromises: Array<Promise<void>> = []
    const onItemCompleted = () => {
      return new Promise<void>((resolve) => {
        queueProps.onItemCompleted = () => {
          resolve()
        }
      })
    }

    itemCompletedPromises.push(onItemCompleted())
    itemCompletedPromises.push(onItemCompleted())

    const queue = createQueue(queueProps)
    queue.addToQueue('testData1')
    queue.addToQueue('testData2')

    await Promise.all(itemCompletedPromises)

    expect(mockProcessFunction).toHaveBeenCalledTimes(2)
    expect(queue.queue.every((item) => item.status === 'completed')).toBe(true)
  })

  describe('Recovery strategy', () => {
    it('should use default recovery strategy with retries', async () => {
      mockProcessFunction.mockRejectedValue(new Error('testError'))
      queueProps.recoveryStrategy = createDefaultRecoveryStrategy({
        maxRetries: 2,
      })

      const queue = createQueue(queueProps)
      queue.addToQueue('testData')

      // Wait for retries
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(mockProcessFunction).toHaveBeenCalledTimes(3)
    })

    it('should use custom recovery strategy', async () => {
      const customRecoveryStrategy = jest.fn(({ skip }: RecoveryStrategyProps<any>) => {
        skip()
      })

      mockProcessFunction.mockRejectedValue(new Error('testError'))
      queueProps.recoveryStrategy = customRecoveryStrategy

      const queue = createQueue(queueProps)
      queue.addToQueue('testData')

      // Wait for retries
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(customRecoveryStrategy).toHaveBeenCalled()
      expect(mockProcessFunction).toHaveBeenCalledTimes(1)
    })
  })
})
