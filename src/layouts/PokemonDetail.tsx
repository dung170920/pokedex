import { Outlet } from 'react-router-dom'

const PokemonDetail = () => {
  return (
    <div className='flex items-center relative h-full'>
      <Outlet />
    </div>
  )
}

export default PokemonDetail
