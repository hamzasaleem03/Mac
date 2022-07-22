import React from "react";

function index() {
  return (
    <>
      <div className="container mt-[150px] flex justify-between items-center mx-auto lg:flex-row flex-col space-y-4">
        <div>
          <p className="text-5xl font-bold leading-[54px] text-gray-800 raleway">
            Brace Yourself for the <br /> Extraordinary!
          </p>
          <p className="text-xl leading-7 text-gray-600 mt-6 mb-[56px] lg:max-w-[621px] w-full open">
            We offers style choices that make your outfit of the day look fire.
            Hop onto lastest fashion trends with Macem
          </p>
          <button className="text-base font-medium leading-none text-white raleway bg-gray-800 py-5 px-10 hover:bg-gray-700 transform duration-300 ease-in-out raleway">
            EXPLORE MORE
          </button>
        </div>
        <div>
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mixcolor11.png"
            alt="pic"
          />
        </div>
      </div>
    </>
  );
}

export default index;
