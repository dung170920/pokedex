import { pokeballIcon } from 'src/assets/images'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { navLinks } from 'src/constants'

const Header = () => {
  return (
    <nav className='grid grid-cols-[5rem_auto_5rem] border-b border-b-gray-medium'>
      <div className='flex items-center justify-center border-r border-r-gray-medium'>
        <Link to='/'>
          <img src={pokeballIcon} alt='' className='w-10 h-10' />
        </Link>
      </div>
      <div>
        <ul className='flex items-center justify-center gap-20'>
          {navLinks.map((e) => (
            <li key={e.link}>
              <Link to={e.link}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center border-l border-l-gray-medium'>
        <HiMenuAlt1 className='text-white cursor-pointer w-7 h-7' />
      </div>
    </nav>
  )
}

export default Header
