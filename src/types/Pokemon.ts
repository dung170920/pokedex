import { Sprite, Types, Stats } from 'src/types'

export interface Pokemon {
  id: number
  name: string
  weight: number
  height: number
  is_default: boolean
  sprites: Sprite
  types: Types
  stats: Stats
}

export type Pokemons = Pick<Pokemon, 'name'>[]
