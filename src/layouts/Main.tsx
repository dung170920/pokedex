import { Outlet } from 'react-router-dom'
import { Footer, Header } from 'src/components'
import { pokeball, pokeball2 } from 'src/assets/images'

const Main = () => {
  return (
    <>
      <div className='absolute grid w-full h-full grid-cols-3 bg-black -z-10'>
        <img src={pokeball} alt='' className='h-80' />
        <img src={pokeball2} alt='' className='h-80' />
        <img src={pokeball} alt='' className='h-80' />
        <img src={pokeball2} alt='' className='h-80' />
        <img src={pokeball} alt='' className='h-80' />
        <img src={pokeball2} alt='' className='h-80' />
      </div>
      <div className='z-10 w-full h-full text-white bg-opacity-80 bg-gray-dark backdrop-blur-2xl grid grid-rows-[10vh_auto_10vh] grid-cols-[1fr]'>
        <Header />
        <div className='mx-20 overflow-hidden border border-t-0 border-b-0 border-gray-medium'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Main
