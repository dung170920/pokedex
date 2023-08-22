import classNames from 'classnames'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { detailLinks } from 'src/constants'

const PokemonDetail = () => {
  const [active, setActive] = useState(detailLinks[0].link)

  return (
    <div className='relative flex flex-col h-full gap-4 p-4 overflow-scroll '>
      <div className='flex w-full gap-6 p-5 text-lg bg-white md:flex-col md:absolute top-4 right-4 md:w-fit bg-opacity-10 h-fit'>
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
      </div>
      <Outlet />
    </div>
  )
}

export default PokemonDetail
