import {
  RecoveryStrategyProps,
  createDefaultRecoveryStrategy,
  QueueProps,
  createQueue,
  getDefaultState,
} from './queue'

describe('Queue', () => {
  let queueProps: QueueProps<any>

  let processFunction: jest.Mock
  let idGenerator: jest.Mock
  let recoveryStrategy: jest.Mock

  beforeEach(() => {
    processFunction = jest.fn(async () => {})
    idGenerator = jest.fn(() => 'test-id')
    recoveryStrategy = jest.fn(({ skip }) => skip())
    queueProps = {
      processFunction,
      idGenerator,
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

    it('should return default state when calling getDefaultState', () => {
      const state = getDefaultState()
      expect(state).toEqual({ items: [], isProcessing: false })
    })

    it('should create a queue with default properties and methods', () => {
      const queue = createQueue({ processFunction, idGenerator })
      expect(queue).toHaveProperty('items')
      expect(queue).toHaveProperty('isProcessing')
      expect(queue).toHaveProperty('addItem')
      expect(queue).toHaveProperty('removeItem')
      expect(queue).toHaveProperty('updateItem')
      expect(queue).toHaveProperty('startProcessing')
      expect(queue).toHaveProperty('stopProcessing')
      expect(queue).toHaveProperty('clearItems')
      expect(queue).toHaveProperty('dispose')
    })

    it('should subscribe to provided event callbacks', () => {
      const onItemAdded = jest.fn()
      const onItemRemoved = jest.fn()
      const onItemsCleared = jest.fn()
      const onItemUpdated = jest.fn()
      const onProcessingChange = jest.fn()
      const onItemCompleted = jest.fn()
      const onItemError = jest.fn()

      queueProps.onItemAdded = onItemAdded
      queueProps.onItemRemoved = onItemRemoved
      queueProps.onItemsCleared = onItemsCleared
      queueProps.onItemUpdated = onItemUpdated
      queueProps.onProcessingChange = onProcessingChange
      queueProps.onItemCompleted = onItemCompleted
      queueProps.onItemError = onItemError

      const queue = createQueue(queueProps)
      const testItem = { id: 'test-id', status: 'pending', data: 'testData' }

      queue.addItem('testData')
      expect(onItemAdded).toHaveBeenCalledWith(testItem)

      queue.removeItem('test-id')
      expect(onItemRemoved).toHaveBeenCalledWith('test-id')

      queue.clearItems()
      expect(onItemsCleared).toHaveBeenCalled()

      queue.updateItem('test-id', { status: 'completed' })
      expect(onItemUpdated).toHaveBeenCalledWith({
        id: 'test-id',
        updatedItem: { status: 'completed' },
      })

      queue.startProcessing()
      expect(onProcessingChange).toHaveBeenCalled()

      queue.stopProcessing()
      expect(onProcessingChange).toHaveBeenCalled()
    })
  })

  describe('addItem', () => {
    it('should add an item to the queue and start processing', () => {
      const queue = createQueue(queueProps)
      const newItem = queue.addItem('testData')

      expect(newItem).toEqual({
        id: 'test-id',
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

      queue.removeItem('test-id')
      expect(queue.items.length).toBe(0)
    })

    it("should not throw an error when removing an item that doesn't exist", () => {
      const queue = createQueue(queueProps)
      expect(() => queue.removeItem('non-existent-id')).not.toThrow()
    })
  })

  describe('clearItems', () => {
    it('should clear the queue', () => {
      const queue = createQueue(queueProps)
      queue.addItem('testData1')
      queue.addItem('testData2')

      expect(queue.items.length).toBe(2)

      queue.clearItems()
      expect(queue.items.length).toBe(0)
    })
  })

  describe('updateItem', () => {
    it('should update an item in the queue', () => {
      const queue = createQueue(queueProps)
      const newItem = queue.addItem('testData')

      expect(newItem.status).toBe('pending')

      queue.updateItem('test-id', { status: 'completed' })
      const updatedItem = queue.items.find((item) => item.id === 'test-id')

      expect(updatedItem).toBeDefined()
      expect(updatedItem?.status).toBe('completed')
    })

    it("should not update an item that doesn't exist in the queue", () => {
      const queue = createQueue(queueProps)
      queue.updateItem('non-existent-id', { status: 'completed' })

      expect(queue.items.find((item) => item.id === 'non-existent-id')).toBeUndefined()
    })
  })

  describe('start processing and stop processing', () => {
    it('should start and stop processing the queue', () => {
      const queue = createQueue(queueProps)

      expect(queue.isProcessing).toBe(false)

      queue.startProcessing()
      expect(queue.isProcessing).toBe(true)

      queue.stopProcessing()
      expect(queue.isProcessing).toBe(false)
    })

    it('should add an item to the queue and start processing', async () => {
      const queue = createQueue({ processFunction, idGenerator })
      queue.addItem(null)

      expect(queue.items).toEqual([
        {
          data: null,
          id: 'test-id',
          status: 'processing',
        },
      ])

      expect(queue.isProcessing).toBe(true)
      expect(processFunction).toHaveBeenCalled()
    })
  })

  describe('processing', () => {
    it('should handle empty or null items correctly', async () => {
      const queue = createQueue({ processFunction, idGenerator })
      const item1 = queue.addItem(null as any)
      const item2 = queue.addItem(undefined as any)

      await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for processing to complete

      expect(queue.items.find((i) => i.id === item1.id)?.status).toBe('completed')
      expect(queue.items.find((i) => i.id === item2.id)?.status).toBe('completed')
    })

    it('should add an item to the queue while it is processing', async () => {
      processFunction.mockResolvedValue(null)
      const queue = createQueue(queueProps)
      queue.addItem('testData1')
      await new Promise((resolve) => setTimeout(resolve, 100))
      const newItem = queue.addItem('testData2')

      expect(queue.isProcessing).toBe(true)
      expect(newItem).toEqual({
        id: 'test-id',
        status: 'pending',
        data: 'testData2',
      })
      expect(queue.items).toEqual([
        { data: 'testData1', id: 'test-id', status: 'processing' },
        { data: 'testData2', id: 'test-id', status: 'processing' },
      ])
    })

    it('should handle long-running processFunction correctly', async () => {
      const longRunningFunction = jest.fn(
        async () => await new Promise((resolve) => setTimeout(resolve, 300))
      )
      const queue = createQueue({ processFunction: longRunningFunction, idGenerator })
      queue.addItem('testData')

      await new Promise((resolve) => setTimeout(resolve, 150)) // Halfway through processing
      expect(queue.items[0].status).toBe('processing')

      await new Promise((resolve) => setTimeout(resolve, 300)) // Finish processing
      expect(queue.items[0].status).toBe('completed')
    })
  })

  describe('recovery strategy', () => {
    it('should use default recovery strategy with retries', async () => {
      processFunction.mockRejectedValue(new Error('testError'))
      queueProps.recoveryStrategy = createDefaultRecoveryStrategy({
        maxRetries: 2,
      })

      const queue = createQueue(queueProps)
      queue.addItem('testData')

      // Wait for retries
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(processFunction).toHaveBeenCalledTimes(3)
    })

    it('should use custom recovery strategy', async () => {
      const customRecoveryStrategy = jest.fn(({ skip }: RecoveryStrategyProps<any>) => {
        skip()
      })

      processFunction.mockRejectedValue(new Error('testError'))
      queueProps.recoveryStrategy = customRecoveryStrategy

      const queue = createQueue(queueProps)
      queue.addItem('testData')

      // Wait for retries
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(customRecoveryStrategy).toHaveBeenCalled()
      expect(processFunction).toHaveBeenCalledTimes(1)
    })

    it('should use defaultRecoveryStrategy when no custom recoveryStrategy is provided', async () => {
      const queue = createQueue({ processFunction, idGenerator })
      processFunction.mockRejectedValueOnce(new Error('Error during processing'))
      queue.addItem(null)

      await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for processing to complete

      expect(queue.items).toEqual([
        {
          data: null,
          id: 'test-id',
          status: 'completed',
        },
      ])
    })

    it('should use custom recoveryStrategy when provided', async () => {
      const queue = createQueue({ processFunction, idGenerator, recoveryStrategy })
      processFunction.mockRejectedValueOnce(new Error('Error during processing'))
      const item = queue.addItem({ key: 'value' })

      await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for processing to complete

      expect(recoveryStrategy).toHaveBeenCalled()
      expect(queue.items).toEqual([
        {
          data: {
            key: 'value',
          },
          id: 'test-id',
          status: 'error',
        },
      ])
    })
  })

  describe('dispose', () => {
    it('should dispose the queue and stop processing even when items are being processed', async () => {
      const longRunningFunction = jest.fn(
        async () => await new Promise((resolve) => setTimeout(resolve, 1000))
      )
      const queue = createQueue({ processFunction: longRunningFunction, idGenerator })
      queue.addItem('testData')

      await new Promise((resolve) => setTimeout(resolve, 500)) // Halfway through processing
      queue.dispose()

      expect(queue.items).toHaveLength(0)
      expect(queue.isProcessing).toBe(false)
    })
  })
})
