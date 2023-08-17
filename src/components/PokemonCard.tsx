import { useQuery } from '@tanstack/react-query'
import { getPokemonByName } from 'src/api'
import { pokeball } from 'src/assets'
import { formatPokemonNumber, formatPokemonName, getTypeColor } from 'src/utils'

interface PokemonCardProps {
  name: string
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data } = useQuery({
    queryKey: ['pokemons', name],
    queryFn: () => getPokemonByName(name)
  })

  const color = `type-${getTypeColor(data?.data.types ?? [])}`

  return (
    <div
      className={`flex flex-col items-center justify-center w-full gap-2 pt-4 overflow-hidden duration-500 ease-in-out bg-white border border-transparent bg-opacity-10 rounded-xl hover:border-${color} shadow-glow hover:shadow-${color}/40 hover:-translate-y-1 `}
    >
      <div className={`w-full px-4 text-right text-${color}`}>{formatPokemonNumber(data?.data.id || 0)}</div>
      <img src={data?.data.sprites.front_default || pokeball} alt='' loading='lazy' className='px-4 h-36' />
      <div className={`w-full px-2 py-1 text-lg text-center capitalize text-ellipsis whitespace-nowrap bg-${color}`}>
        {formatPokemonName(data?.data.name || '')}
      </div>
    </div>
  )
}

export default PokemonCard
