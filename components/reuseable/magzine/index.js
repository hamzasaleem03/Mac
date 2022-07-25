import React from 'react'

function index({story,our,ptag,ptag1}) {
  return (
    <>
      <div className="flex justify-between items-center lg:flex-row flex-col gap-y-8">
          <div className="max-w-[515px] w-full">
            <p className="text-xl text-gray-600 open">{story}</p>
            <p className="text-7xl font-extrabold text-gray-800 mt-4 raleway">
              {our}
            </p>
          </div>
          <div className="max-w-[733px] w-full">
            <p className="text-2xl tracking-wide text-gray-600 open">
              {ptag}
            </p>
            <p className="text-2xl tracking-wide text-gray-600 mt-8 open">
              {ptag1}
            </p>
          </div>
        </div>
    </>
  )
}

export default index