import { Outlet } from 'react-router-dom'
import { Footer, Header } from 'src/components'

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
