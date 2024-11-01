import React, { useState } from 'react';
import Swal from 'sweetalert2';
import laosFlag from '../../assets/logo/laos-flag-icon.png';
import loaluy from '../../assets/logo/loaluay.png';
import thFlag from '../../assets/logo/th-flag.png';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [phonePrefix, setPhonePrefix] = useState('+66'); 
  const [region, setRegion] = useState('TH');
  const [passwordAlertVisible, setPasswordAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const currentFlag = phonePrefix === '+66' ? thFlag : laosFlag;

  const validatePassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setPasswordAlertVisible(inputPassword.length < 8);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const registrationData = {
      username,
      email,
      first_name: firstName,
      last_name: lastName,
      password,
      phone_prefix: phonePrefix,
      phone: `${phonePrefix} ${phone}`, 
      region,
    };
  
    console.log('Registration Data:', registrationData);
  
    try {
      const response = await fetch("http://183.88.209.149:28899/laosruey/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });
  
      const result = await response.json();
      console.log('API Response:', result);
  
      if (response.ok) {
        localStorage.setItem('token', result.token);
        Swal.fire('Register Successful', 'Welcome!', 'success');
        window.location.href = '/auth/login';
      } else {
        // Handle validation errors
        if (result.required && typeof result.required === 'string') {
          const requiredFields = result.required.split(' ');
          Swal.fire('Register Failed', `Missing fields: ${requiredFields.join(', ')}`, 'error');
        } else {
          Swal.fire('Register Failed', result.message || 'An error occurred', 'error');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error', 'There was a problem with your request.', 'error');
    } finally {
      setLoading(false);
    }
};


  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const selectOption = (prefix) => {
    setPhonePrefix(prefix);
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-700">
      <div className="flex flex-col items-center p-5">
        <img src={loaluy} alt="Loaluay Logo" className="w-[20%]" />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-white font-kanit">สมัครสมาชิก Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="block text-md font-medium text-white font-kanit">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-kanit"
              placeholder="กรุณาใส่ User Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="block text-md font-medium text-white font-kanit">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="font-kanit mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณาใส่ Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="block text-md font-medium text-white font-kanit">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={validatePassword}
              required
              className="font-kanit mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณาใส่ Password"
            />
            {passwordAlertVisible && (
              <p className="text-red-500 text-sm mt-1 font-kanit">รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร</p>
            )}
          </div>
          
          <div className="flex flex-col">
  <label htmlFor="phone" className="block text-md font-medium text-white font-kanit mb-2">
    เบอร์โทรศัพท์ผู้สมัคร
  </label>
  <div className="relative mt-1">
    <div className="flex border border-gray-300 rounded-md shadow-sm bg-white">
      <div
        className="flex items-center p-2 cursor-pointer bg-gray-100 rounded-l-md hover:bg-gray-200 transition"
        onClick={toggleDropdown}
      >
        <div className="w-4 h-4 mr-1">
          <img src={currentFlag} alt="Flag" className="w-4 h-4" />
        </div>
        <span className="font-medium text-gray-700">{phonePrefix}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="border border-gray-300 rounded-r-md p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="กรุณาใส่เบอร์โทรศัพท์"
      />
    </div>
    {showDropdown && (
      <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
        <div
          className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition"
          onClick={() => selectOption('+66', thFlag)}
        >
          <img src={thFlag} className="w-4 h-4 mr-2" alt="Thai Flag" />
          <span className="font-medium text-gray-700">+66 ไทย</span>
        </div>
        <div
          className="flex items-center p-2 cursor-pointer hover:bg-gray-100 transition"
          onClick={() => selectOption('+856', laosFlag)}
        >
          <img src={laosFlag} className="w-4 h-4 mr-2" alt="Laos Flag" />
          <span className="font-medium text-gray-700">+856 ลาว</span>
        </div>
      </div>
    )}
  </div>
</div>


          <div className="flex flex-col">
            <label htmlFor="first_name" className="block text-md font-medium text-white font-kanit">ชื่อ</label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="font-kanit mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณาใส่ชื่อ"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="last_name" className="block text-md font-medium text-white font-kanit">นามสกุล</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="font-kanit mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณาใส่นามสกุล"
            />
          </div>

      
          <div className="flex flex-col">
            <label htmlFor="region" className="block text-md font-medium text-white font-kanit">สัญชาติ</label>
            <input
              type="text"
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
              className="font-kanit mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณาใส่ Region"
            />
          </div>



         
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FFFB00] text-black font-bold py-2 rounded-md hover:bg-[#FFFB00]/80 transition"
        >
          {loading ? 'กำลังสมัครสมาชิก...' : 'สมัครสมาชิก'}
        </button>
        
        <div className="mt-4 text-center bg-green-400 w-full p-2 rounded-md">
          <a href="/auth/login" className="text-black font-bold hover:underline">เข้าสู่ระบบ</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
