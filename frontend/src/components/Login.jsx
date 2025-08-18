import React from 'react'

const Login = () => {
  return (
    <div className='h-[calc(100vh - 100px)] flex justify-center items-center'>
      <div className='rounded-md shadow-lg py-10 px-8 max-w-sm w-full mt-10'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center '>Please Login</h2>
       <form>
        <div className='my-4'>
          <label htmlFor='email' className="block text-base-content/80 text-md font-semibold mb-2">Enter email</label>
          <input type="email" name="email" id="email" placeholder="Email Address" className="input shadow leading-tight focus:outline-none focus:shadow"  />
        </div>

        <div className='my-4'>
           <label htmlFor='password' className="block text-base-content/80 font-semibold text-md mb-2">Enter Password</label>
           <input type="password" name="password" id="password" className="input focus:outline-none focus:shadow shadow leading-tight" placeholder="Password" />
        </div>

        <actions>
            <button className='btn btn-primary'>Login </button>
        </actions>
        <p>Dont have an account? Please register </p>
        </form>
      </div>
    </div>
  )
}

export default Login
