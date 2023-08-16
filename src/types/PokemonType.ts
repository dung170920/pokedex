import { Sprite } from 'src/types'

export interface Pokemon {
  id: number
  name: string
  weight: number
  height: number
  is_default: boolean
  sprites: Sprite
}
