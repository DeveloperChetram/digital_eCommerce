import {nanoid} from 'nanoid'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
const Login = () => {
  const SubmitHandler = (data) => {
    data.id= nanoid()
    console.log(data);
    reset()
  }
  const {register, reset, handleSubmit} = useForm();
  return (
    <form 
    onSubmit={handleSubmit( SubmitHandler )


    }
    className='flex flex-col justify-center items-center gap-10'>
     
      <input 
     {...register('email') }
                 className='border-white border-1 p-2 rounded-lg outline-none '  type="email" placeholder='Email' />
      <input 
     {...register('Password') }
                 className='border-white border-1 p-2 rounded-lg outline-none '  type="password" placeholder='Password' />
    <button type="submit" className=' border-2 border-green-700 py-1 px-5 rounded-4xl'> enter </button> 
    <Link to='/register'>Dont have an account? <span className='text-blue-400 hover:text-blue-600'> Register</span></Link>
    </form>
  )
}

export default Login
