import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import { RequestListParams } from 'src/types'
import queryString from 'query-string'

interface PaginationProps {
  totalPages: number
  params: RequestListParams
  //handlePageClick: Dispatch<SetStateAction<number>>
}

const Pagination = ({ totalPages, params }: PaginationProps) => {
  const offset = Number(params.offset) - 1
  const navigate = useNavigate()

  return (
    <ReactPaginate
      containerClassName='flex items-center justify-center sm:px-0 px-4'
      breakLabel={
        <button className='inline-flex items-center px-4 py-2 text-sm font-medium border-t-2 border-transparent text-gray-light'>
          ...
        </button>
      }
      nextLabel={
        <button
          onClick={() =>
            offset === totalPages - 1 ? null : navigate(`?${queryString.stringify({ ...params, offset: offset + 1 })}`)
          }
          className='flex flex-1'
        >
          <div className='inline-flex items-center py-2 pl-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'>
            Next
            <HiOutlineArrowNarrowRight className='w-5 h-5 ml-3 text-gray-light' aria-hidden='true' />
          </div>
        </button>
      }
      activeLinkClassName='text-red-500 bg-red-500 bg-opacity-20'
      // activeClassName='active:border-red-500'
      //pageClassName='border-t-2 border-transparent'
      pageLinkClassName={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-light hover:border-white hover:text-white`}
      onPageChange={({ selected }) => {
        console.log('selected :', selected)
        navigate(`?${queryString.stringify({ ...params, offset: selected + 1 })}`)
      }}
      pageRangeDisplayed={3}
      pageCount={totalPages - 1}
      previousLabel={
        <button
          onClick={() =>
            offset === 0 ? null : navigate(`?${queryString.stringify({ ...params, offset: offset - 1 })}`)
          }
          className='flex flex-1'
        >
          <div className='inline-flex items-center py-2 pr-4 text-sm font-medium border-t-2 border-transparent text-gray-light hover:border-white hover:text-white'>
            <HiOutlineArrowNarrowLeft className='w-5 h-5 mr-3 text-gray-light' aria-hidden='true' />
            Previous
          </div>
        </button>
      }
      renderOnZeroPageCount={null}
      initialPage={offset}
    />
  )
}

export default Pagination
