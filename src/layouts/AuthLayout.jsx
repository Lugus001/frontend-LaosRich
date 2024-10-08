import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <Outlet title="Auth" />
    </>
  )
}

export default AuthLayout