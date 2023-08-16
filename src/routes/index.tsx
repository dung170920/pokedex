import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Main } from 'src/layouts'

const loadable = (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: React.Attributes) => (
  <Suspense fallback={<div>loading</div>}>
    <Component {...props} />
  </Suspense>
)

const HomePage = loadable(lazy(() => import('src/pages/Home')))

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])
}
