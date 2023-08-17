import { useState, useEffect } from 'react'

export default function useDebounce(value: [], duration: number = 500) {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [duration, value])
  return debounceValue
}
