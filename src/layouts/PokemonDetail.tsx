import classNames from 'classnames'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { detailLinks } from 'src/constants'

const PokemonDetail = () => {
  const [active, setActive] = useState(detailLinks[0].link)

  return (
    <div className='flex items-center relative h-full'>
      <div className='absolute right-4 top-4 flex flex-col gap-6 text-lg'>
        {detailLinks.map((e) => (
          <Link
            key={e.link}
            to={e.link}
            className={classNames(
              'flex items-center uppercase tracking-wider before:rounded-full before:h-2 gap-3',
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
      </div>
      <Outlet />
    </div>
  )
}

export default PokemonDetail
