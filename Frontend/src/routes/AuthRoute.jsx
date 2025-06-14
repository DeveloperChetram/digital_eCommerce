
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
const AuthRoute = (props) => {
    const user = useSelector((state) => state.users.data)
  return user? props.children : <Navigate to='/login' />
  
}

export default AuthRoute
