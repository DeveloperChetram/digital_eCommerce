import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Products from '../pages/Products'
import Regiter from '../pages/Register'
import CreateProduct from './../pages/admin/CreateProduct';
import UpdateProduct from './../pages/admin/UpdateProduct';
import SingleProduct from './../components/SingleProduct';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/register' element={<Regiter/>} />
      <Route path='/admin/create-product' element={<CreateProduct/>} />
      <Route path='/admin/update-product/:id' element={<UpdateProduct/>} />
      <Route path='/product/:id' element={<SingleProduct/>} />
    </Routes>
  )
}

export default MainRoutes
