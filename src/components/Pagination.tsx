import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import { RequestListParams } from 'src/types'
import queryString from 'query-string'

interface PaginationProps {
  totalPages: number
  params: RequestListParams
}

const Pagination = ({ totalPages, params }: PaginationProps) => {
  const offset = Number(params.offset) - 1
  const navigate = useNavigate()

  return (
    <ReactPaginate
      className='flex items-center justify-center px-4 overflow-hidden'
      breakLabel={
        <div className='inline-flex items-center px-4 py-2 text-sm font-medium border-t-2 border-transparent text-gray-light'>
          ...
        </div>
      }
      nextLabel={
        <button
          onClick={() =>
            offset >= totalPages - 1
              ? null
              : navigate(`?${queryString.stringify({ limit: params.limit, offset: offset + 1 })}`)
          }
          className='flex-1 hidden md:flex'
        >
          <div
            className={`inline-flex items-center py-2 pl-4 text-sm font-medium border-t-2 border-transparent ${
              offset >= totalPages - 1
                ? 'text-gray-medium cursor-default'
                : 'text-gray-light hover:border-white hover:text-white'
            }`}
          >
            Next
            <HiOutlineArrowNarrowRight className='w-5 h-5 ml-3 text-inherit' aria-hidden='true' />
          </div>
        </button>
      }
      pageLinkClassName={`flex items-center px-4 py-2 text-sm font-medium text-gray-light border-t-2 border-transparent hover:border-white hover:text-white`}
      selectedPageRel={'react-paginate'}
      onPageChange={({ selected }) => {
        navigate(`?${queryString.stringify({ limit: params.limit, offset: selected + 1 })}`)
      }}
      pageRangeDisplayed={2}
      renderOnZeroPageCount={null}
      pageCount={totalPages}
      previousLabel={
        <button
          onClick={() =>
            offset === 0 ? null : navigate(`?${queryString.stringify({ limit: params.limit, offset: offset - 1 })}`)
          }
          className='flex-1 hidden md:flex'
        >
          <div
            className={`inline-flex items-center py-2 pr-4 text-sm font-medium border-t-2 border-transparent ${
              offset === 0 ? 'text-gray-medium cursor-default' : 'text-gray-light hover:border-white hover:text-white'
            }`}
          >
            <HiOutlineArrowNarrowLeft className='w-5 h-5 mr-3 text-inherit' aria-hidden='true' />
            Previous
          </div>
        </button>
      }
      initialPage={offset}
    />
  )
}

export default Pagination
