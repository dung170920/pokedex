import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from 'src/api'
import { Loading, Pagination, PokemonCard } from 'src/components'
import { useQueryParams } from 'src/hooks'
import { RequestListParams } from 'src/types'

// import { ListResponseType, Pokemons } from 'src/types'

const Home = () => {
  const queryParams: RequestListParams = useQueryParams()

  //const [page, setPage] = useState<number>(1)
  // const searchList = queryClient.getQueryData(['pokemons']) as
  //   | AxiosResponse<ListResponseType<Pokemons>, any>
  //   | undefined

  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', { ...queryParams }],
    queryFn: () =>
      pokemonApi.getPokemons({
        ...queryParams,
        offset: Number(queryParams.offset) === 1 ? 0 : queryParams.offset! * 10
      }),
    keepPreviousData: true
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
              totalPages={Math.floor((data.data.count || 0) / Number(queryParams?.limit || 0))}
              params={queryParams}
            />
          </>
        )
      )}
    </div>
  )
}

export default Home
