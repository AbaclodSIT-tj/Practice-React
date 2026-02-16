import {NavBar} from './components/navBar'
import Home from './pages/home'
import About from './pages/about'
import {Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>

    </>
  )
}

export default App
