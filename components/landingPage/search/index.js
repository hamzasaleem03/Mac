import React from 'react'

function index() {
  return (
<>
<div className='relative'>
  {/* <img className='absolute right-0 -top-10 h-[400px] opacity-10' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Texturesadsad.png' alt='texture'/> */}
  <img className='absolute right-0 -top-10 h-[400px] ' src='https://tuk-cdn.s3.amazonaws.com/can-uploader/gradsearch2323.png' alt='bg'/>
<div className="container mt-[140px] mx-auto w-full">
<p className="md:text-5xl text-4xl font-bold leading-[48px] text-gray-800 mb-6 text-center raleway">Ready to Rock Together ?</p>
<p className="text-xl leading-7 text-center text-gray-600 lg:max-w-[842px] w-full mx-auto open">We offers style choices that make your outfit of the day look fire. Hop onto lastest fashion trends with Macem</p>
<div className='flex justify-center items-center gap-4 mt-14 md:flex-row flex-col'>
  <input type='search' className='text-base leading-none text-gray-600 p-6 w-96 h-16 bg-gray-100 outline-none open' placeholder='ENTER YOUR EMAIL HERE'/>
  <button className='text-base leading-none text-white  bg-gray-800 py-6 px-8 hover:bg-gray-700 transform duration-300 ease-in-out md:max-w-[153px] w-full open'>
  SUBSCRIBE
  </button>
</div>
</div>
</div>
</>
  )
}

export default index