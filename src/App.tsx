import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Router from 'src/routes'
import { pokeball, pokeball2 } from 'src/assets'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <main>
        <div className='absolute grid w-full h-full grid-cols-3 bg-black -z-10'>
          <img src={pokeball} alt='' className='h-80' />
          <img src={pokeball2} alt='' className='h-80' />
          <img src={pokeball} alt='' className='h-80' />
          <img src={pokeball2} alt='' className='h-80' />
          <img src={pokeball} alt='' className='h-80' />
          <img src={pokeball2} alt='' className='h-80' />
        </div>
        <Router />
      </main>
    </QueryClientProvider>
  )
}

export default App
