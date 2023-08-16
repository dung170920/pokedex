import { HiPower } from 'react-icons/hi2'

const Footer = () => {
  return (
    <footer className='grid grid-cols-[5rem_auto_5rem] border-t border-t-gray-medium'>
      <div className='flex items-center justify-center border-r border-r-gray-medium'></div>
      <div>Footer</div>
      <div className='flex items-center justify-center border-l border-l-gray-medium'>
        <HiPower className='text-red-500 cursor-pointer w-7 h-7' />
      </div>
    </footer>
  )
}

export default Footer