export interface RequestListParams {
  limit?: number
  offset?: number
  search?: string
}

export interface ListResponseType<T> {
  count: number
  next?: string
  previous?: string
  results: T
}
