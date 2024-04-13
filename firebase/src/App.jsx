
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Registration from './components/Registration'
import User from './components/User'
import Login from './components/Login'

function App() {


  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
      </BrowserRouter>
      )
}

export default App
