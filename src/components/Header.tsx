import { pokeballIcon } from 'src/assets'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { navLinks } from 'src/constants'
import { useEffect, useState } from 'react'

const Header = () => {
  const { pathname } = useLocation()
  const [active, setActive] = useState(navLinks[0].link)

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  return (
    <nav className='grid grid-cols-[5rem_auto_5rem] border-b border-b-gray-medium '>
      <div className='flex items-center justify-center border-r border-r-gray-medium'>
        <Link to='/'>
          <img src={pokeballIcon} alt='' className='w-10 h-10' />
        </Link>
      </div>
      <ul className='flex items-center justify-center'>
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
      </ul>
      <div className='flex items-center justify-center border-l border-l-gray-medium'>
        <HiMenuAlt1 className='text-white cursor-pointer w-7 h-7' />
      </div>
    </nav>
  )
}

export default Header
