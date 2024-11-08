import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'


const Login = () => {
  const  {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();
  const  onSubmit=(data)=>console.log(data);

  return (
    <div>
        <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-800 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="text-2xl flex justify-center">Login</h3>
    <div className="py-1">
   <span> UserName:</span>
   <label className="input input-bordered flex items-center gap-2"  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 dark:bg-slate-800 dark:text-white">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" {...register("userName", { required: true })} />
 
  {errors.userName && <span className='text-2xl text-red-500'>*</span>}

</label>
<br />
<span> Password:</span>

   <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 dark:bg-slate-800 dark:text-white">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  
  <input type="password" className="grow" placeholder='Password' {...register("Password", { required: true })} />
  
  {errors.userName && <span className='text-2xl text-red-500'>*</span>}
</label>
<br />
<button className="text-lg btn btn-block btn-warning">Login</button>

<div className='flex justify-around'>
<div>
  Not registered?{" "}
 <Link to={'/signup'} className='underline text-blue-500 cursor-pointer'>SignUp</Link>
</div>
</div>

    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login