import React from "react";

function index({yellowimg,needleimg,lunch,rstory,glassesimg,winter,rstory1,pink,pinkrstory}) {
  return (
    <>
      <div className="flex justify-between items-center gap-x-8 mt-20 lg:flex-row flex-col gap-y-8">
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
        <div aria-label="main" className="relative">
          <img
            className="relative"
            src={yellowimg}
            alt={yellowimg}
          />
          <div className="absolute left-6 bottom-6 bg-gradient-to-r from-white to-white backdrop-magzine p-8 flex justify-between items-center max-w-[576px] w-full">
              <p className="text-2xl font-semibold open text-gray-800">
                {pink}
              </p>
              <p className="text-xl font-semibold open text-gray-800">
                {pinkrstory}
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default index;
