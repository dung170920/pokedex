import { useSearchParams } from 'react-router-dom'

export function useQueryParams() {
  const [searchParams] = useSearchParams()

  return Object.fromEntries([...searchParams])
}
