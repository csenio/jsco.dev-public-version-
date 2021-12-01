/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, {useCallback, forwardRef, useEffect, useRef, useState, createContext} from 'react'
import {v4 as uuid} from 'uuid'
import {animated, config, useTransition} from 'react-spring'
import Portal from '@reach/portal'

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
)

const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const Exclamation = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
)

const ToastContext = createContext(null)

function Timeout(callback, delay) {
  let timerId
  let start
  let remaining = delay

  const pause = () => {
    window.clearTimeout(timerId)
    remaining -= Date.now() - start
  }

  const resume = () => {
    start = Date.now()
    window.clearTimeout(timerId)
    timerId = window.setTimeout(callback, remaining)
  }

  resume()

  return {pause, resume}
}

function _Toast({id, message, clearToast, timer, style, isHovered, type, setIsHovered}, ref) {
  useEffect(() => {
    if (isHovered) {
      timer.pause()
    } else {
      timer.resume()
    }
  }, [isHovered, timer])

  return (
    <animated.div style={{position: 'absolute', bottom: 0, ...style}} className="px-2 md:px-6 lg:mb-0 flex w-full justify-center pointer-events-none">
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        ref={ref}
        className="bg-gray-100 text-gray-800 flex items-center rounded shadow-lg overflow-hidden relative max-w-screen pointer-events-auto"
      >
        <div className="flex w-full items-center p-5">
          {type === 'error' && <Exclamation className="w-5 mr-3 text-yellow-400" />}
          {type === 'success' && <Check className="w-5 mr-3 text-green-400" />}
          <div>{message}</div>
          <button type="button" className="ml-5" onClick={() => clearToast(id)}>
            <div className="sr-only">Close Toast</div>
            <X className="w-5" />
          </button>
        </div>
      </div>
    </animated.div>
  )
}

export const Toast = forwardRef(_Toast)

// config
const TOAST_DURATION = 6000
const SCALE_STEP = 0.05
const MAX_NOTIFICATIONS = 3
const TRANSLATE_STEP = 10
//

export function ToastContainer({children}) {
  const refMap = useRef({})
  const [toasts, setToasts] = useState([])
  const [isHovered, setIsHovered] = useState(false)

  const getUpdateTransforms = (index) => {
    const scaleFactor = SCALE_STEP * index
    const translateFactor = TRANSLATE_STEP * index

    return {
      translate: `translate3d(0, -${translateFactor}px,0)`,
      scale: `scale(${1 - scaleFactor})`,
    }
  }

  const getOverviewTransforms = (index, height) => {
    const translateFactor = (TRANSLATE_STEP + height) * index

    return {
      translate: `translate3d(0, -${translateFactor}px,0)`,
      scale: `scale(1)`,
    }
  }

  const items = toasts.map((t, i) => ({...t, index: toasts.length - 1 - i}))
  const transitions = useTransition(items, (toast) => toast.id, {
    update: (item) => {
      const height = refMap?.current?.[item.id]?.clientHeight ?? 0
      const transforms = isHovered ? getOverviewTransforms(item.index, height) : getUpdateTransforms(item.index)

      return {
        transform: `${transforms.translate} ${transforms.scale}`,
        opacity: item.index < MAX_NOTIFICATIONS ? 1 : 0,
      }
    },
    from: {
      transform: `translate3d(0, 100px,0) scale(1)`,
      opacity: 0,
    },
    enter: {
      transform: `translate3d(0, 0px,0) scale(1)`,
      opacity: 1,
    },
    leave: {opacity: 0, pointerEvents: 'none'},
    config: config.stiff,
  })

  const addToast = useCallback(
    ({message, type}) => {
      const id = uuid()
      const timer = Timeout(() => clearToast(id), TOAST_DURATION)
      setToasts([...toasts, {message, id, timer, type}])
    },
    [toasts],
  )

  function clearToast(id) {
    setToasts((currentToasts) => {
      const index = currentToasts.findIndex((toast) => toast.id === id)
      return currentToasts.filter((_, i) => i !== index)
    })
  }

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <Portal>
        <div className="fixed bottom-2 md:bottom-6 left-0 w-full max-w-full z-20">
          <div>
            {transitions.map(({item, props, key}) => (
              <Toast
                setIsHovered={setIsHovered}
                isHovered={isHovered}
                ref={(ref) => {
                  if (ref) {
                    refMap.current[item.id] = ref
                  }
                }}
                key={key}
                {...item}
                clearToast={clearToast}
                style={props}
              />
            ))}
          </div>
        </div>
      </Portal>
    </ToastContext.Provider>
  )
}

export default function useToast() {
  return React.useContext(ToastContext)
}
