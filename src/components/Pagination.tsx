import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between px-4 border-t border-gray-medium sm:px-0'>
      <div className='flex flex-1 w-0 -mt-px'>
        <Link
          to='#'
          className='inline-flex items-center pt-4 pr-1 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          <HiOutlineArrowNarrowLeft className='w-5 h-5 mr-3 text-gray-light' aria-hidden='true' />
          Previous
        </Link>
      </div>
      <div className='hidden md:-mt-px md:flex'>
        <Link
          to='#'
          className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          1
        </Link>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-light hover:text-gray-700 hover:border-gray-300" */}
        <Link
          to='#'
          className='inline-flex items-center px-4 pt-4 text-sm font-medium text-indigo-600 border-t-2 border-indigo-500'
          aria-current='page'
        >
          2
        </Link>
        <Link
          to='#'
          className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          3
        </Link>
        <span className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light'>
          ...
        </span>
        <Link
          to='#'
          className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          8
        </Link>
        <Link
          to='#'
          className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          9
        </Link>
        <Link
          to='#'
          className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          10
        </Link>
      </div>
      <div className='flex justify-end flex-1 w-0 -mt-px'>
        <Link
          to='#'
          className='inline-flex items-center pt-4 pl-1 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          Next
          <HiOutlineArrowNarrowRight className='w-5 h-5 ml-3 text-gray-light' aria-hidden='true' />
        </Link>
      </div>
    </div>
  )
}

export default Pagination
