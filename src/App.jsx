
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Resister from './components/Resister/Resister'
import app from './firebase.config'
import { ToastContainer } from 'react-toastify'
import Login from './components/Login/Login'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'


function App() {

    const myRoute = createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path='/register' element={<Resister/>} />
          <Route path='/login' element={<Login/>} />
            <Route path='/' element={<LayoutOne/>}>
              <Route index element={<Home/>} />
            
            
            </Route>


        </Route>
      )
    )




  return (
    <>
      <RouterProvider router={myRoute} />
      <ToastContainer/>

    </>
  )
}

export default App
