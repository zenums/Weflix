import './App.css'
import Home from './views/home'
import TopNav from './components/navBar/topNav'
import LeftNav from './components/navBar/leftNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <TopNav />
      <LeftNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
