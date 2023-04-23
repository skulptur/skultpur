import {
  RecoveryStrategyProps,
  createDefaultRecoveryStrategy,
  QueueProps,
  createQueue,
} from './queue'

// TODO: missing test that next item is called one after the other

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
      expect(queue.items.length).toBe(0)
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

      queue.addItem('testData')
      expect(onItemAdded).toHaveBeenCalledWith(testItem)

      queue.removeItem('testId')
      expect(onItemRemoved).toHaveBeenCalledWith('testId')

      queue.clearQueue()
      expect(onQueueCleared).toHaveBeenCalled()

      queue.updateItem('testId', { status: 'completed' })
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

  describe('addItem', () => {
    it('should add an item to the queue and start processing', () => {
      const queue = createQueue(queueProps)
      const newItem = queue.addItem('testData')

      expect(newItem).toEqual({
        id: 'testId',
        status: 'pending',
        data: 'testData',
      })
      expect(queue.items[0]).toEqual({ ...newItem, status: 'processing' })
      expect(queue.isProcessing).toBe(true)
    })
  })

  describe('removeItem', () => {
    it('should remove an item from the queue', () => {
      const queue = createQueue(queueProps)
      queue.addItem('testData')

      expect(queue.items.length).toBe(1)

      queue.removeItem('testId')
      expect(queue.items.length).toBe(0)
    })
  })

  describe('clearQueue', () => {
    it('should clear the queue', () => {
      const queue = createQueue(queueProps)
      queue.addItem('testData1')
      queue.addItem('testData2')

      expect(queue.items.length).toBe(2)

      queue.clearQueue()
      expect(queue.items.length).toBe(0)
    })
  })

  describe('updateItem', () => {
    it('should update an item in the queue', () => {
      const queue = createQueue(queueProps)
      const newItem = queue.addItem('testData')

      expect(newItem.status).toBe('pending')

      queue.updateItem('testId', { status: 'completed' })
      const updatedItem = queue.items.find((item) => item.id === 'testId')

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
    queue.addItem('testData1')
    await new Promise((resolve) => setTimeout(resolve, 100))
    const newItem = queue.addItem('testData2')

    expect(queue.isProcessing).toBe(true)
    expect(newItem).toEqual({
      id: 'testId',
      status: 'pending',
      data: 'testData2',
    })
    expect(queue.items).toEqual([
      { data: 'testData1', id: 'testId', status: 'processing' },
      { data: 'testData2', id: 'testId', status: 'processing' },
    ])
  })

  describe('Recovery strategy', () => {
    it('should use default recovery strategy with retries', async () => {
      mockProcessFunction.mockRejectedValue(new Error('testError'))
      queueProps.recoveryStrategy = createDefaultRecoveryStrategy({
        maxRetries: 2,
      })

      const queue = createQueue(queueProps)
      queue.addItem('testData')

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
      queue.addItem('testData')

      // Wait for retries
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(customRecoveryStrategy).toHaveBeenCalled()
      expect(mockProcessFunction).toHaveBeenCalledTimes(1)
    })
  })
})
