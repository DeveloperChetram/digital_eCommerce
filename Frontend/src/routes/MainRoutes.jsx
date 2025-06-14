import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Products from '../pages/Products'
import Regiter from '../pages/Register'
import CreateProduct from './../pages/admin/CreateProduct';
import UpdateProduct from './../pages/admin/UpdateProduct';
import SingleProduct from './../components/SingleProduct';
import UserProfile from './../pages/user/UserProfile';
import AuthRoute from './AuthRoute'
import Cart from '../pages/user/Cart'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/register' element={<Regiter/>} />
      <Route path='/admin/create-product' element={<AuthRoute><CreateProduct/></AuthRoute>} />
      <Route path='/admin/update-product/:id' element={<AuthRoute> <UpdateProduct/></AuthRoute>} />
      <Route path='/product/:id' element={<SingleProduct/>} />
      <Route path='/product-cart/' element={<Cart/>} />
      <Route path='/user-profile/:id' element={<AuthRoute> <UserProfile/></AuthRoute>}/>
      <Route path='*' element={<>page not found</>}/>
    </Routes>
  )
}

export default MainRoutes
