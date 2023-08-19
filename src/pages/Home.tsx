import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from 'src/api'
import { Loading, Pagination, PokemonCard } from 'src/components'
import { useQueryParams } from 'src/hooks'
import { RequestListParams } from 'src/types'

const Home = () => {
  const queryParams: RequestListParams = useQueryParams()

  const initParams: RequestListParams = {
    offset: Number(queryParams.offset) || 1,
    limit: Number(queryParams.limit) || 10
  }

  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', { ...initParams }],
    queryFn: () =>
      pokemonApi.getPokemons(
        queryParams.search && queryParams.search.length > 0
          ? {
              offset: 0,
              limit: 100000
            }
          : {
              ...initParams,
              offset: initParams.offset === 1 ? 0 : queryParams.offset! * 10
            }
      ),
    keepPreviousData: true,
    select: (data) => {
      if (queryParams.search) {
        const newList = data?.data.results?.filter((e) => e.name.includes(queryParams.search!.toLowerCase()))
        return {
          ...data,
          data: {
            ...data.data,
            results: newList
          }
        }
      }
      return data
    }
  })

  return (
    <div className='w-full h-full px-8 py-6 overflow-y-scroll'>
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <>
            <div className='grid gap-5 mb-5 lg:grid-cols-5 md:grid-cols-3'>
              {data.data.results != null &&
                data.data.results.map(({ name }) => (
                  <div key={name}>
                    <PokemonCard name={name} />
                  </div>
                ))}
            </div>
            <Pagination
              totalPages={Math.floor((data.data.count || 0) / Number(initParams?.limit))}
              params={initParams}
            />
          </>
        )
      )}
    </div>
  )
}

export default Home
