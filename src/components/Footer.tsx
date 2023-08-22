import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='grid grid-cols-[10vh_auto_10vh] border-t border-t-gray-medium'>
      <div className='flex items-center justify-center border-r border-r-gray-medium'></div>
      <div className='flex items-center justify-center gap-2 mx-2 md:mx-6'>
        <AiOutlineCopyrightCircle className='w-6 h-6' />
        <span className='text-sm'>2023 - Copyright by Dung Nguyen</span>
      </div>
      <div className='flex items-center justify-center border-l border-l-gray-medium'></div>
    </footer>
  )
}

export default Footer
