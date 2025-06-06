import { NavLink } from "react-router-dom"

const Nav = () => {
 
  return (
    <nav className="w-full h-16 flex justify-center gap-5 ">
      <NavLink className={(e)=> e.isActive ? "text-red-400" : ""}  to= "/" > Home</NavLink>
       
      <NavLink className={(e)=> e.isActive ?  "text-red-400" : ""}   to= "/login" > Login</NavLink>
      <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to= "/about" > About</NavLink>
      <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to= "/products" > Products</NavLink>
    </nav>
  )
}

export default Nav
