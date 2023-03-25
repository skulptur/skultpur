const oneSecond = 1000
const noop = () => {}

export type LoopFramesProps = {
  currentFrame: number
  delta: number
  start: () => void
  stop: () => void
  setFps: (fps: number) => void
}

// TODO:
// implement pause
export const loopFrames = (
  onFrame: (props: Readonly<LoopFramesProps>) => void,
  fps: number = 60
): Readonly<LoopFramesProps> => {
  let fpsInterval = oneSecond / fps
  let startTime = NaN
  let lastTime = NaN
  let id = NaN

  const props: LoopFramesProps = {
    start: noop,
    stop: noop,
    setFps: noop,
    currentFrame: 0,
    delta: 0,
  }

  const step = (now: number) => {
    props.delta = now - lastTime

    if (props.delta > fpsInterval) {
      const elapsedTime = now - startTime
      // adjust for fpsInterval not being multiple of 16.67
      lastTime = now - (elapsedTime % fpsInterval)
      props.currentFrame++
      onFrame(props)
    }
    id = requestAnimationFrame(step)
  }

  props.start = () => {
    if (!isNaN(id)) return
    startTime = performance.now()
    lastTime = startTime
    requestAnimationFrame(() => onFrame(props))
    id = requestAnimationFrame(step)
  }

  props.stop = () => {
    cancelAnimationFrame(id)
    id = NaN
    props.currentFrame = 0
  }

  props.setFps = (fps: number) => {
    fpsInterval = oneSecond / fps
  }

  return props
}
