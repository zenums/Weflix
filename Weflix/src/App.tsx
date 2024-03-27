import './App.css'
import Discovery from './views/discovery'
import TopNav from './components/navBar/topNav'
import Main from './views/main/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <TopNav />
      <Main>
        <Routes>
          <Route path="/" element={<Discovery />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App
