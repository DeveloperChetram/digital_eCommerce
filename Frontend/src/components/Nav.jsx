import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/userActions";
import { toast } from 'react-toastify';



const Nav = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users)
  const isLogin = !!user?.data?.id
  const dispatch = useDispatch()
  const isAdmin = user?.data?.isAdmin || false
  // console.log("User state:", user)
  const loginHandler = ()=>{

    if(isLogin){

      dispatch(asyncLogoutUser(user))
      toast.error("User Loged out successfully")
    }
    else{
    }
  }
  return (
    <nav className="w-[90%]  h-16 flex justify-between  items-center border-1 border-gray-400 mt-5 rounded-2xl px-5 ">
      <div className="flex items-center gap-5">
         {isLogin?<img onClick={()=>navigate('/user-profile/'+user.data.id)}  className="cursor-pointer w-[50px]" src="./assets/user-icon.svg" alt="" />:<></>}
      <NavLink
       onClick={loginHandler}
        className={(e) => ` border-2 rounded-2xl border-[#BF40BF]  px-7 py-2 ${e.isActive ? "" : "text-gray-500"}`}
        to="/login"
      >
       
        { isLogin ? "Logout" : "Login"}
      </NavLink>
      </div>
      
      <div className="flex gap-5 items-center">
        <NavLink
        className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
        to="/products"
      >
        Products
      </NavLink>
      {isAdmin && (
        <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/admin/create-product"
        >
          Create Product
        </NavLink>
      )}
        <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/about"
        >
          About
        </NavLink>


        {/* <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/admin/update-product/:id"
        >
     
          Update Product
        </NavLink>
        <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/admin/delete-product/:id"
        >
     
          Delete Product
        </NavLink> */}
        <img
          className="w-[50px] object-cover"
          src="../../public/assets/fox-border.png"
          alt="logo_image"
        />
      </div>
    </nav>
  );
};

export default Nav;
