import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getPokemonByName } from 'src/api'
import { Loading, Progress } from 'src/components'
import { formatPokemonName, getTypeColor } from 'src/utils'

const Description = () => {
  const params = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', params?.name],
    staleTime: 10 * 1000,
    queryFn: () => getPokemonByName(params?.name || '')
  })

  const color = `type-${getTypeColor(data?.data.types ?? [])}`

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            className={`absolute top-4 left-4 p-4 w-1/4 uppercase before:h-[0.3rem] before:w-[9rem] before:bg-${color} before:absolute before:top-0 before:left-0`}
          >
            <h1 className='mb-4 text-4xl'>{data?.data.name}</h1>
            <h3>Type: {data?.data.types.map((e) => e.type.name).join(' - ')}</h3>
          </div>
          <div className='absolute left-4 bottom-8 flex flex-col gap-4 w-1/4'>
            {data?.data.stats.map((e) => (
              <div className='flex items-center gap-4 justify-end' key={e.stat.name}>
                <p className='tracking-wider whitespace-nowrap text-right w-full'>
                  {formatPokemonName(e.stat.name)}: {e.base_stat}
                </p>
                <Progress value={e.base_stat} color={color} />
              </div>
            ))}
          </div>
          <div className='flex mt-12 absolute left-1/2 -translate-x-1/2'>
            <div
              className={`flex items-center justify-center w-96 h-96 border-[0.2rem] border-${color} rounded-full relative`}
            >
              <div
                className={`w-80 h-80 flex items-center justify-center rounded-full border-[0.3rem] border-${color}`}
              >
                <img src={data?.data.sprites.front_default || ''} alt='' className='h-96 w-96 z-10' />
              </div>
            </div>
            <div className='flex gap-12 absolute left-1/2 -translate-x-1/2'>
              <div className={`h-112 w-[0.3rem] bg-${color} rotate-45 z-0`}></div>
              <div className={`h-112 w-[0.3rem] bg-${color} rotate-45 z-0`}></div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Description
