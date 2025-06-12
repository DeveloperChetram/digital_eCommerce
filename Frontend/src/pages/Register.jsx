import {nanoid} from 'nanoid'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {asyncRegisterUser } from '../store/actions/userActions'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Register = () => {
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false
  })

  // Reset errors after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors({
        username: false,
        email: false,
        password: false
      })
    }, 3000)

    return () => clearTimeout(timer)
  }, [errors])

  const SubmitHandler = (data) => {
    data.id= nanoid()
    data.isAdmin = data.isAdmin || false;
    // console.log(data);
    reset()
    dispatch(asyncRegisterUser(data))
    Navigate('/login')
  }

  const {register, reset, handleSubmit} = useForm();

  const validateAndSubmit = (data) => {
    let hasErrors = false
    const newErrors = {
      username: false,
      email: false,
      password: false
    }

    if (!data.username || data.username.trim() === '') {
      newErrors.username = true
      hasErrors = true
    }

    if (!data.email || data.email.trim() === '') {
      newErrors.email = true
      hasErrors = true
    }

    if (!data.password || data.password.trim() === '') {
      newErrors.password = true
      hasErrors = true
    }

    setErrors(newErrors)

    if (!hasErrors) {
      SubmitHandler(data)
    }
  }

  const getInputClass = (field) => {
    return `h-[40px] w-full p-2 rounded-lg outline-none transition-all duration-300 ${errors[field] ? 'border-2 border-[#FF9999] placeholder-[#FF9999] animate-shake' : 'border-1'}`
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center gap-5 p-4">
      <img
        className="w-[150px]"
        src="/assets/fox-border.png"
        alt=""
      />
      <h1 className="text-xl font-medium text-center">Create Your Profile</h1>
      <form 
        onSubmit={handleSubmit(validateAndSubmit)}
        className='flex flex-col justify-center items-center gap-5 w-full'>
        <div className="w-full relative">
          <input 
            {...register('username')}
            className={getInputClass('username')} 
            type="text" 
            placeholder={errors.username ? 'Username required' : 'Username'} 
          />
        </div>
        <div className="w-full relative">
          <input 
            {...register('email')}
            className={getInputClass('email')} 
            type="email" 
            placeholder={errors.email ? 'Email required' : 'Email'} 
          />
        </div>
        <div className="w-full relative">
          <input 
            {...register('password')}
            className={getInputClass('password')} 
            type="password" 
            placeholder={errors.password ? 'Password required' : 'Password'} 
          />
        </div>
        
        <div className="flex items-center w-full gap-2 mt-2">
          <input 
            type="checkbox" 
            id="admin" 
            {...register('isAdmin')} 
            className="w-4 h-4 accent-[#BF40BF]" 
          />
          <label htmlFor="admin" className="text-gray-700">Join as a Seller (admin)</label>
        </div>
        
        <button type="submit" className="h-[40px] text-white w-full bg-[#BF40BF] py-1 px-5 rounded-lg mt-4 hover:bg-[#A030A0] transition-colors duration-300"> Create account </button> 
        <Link to='/login'>Already have an account? <span className='text-blue-400 hover:text-blue-600 transition-colors duration-300'> Login</span></Link>
      </form>
    </div>
  )
}

export default Register
