import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-[90%]  h-16 flex justify-between  items-center border-1 border-gray-400 mt-5 rounded-2xl px-5 ">
      <NavLink
        className={(e) => ` border-2 rounded-2xl border-[#BF40BF]  px-7 py-2 ${e.isActive ? "opacity-0" : "text-gray-500"}`}
        to="/login"
      >
        Login
      </NavLink>
      <div className="flex gap-5 items-center">
        <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/"
        >
        
          Home
        </NavLink>

        <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/about"
        >
 
          About
        </NavLink>
        <NavLink
          className={(e) => ` ${e.isActive ? "text-black" : "text-gray-500"}`}
          to="/products"
        >
     
          Products
        </NavLink>
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
