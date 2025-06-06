import MainRoutes from './routes/MainRoutes';
import {  useEffect } from 'react';
import { asyncGetUsers } from './store/UserAction'
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav';
const App = () => {
//  const dispatch = useDispatch()
//  const data = useSelector((state) => state);
//  console.log("data", data);

// useEffect(()=>{
//     dispatch(asyncGetUsers())
// },[])
  return (
    
    <div className='bg-gray-950 w-screen  text-white p-10'  >
<Nav/>
      <MainRoutes/> 

    </div>
  )
}

export default App
