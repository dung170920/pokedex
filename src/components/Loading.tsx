import Lottie from 'react-lottie'
import { pokeballLoading } from 'src/assets'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pokeballLoading
  }

  return (
    <div className='flex items-center justify-center h-full'>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default Loading
