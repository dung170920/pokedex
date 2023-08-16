import { ListResponseType, Pokemon, RequestListParams } from 'src/types'
import { api } from './api'

const URL = 'pokemon'

export const getPokemons = (params: RequestListParams) => {
  return api.get<ListResponseType<Pokemon>>(URL, {
    params
  })
}

export const getPokemonByName = (name: string) => {
  return api.get<Pokemon>(`${URL}/${name}`)
}

export const getPokemonById = (id: number) => {
  return api.get<Pokemon>(`${URL}/${id}`)
}
