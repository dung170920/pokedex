import { Outlet } from 'react-router-dom'
import { Header, Footer } from 'src/components'

const Main = () => {
  return (
    <div className='z-10 w-full h-full text-white bg-opacity-80 bg-gray-dark backdrop-blur-2xl grid grid-rows-[10vh_auto_10vh] grid-cols-[1fr]'>
      <Header />
      <div className='md:mx-[10vh] overflow-hidden border border-t-0 border-b-0 border-gray-medium'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
