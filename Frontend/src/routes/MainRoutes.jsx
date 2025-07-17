import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'


const Home = lazy(()=>import("../pages/Home"))
const About = lazy(()=>import("../pages/AboutUs"))
const Login = lazy(()=>import("../pages/Login"))
const AuthRoute = lazy(()=>import("./AuthRoute"))
const UserProfile = lazy(()=>import("./../pages/user/UserProfile"))
const SingleProduct = lazy(()=>import("./../components/SingleProduct"))
const UpdateProduct = lazy(()=>import("./../pages/admin/UpdateProduct"))
const CreateProduct = lazy(()=>import("./../pages/admin/CreateProduct"))
const Regiter = lazy(()=>import("../pages/Register"))
const Products = lazy(()=>import("../pages/Products"))
const Cart = lazy(()=>import("../pages/user/Cart"))
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
