import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <nav className='bg-blue-500 text-white flex items-center'>
        <Link className="m-2" to="/">
          
          <img src="/src/assets/logo/logo.png" alt="logo" width={75} />
        </Link>
        <Link className="m-2" to="/">Home</Link>
        <Link className="m-2" to="/auth">Login</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout