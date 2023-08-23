import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Main } from 'src/layouts'
import { Loading } from 'src/components'

const loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: React.Attributes) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
)

const HomePage = loadable(lazy(() => import('src/pages/Home')))
const PokemonDetailPage = loadable(lazy(() => import('src/pages/PokemonDetail')))

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'pokemon/:name',
          element: <PokemonDetailPage />
        }
      ]
    }
  ])
}
