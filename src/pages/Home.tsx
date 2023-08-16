import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getPokemons } from 'src/api'
import { Pagination, PokemonCard } from 'src/components'

const Home = () => {
  const limit = 10
  const [offset] = useState(0)

  const { data } = useQuery({
    queryKey: ['pokemons', offset],
    queryFn: () =>
      getPokemons({
        offset,
        limit
      }),
    keepPreviousData: true
  })

  return (
    <div className='w-full h-full px-8 py-6 overflow-y-scroll'>
      <div className='grid grid-cols-5 gap-5 mb-5'>
        {data?.data.results.map(({ name }) => (
          <div key={name}>
            <PokemonCard name={name} />
          </div>
        ))}
      </div>
      <Pagination currentPage={offset} totalPages={data?.data.count || 0 / limit} />
    </div>
  )
}

export default Home
