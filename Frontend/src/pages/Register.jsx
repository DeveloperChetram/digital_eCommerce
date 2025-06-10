import {nanoid} from 'nanoid'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {asyncRegisterUser } from '../store/actions/userActions'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const SubmitHandler = (data) => {
    data.id= nanoid()
    data.isAdmin= false;
    // console.log(data);
    reset()
    dispatch(asyncRegisterUser(data))
    Navigate('/login')

  }
  const {register, reset, handleSubmit} = useForm();
  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center gap-5 p-4">
            <img
        className="w-[150px]"
        src="/assets/fox-border.png"
        alt=""
      />
      <h1 className="text-xl font-medium text-center">Create Your Profile</h1>
    <form 
    onSubmit={handleSubmit(SubmitHandler)}
    className='flex flex-col justify-center items-center gap-5 w-full'>
      <input 
     {...register('username')}
                 className="h-[40px] w-full border-1 p-2 rounded-lg outline-none" type="text" placeholder='Username' />
      <input 
     {...register('email')}
                 className="h-[40px] w-full border-1 p-2 rounded-lg outline-none" type="email" placeholder='Email' />
      <input 
     {...register('password')}
                  className="h-[40px] w-full border-1 p-2 rounded-lg outline-none"  type="password" placeholder='Password' />
    <button type="submit" className="h-[40px] text-white w-full bg-[#BF40BF] py-1 px-5 rounded-lg"> Create account </button> 
    <Link to='/login'>Already have an account? <span className='text-blue-400 hover:text-blue-600'> Login</span></Link>
    </form>
    </div>
  )
}

export default Register
