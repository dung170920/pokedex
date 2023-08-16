import { Type } from 'src/types'

export function formatPokemonNumber(id: number) {
  const str = id.toString()
  if (str.length > 4) return `#${str[0]}${str.substring(2)}`
  const countOfZeroNumbers = (id / 1000 >= 1 ? 4 : 3) - str.length

  return `#${'0'.repeat(countOfZeroNumbers)}${id}`
}

export function formatPokemonName(name: string) {
  const list = name.split('-')

  return list.join(' ')
}

export function getTypeColor(types: Type[]): string {
  return types.find((e) => e.slot === 1)?.type.name ?? 'unknown'
}
