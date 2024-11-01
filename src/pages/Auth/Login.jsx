import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loaluy from '../../assets/logo/loaluay.png';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://183.88.209.149:28899/laosruey/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed!');
      }

      const data = await response.json();
      const token = data.token;

      // Store token in local storage and cookies
      localStorage.setItem('authToken', token);
      Cookies.set('authToken', token, {
        expires: 1,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      });

      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert(error.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      <div className="bg-gray-700 w-full">
        <h1 className="text-white text-sm flex items-center justify-end p-5 ">
          <span>Thai (TH)</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </h1>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700">
        <div className="flex flex-col items-center ">
          <img src={loaluy} alt="Icon" className="w-[20%]" />
        </div>
        <div className="bg-gray-700 p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white font-kanit">ลงชื่อเข้าใช้ Admin</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-white font-kanit">
                 ชื่อผู้ใช้
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white font-kanit">รหัสผ่าน</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-blue-600" />
                <label htmlFor="remember" className="block text-sm font-medium text-white font-kanit pl-2">จดจำฉันไว้</label>
              </div>
              <a href="#" className="text-green-500 hover:text-blue-800 text-sm font-kanit">ลืมรหัสผ่าน?</a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded-md font-semibold ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-blue-700'} font-kanit`}
            >
              {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </button>

            <div className="flex items-center justify-center my-8">
              <h1 className="text-white text-sm pr-1">ยังไม่มีบัญชี?</h1>
              <a href="/auth/register" className="text-green-400 text-sm">สมัครสมาชิก</a>
            </div>
          </form>
        </div>
      </div>
      <div className="image-section hidden md:flex justify-center items-center bg-gray-600 min-h-full ">
        <img src='loaluay.png' alt='Icon' className="w-[50%]"/>  
      </div>
    </div>
  );
};

export default Login;
