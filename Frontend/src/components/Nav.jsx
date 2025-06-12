import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { asyncLogoutUser } from "../store/actions/userActions";

const Nav = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)
  const isAdmin = user?.data?.isAdmin || false
  console.log("User state:", user)
  const loginHandler = ()=>{
    dispatch(asyncLogoutUser(user))
  }
  return (
    <nav className="w-[90%]  h-16 flex justify-between  items-center border-1 border-gray-400 mt-5 rounded-2xl px-5 ">
      <NavLink
        onClick={loginHandler}
        className={(e) => ` border-2 rounded-2xl border-[#BF40BF]  px-7 py-2 ${e.isActive ? "" : "text-gray-500"}`}
        to="/login"
      >
        {user?.data?.id ? "Logout" : "Login"}
      </NavLink>
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
      <div className="flex gap-5 items-center">
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
