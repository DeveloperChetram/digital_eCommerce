import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoginUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import { useEffect } from "react";
const Login = () => {
  const user = useSelector((state) => state.users)
 const navigate = useNavigate()
 const dispatch = useDispatch();
 const isLogin= !!user?.data?.id
    useEffect(() => {
    if (isLogin) {
      navigate("/products");
      toast.success("User loged in")
    }
  },[isLogin])
  const SubmitHandler = (data) => {
   


    
     reset();
    dispatch(asyncLoginUser(data));
  
    
   
  };
  const { register, reset, handleSubmit } = useForm();
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-5">
      <img
        className="w-[150px]"
        src="../../public/assets/fox-border.png"
        alt=""
      />
      <h1 className="text-xl font-medium text-center">Login to your account</h1>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="flex flex-col justify-center items-center gap-5"
      >
        <input
          {...register("email",{ required: "email required" })}
          className="h-[40px] w-[450px] border-1 p-2 rounded-lg outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          {...register("password",{ required: "password is required" })}
          className="h-[40px] w-[450px]  border-1 p-2 rounded-lg outline-none "
          type="password"
          placeholder="Password"
        />
        <button 
          type="submit"
          className="h-[40px] text-white w-[450px]  bg-[#BF40BF]  py-1 px-5 rounded-lg "
       
        >         
          Proceed to login
        </button>
        <Link to="/register">
          Dont have an account?
          <span className="text-blue-400 hover:text-blue-600"> Register</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
