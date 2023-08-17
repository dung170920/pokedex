import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getPokemons } from 'src/api'
import { RiSearch2Line } from 'react-icons/ri'
import { Loading, Pagination, PokemonCard } from 'src/components'

const Home = () => {
  const limit = 10
  const [offset] = useState<number>(0)
  // const [searchParams, setSearchParams] = useDebounce([limit, offset, searchName])

  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', offset],
    queryFn: () =>
      getPokemons({
        offset,
        limit
      }),
    keepPreviousData: true,
    staleTime: 500
  })

  return (
    <div className='w-full h-full px-8 py-6 overflow-y-scroll'>
      <div className='mb-5 flex text-white bg-white bg-opacity-10 px-5 py-4 rounded-xl w-1/3'>
        <RiSearch2Line className='h-6 w-6 text-gray-light mr-3' />
        <input
          type='text'
          placeholder='Enter name'
          // onChange={() => }
          className='outline-none border-none bg-transparent placeholder:text-gray-light '
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='grid grid-cols-5 gap-5 mb-5'>
            {data?.data.results.map(({ name }) => (
              <div key={name}>
                <PokemonCard name={name} />
              </div>
            ))}
          </div>
          <Pagination currentPage={offset} totalPages={data?.data.count || 0 / limit} />
        </>
      )}
    </div>
  )
}

export default Home
