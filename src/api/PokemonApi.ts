import { ListResponseType, Pokemon, Pokemons, RequestListParams } from 'src/types'
import { api } from './api'

const URL = 'pokemon'

export const pokemonApi = {
  getPokemons: (params: RequestListParams) => {
    return api.get<ListResponseType<Pokemons>>(URL, {
      params
    })
  },
  getPokemonByName: (name: string) => {
    return api.get<Pokemon>(`${URL}/${name}`)
  }
}
