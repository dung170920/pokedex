export interface RequestListParams {
  limit: number
  offset: number
}

export interface ListResponseType<T> {
  count: number
  next: string
  previous: string
  results: T[]
}
