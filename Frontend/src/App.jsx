import MainRoutes from './routes/MainRoutes';
import {  useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav';
import { asyncCurrentUser } from './store/actions/userActions';
import { FaShoppingCart } from "react-icons/fa";
import { asyncLoadProducts } from './store/actions/productActions';
import { useNavigate } from 'react-router-dom';
const App = () => {
 const dispatch = useDispatch()
 const user = useSelector((state) => state.users.data);
 const navigate = useNavigate()
 useEffect(()=>{
   dispatch(asyncCurrentUser())
   dispatch(asyncLoadProducts())
  },[]);
  // console.log(user)
  // console.log("user at app", user);
  return (
    <div className='bg-[#F5F5DC] w-full min-h-screen flex items-center flex-col relative'>
      <Nav/>
      <MainRoutes /> 
     {user?.cart[0]?.productId? <> <div onClick={()=>navigate('/product-cart/')} className="cart rounded-[50%] cursor-pointer  p-4 bg-[#BF40BF] text-white fixed bottom-20 right-20 flex justify-center items-center">
        <FaShoppingCart className='text-4xl' />
      </div></>:<></>}
    </div>
  )
}

export default App
