import React from "react";
import Link from 'next/link'
function index({yellowimg,july,fashion,secret,story,alina,needleimg,lunch,rstory,glassesimg,winter,rstory1,pink,pinkrstory}) {
  return (
    <>
      <div className="flex justify-between items-center gap-x-8 mt-20 lg:flex-row flex-col gap-y-8">
        <div aria-label="main" className="relative">
         <Link href='./magzineinner'>
          <img
            className="relative"
            src={yellowimg}
            alt={yellowimg}
          />
         </Link>
          <div className="absolute left-6 bottom-6 bg-gradient-to-r from-white to-white backdrop-magzine p-8">
            <p className="text-sm text-gray-600 open">{july}</p>
            <p className="text-2xl font-semibold text-gray-800 open mb-4">
              {fashion}
            </p>
            <p className="text-base text-gray-600 open mb-5 max-w-[512px] w-full">
            {secret}
            </p>
            <p className="text-base text-gray-800 open">
              {story} <span className="font-semibold">{alina}</span>
            </p>
          </div>
          {/* <div className="absolute left-6 bottom-6 bg-gradient-to-r from-white to-white backdrop-magzine p-8 flex justify-between items-center max-w-[576px] w-full">
              <p className="text-2xl font-semibold open text-gray-800">
                {pink}
              </p>
              <p className="text-xl font-semibold open text-gray-800">
                {pinkrstory}
              </p>
            </div> */}
        </div>
        <div className="flex flex-col gap-y-8 justify-between items-center">
          <div aria-label="main" className="relative">
            <img
              className="relative"
              src={needleimg}
              alt={needleimg}
            />
            <div className="absolute left-6 bottom-6 bg-gradient-to-r from-white to-white backdrop-magzine p-8 flex justify-between items-center max-w-[576px] w-full">
              <p className="text-2xl font-semibold open text-gray-800">
                {lunch}
              </p>
              <p className="text-xl font-semibold open text-gray-800">
                {rstory}
              </p>
            </div>
          </div>
          <div aria-label="main" className="relative">
            <img
              className="relative"
              src={glassesimg}
              alt={glassesimg}
            />
            <div className="absolute left-6 bottom-6 bg-gradient-to-r from-white to-white backdrop-magzine p-8 flex justify-between items-center max-w-[576px] w-full">
              <p className="text-2xl font-semibold open text-gray-800">
                {winter}
              </p>
              <p className="text-xl font-semibold open text-gray-800">
                {rstory1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
