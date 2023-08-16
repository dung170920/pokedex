import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getPokemons } from 'src/api'
import { PokemonCard } from 'src/components'

const Home = () => {
  const [offset] = useState(0)

  const { data } = useQuery({
    queryKey: ['pokemons', offset],
    queryFn: () =>
      getPokemons({
        offset,
        limit: 12
      }),
    keepPreviousData: true
  })

  return (
    <div className='grid w-full h-full grid-cols-4 gap-5 p-10 overflow-hidden'>
      {data?.data.results.map(({ name }) => (
        <div key={name}>
          <PokemonCard name={name} />
        </div>
      ))}
      {/* <Pagination /> */}
    </div>
  )
}

export default Home
