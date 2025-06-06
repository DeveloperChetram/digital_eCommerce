import MainRoutes from './routes/MainRoutes';
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav';
import { asyncCurrentUser } from './store/actions/userActions';
const App = () => {
 const dispatch = useDispatch()
//  const data = useSelector((state) => state);
//  console.log("data", data);

useEffect(()=>{
    dispatch(asyncCurrentUser())
},[])
  return (
    
    <div className='bg-gray-950 w-screen  text-white p-10'  >
<Nav/>
      <MainRoutes/> 

    </div>
  )
}

export default App
