import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const activeColor = 'border-indigo-500 text-indigo-500'

  return (
    <div className='flex items-center justify-between px-4 border-t border-gray-medium sm:px-0'>
      <div className='flex flex-1 -mt-px'>
        <Link
          to='#'
          className='inline-flex items-center pt-4 pr-1 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
        >
          <HiOutlineArrowNarrowLeft className='w-5 h-5 mr-3 text-gray-light' aria-hidden='true' />
          Previous
        </Link>
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {/* {[...Array(totalPages).keys()].map((_, index) => (
          <Link
            key={index}
            to='#'
            className={`inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 ${
              currentPage === index
                ? activeColor
                : 'border-transparent text-gray-light hover:border-white hover:text-white'
            }`}
          >
            {index + 1}
          </Link>
        ))} */}
        {totalPages <= 5 ? (
          [...Array(totalPages).keys()].map((index) => (
            <Link
              key={index}
              to='#'
              className={`inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 ${
                currentPage === index
                  ? activeColor
                  : 'border-transparent text-gray-light hover:border-white hover:text-white'
              }`}
            >
              {index + 1}
            </Link>
          ))
        ) : (
          <>
            {[...Array(2).keys()].map((index) => (
              <Link
                key={index}
                to='#'
                className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
              >
                {index + 1}
              </Link>
            ))}
            <span className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light'>
              ...
            </span>
            {[...Array(2).keys()].map((index) => (
              <Link
                key={index}
                to='#'
                className='inline-flex items-center px-4 pt-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'
              >
                {totalPages - (index + 1)}
              </Link>
            ))}
          </>
        )}
      </div>
      <div className='flex justify-end flex-1 -mt-px'>
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
