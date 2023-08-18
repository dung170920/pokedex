import { Navigate, useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Main, PokemonDetail } from 'src/layouts'
import { Loading } from 'src/components'

const loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: React.Attributes) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
)

const HomePage = loadable(lazy(() => import('src/pages/Home')))
const DescriptionPage = loadable(lazy(() => import('src/pages/Description')))
const EvolutionPage = loadable(lazy(() => import('src/pages/Evolution')))
const LocationPage = loadable(lazy(() => import('src/pages/Location')))

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
          element: <PokemonDetail />,
          children: [
            {
              path: 'description',
              element: <DescriptionPage />,
              index: true
            },
            {
              path: 'location',
              element: <LocationPage />
            },
            {
              path: 'evolution',
              element: <EvolutionPage />
            },
            {
              path: '',
              element: <Navigate to={'description'} replace={true} />
            }
          ]
        }
      ]
    }
  ])
}
