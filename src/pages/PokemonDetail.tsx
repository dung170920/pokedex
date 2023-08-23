import classNames from 'classnames'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { detailLinks } from 'src/constants'
import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from 'src/api'
import { pokeball } from 'src/assets'
import { Loading, Progress } from 'src/components'
import { formatPokemonName, getTypeColor } from 'src/utils'
import { FaWeightScale, FaRulerVertical } from 'react-icons/fa6'

const PokemonDetail = () => {
  // const [active, setActive] = useState(detailLinks[0].link)
  const params = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', params?.name],
    staleTime: 10 * 1000,
    queryFn: () => pokemonApi.getPokemonByName(params?.name || '')
  })

  const color = `type-${getTypeColor(data?.data.types || [])}`

  return (
    <div className='relative flex flex-col h-full gap-4 p-4 overflow-scroll '>
      {/* <div className='flex w-full gap-6 p-5 text-lg bg-white md:flex-col md:absolute top-4 right-4 md:w-fit bg-opacity-10 h-fit'>
        {detailLinks.map((e) => (
          <Link
            key={e.link}
            to={e.link}
            className={classNames(
              'flex items-center uppercase tracking-widest before:rounded-full before:h-2 gap-3 text-sm w-fit',
              {
                'text-red-500 before:bg-red-500 before:w-6': e.link === active
              },
              {
                'text-gray-light before:bg-gray-light before:w-2': e.link !== active
              }
            )}
            onClick={() => setActive(e.link)}
          >
            {e.name}
          </Link>
        ))}
      </div> */}
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex flex-col flex-1 gap-4 h-fit'>
          <div
            className={`p-4 md:w-fit w-full max-w-[2/4] before:h-[0.3rem] before:w-[4rem] before:bg-${color} before:absolute before:top-0 before:left-0 bg-white bg-opacity-10 relative`}
          >
            <h1 className='mb-4 text-xl uppercase lg:text-4xl'>{formatPokemonName(data?.data.name || '')}</h1>
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

          <div className='flex flex-col items-center justify-between gap-4 md:items-end md:flex-row'>
            <div className='flex flex-col w-full gap-3 md:w-1/3 lg:w-1/4'>
              {data?.data.stats.map((e) => (
                <div className='flex items-center justify-end w-full gap-4' key={e.stat.name}>
                  <span className='w-full tracking-wider text-right whitespace-nowrap'>
                    {formatPokemonName(e.stat.name)}: {e.base_stat}
                  </span>
                  <Progress value={e.base_stat} color={color} />
                </div>
              ))}
            </div>
            <div className='relative md:mb-20'>
              <div
                className={`flex items-center justify-center h-[42vh] w-[42vh] border-[0.2rem] border-${color} rounded-full h-full w-full`}
              >
                <div
                  className={`h-[calc(42vh-4rem)] w-[calc(42vh-4rem)] flex items-center justify-center rounded-full border-[0.3rem] border-${color}`}
                >
                  <img src={data?.data.sprites.front_default || pokeball} alt='' className='z-10 object-cover h-full' />
                </div>
              </div>
              <div className='absolute top-0 flex gap-12 -translate-x-1/2 left-1/2'>
                <div className={`h-[42vh] w-[0.3rem] bg-${color} rotate-45 z-0`}></div>
                <div className={`h-[42vh] w-[0.3rem] bg-${color} rotate-45 z-0`}></div>
              </div>
            </div>
            <div
              className={`p-4 before:h-[0.3rem] before:w-[4rem] before:bg-${color} before:absolute before:top-0 before:left-0 bg-white bg-opacity-10 relative flex gap-6 h-fit w-fit lg:flex-row flex-row md:flex-col`}
            >
              <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-3 mb-1'>
                  <FaRulerVertical className='w-5 h-5' />
                  <span className='text-lg font-semibold whitespace-nowrap'>{(data?.data.height || 0) / 10} m</span>
                </div>
                <span className='text-sm'>Height</span>
              </div>
              <div className='border-l border-gray-medium' />
              <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-3 mb-1'>
                  <FaWeightScale className='w-5 h-5' />
                  <span className='text-lg font-semibold whitespace-nowrap'>{(data?.data.weight || 0) / 10} kg</span>
                </div>
                <span className='text-sm'>Weight</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonDetail
