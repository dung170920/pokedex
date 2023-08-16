import { useQuery } from '@tanstack/react-query'
import { getPokemonByName } from 'src/api'

interface PokemonCardProps {
  name: string
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { data } = useQuery({
    queryKey: ['pokemons', name],
    queryFn: () => getPokemonByName(name)
  })

  return (
    <div className='flex flex-col items-center justify-center w-full p-4 bg-white bg-opacity-10 rounded-xl'>
      <img src={data?.data.sprites.front_default ?? ''} alt='' />
      {data?.data.name}
    </div>
  )
}

export default PokemonCard
