import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { pokemonApi } from 'src/api'
import { pokeball } from 'src/assets'
import { Loading, Progress } from 'src/components'
import { formatPokemonName, getTypeColor } from 'src/utils'
import { FaWeightScale, FaRulerVertical } from 'react-icons/fa6'

const Description = () => {
  const params = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', params?.name],
    staleTime: 10 * 1000,
    queryFn: () => pokemonApi.getPokemonByName(params?.name || '')
  })

  const color = `type-${getTypeColor(data?.data.types || [])}`

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div
            className={`absolute top-4 left-4 p-4 w-1/4 before:h-[0.3rem] before:w-[9rem] before:bg-${color} before:absolute before:top-0 before:left-0 bg-white bg-opacity-10`}
          >
            <h1 className='mb-4 text-4xl uppercase'>{formatPokemonName(data?.data.name || '')}</h1>
            <div className='flex gap-4'>
              {data?.data.types.map((e) => (
                <span
                  key={e.type.name}
                  className={`capitalize py-1 px-3 bg-type-${e.type.name} rounded-full font-semibold`}
                >
                  {e.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className='absolute flex flex-col w-1/4 gap-4 left-4 bottom-8'>
            {data?.data.stats.map((e) => (
              <div className='flex items-center justify-end gap-4' key={e.stat.name}>
                <p className='w-full tracking-wider text-right whitespace-nowrap'>
                  {formatPokemonName(e.stat.name)}: {e.base_stat}
                </p>
                <Progress value={e.base_stat} color={color} />
              </div>
            ))}
          </div>
          <div className='absolute flex mt-12 -translate-x-1/2 left-1/2'>
            <div className={`flex items-center justify-center w-96 h-96 border-[0.2rem] border-${color} rounded-full`}>
              <div
                className={`w-80 h-80 flex items-center justify-center rounded-full border-[0.3rem] border-${color}`}
              >
                <img src={data?.data.sprites.front_default || pokeball} alt='' className='z-10 object-cover h-full' />
              </div>
            </div>
            <div className='absolute flex gap-12 -translate-x-1/2 left-1/2'>
              <div className={`h-112 w-[0.3rem] bg-${color} rotate-45 z-0`}></div>
              <div className={`h-112 w-[0.3rem] bg-${color} rotate-45 z-0`}></div>
            </div>
          </div>
          <div
            className={`absolute right-4 bottom-8 p-4 before:h-[0.3rem] before:w-[9rem] before:bg-${color} before:absolute before:top-0 before:left-0 bg-white bg-opacity-10 flex gap-6`}
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center gap-3 mb-1'>
                <FaRulerVertical className='w-5 h-5' />
                <span className='text-xl font-semibold'>{(data?.data.height || 0) / 10} m</span>
              </div>
              <span className='text-sm'>Height</span>
            </div>
            <div className='border-l border-gray-medium' />
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center gap-3 mb-1'>
                <FaWeightScale className='w-5 h-5' />
                <span className='text-xl font-semibold'>{(data?.data.weight || 0) / 10} kg</span>
              </div>
              <span className='text-sm'>Weight</span>
            </div>{' '}
          </div>
        </>
      )}
    </>
  )
}

export default Description
