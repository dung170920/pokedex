import { Sprite, Types } from 'src/types'

export interface Pokemon {
  id: number
  name: string
  weight: number
  height: number
  is_default: boolean
  sprites: Sprite
  types: Types
}

export type Pokemons = Pick<Pokemon, 'name'>[]
