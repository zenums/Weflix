import './App.css'
import Discovery from './views/discovery'
import TopNav from './components/navBar/topNav'
import Main from './views/main/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TopNav />
        <Main>
          <Routes>
            <Route path="/" element={<Discovery />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
