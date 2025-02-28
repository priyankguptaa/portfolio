import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home, About, Github, Layout, User, Project, Contact  } from './components/index.js';
import Counter from './pages/Counter.jsx';
import Random_password from './pages/Random_password.jsx';
import Crud from './pages/Crud.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = "/" element={<Home/>}/>
      <Route path = "about" element={<About/>}/>
      <Route path = "project" element={<Project/>}/>
      <Route path ="github" element={<Github/>}/>
      <Route path ="contact" element={<Contact/>}/>
      <Route path ="project_1" element={<Counter/>}/>
      <Route path ="project_2" element={<Random_password/>}/>
      <Route path ="project_4" element={<Crud/>}/>
      <Route path = "user/:userid" element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
