import { pokeballIcon } from 'src/assets'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { navLinks } from 'src/constants'
import { useEffect, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { debounce } from 'lodash'
import { AxiosResponse } from 'axios'
import { ListResponseType, Pokemons } from 'src/types'
import { pokemonApi } from 'src/api'

const Header = () => {
  const queryClient = useQueryClient()
  const { pathname } = useLocation()
  const [active, setActive] = useState('')
  const handleChange = debounce((value: string) => filterPokemons(value), 500)

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  useQuery({
    queryKey: ['pokemons'],
    staleTime: 500,
    // enabled:
    queryFn: () =>
      pokemonApi.getPokemons({
        offset: 0,
        limit: 100000
      })
  })

  function filterPokemons(value: string) {
    const list = queryClient.getQueryData(['pokemons']) as AxiosResponse<ListResponseType<Pokemons>, any> | undefined

    const newValue = list?.data.results?.filter((e) => e.name.includes(value.toLowerCase()))
    queryClient.setQueryData(['pokemons'], {
      ...list,
      data: {
        ...list?.data,
        results: newValue
      }
    })
  }

  return (
    <nav className='grid grid-cols-[5rem_auto_5rem] border-b border-b-gray-medium '>
      <div className='flex items-center justify-center border-r border-r-gray-medium'>
        <Link to='/'>
          <img src={pokeballIcon} alt='' className='w-10 h-10' />
        </Link>
      </div>
      <ul className='flex items-center justify-between'>
        <div className='flex w-1/3 px-5 py-4 ml-4 text-white bg-white bg-opacity-10 rounded-xl'>
          <RiSearch2Line className='w-6 h-6 mr-3 text-gray-light' />
          <input
            type='text'
            placeholder='Enter name of pokemon'
            onChange={(e) => handleChange(e.target.value)}
            className='w-full bg-transparent border-none outline-none placeholder:text-gray-light'
          />
        </div>
        <div>
          {navLinks.map((e) => (
            <Link
              key={e.link}
              to={e.link}
              className={classNames(
                'items-center font-medium tracking-widest uppercase py-6 px-20 border-transparent border-b-2',
                {
                  'border-b-red-500 text-red-500': active === e.link
                },
                {
                  'text-gray-light hover:text-white hover:border-white': active !== e.link
                }
              )}
            >
              {e.name}
            </Link>
          ))}
        </div>
      </ul>
      <div className='flex items-center justify-center border-l border-l-gray-medium'></div>
    </nav>
  )
}

export default Header
