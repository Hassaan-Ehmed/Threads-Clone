import React from 'react'

export default function LoadingScreen() {
  return (
    <div className='h-screen w-full bg-[#101010] flex justify-center items-center flex-col gap-2 text-white'>
      <span className="loading loading-spinner loading-lg"></span>
      Loading...
    </div>
  )
}
