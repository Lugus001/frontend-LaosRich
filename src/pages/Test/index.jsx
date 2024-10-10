import React from 'react'
import CardSample from '../../components/card/CardSample'

const index = () => {
  return (
    <div className="p-2 w-full min-h-screen bg-slate-100">
      <h1 className='text-2xl font-bold text-center'>Test Page</h1>
      <p className='text-center'>สำหรับทดสอบ UI component ต่าง ๆ</p>
      <div className="border border-black p-2">
        <p>Card Components</p>
        <div className='flex flex-col gap-2'>
            <CardSample />
          
        </div>
      </div>
    </div>
  )
}

export default index