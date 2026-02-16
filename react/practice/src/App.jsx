import {NavBar} from './components/navBar'
import Home from './pages/home'
import About from './pages/about'
import Adding from './pages/Adding'
import {Routes, Route } from 'react-router'
import './App.css'

function App(){

  return(
    <>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Adding" element={<Adding/>}/>
     </Routes>

    </>
  )
}

export default App
