import React from "react";

function index() {
  let instapic = [
    {
      pic: "https://tuk-cdn.s3.amazonaws.com/can-uploader/jennifer-marquez-121212121.png",
    },
    {
      pic: "https://tuk-cdn.s3.amazonaws.com/can-uploader/khaled-ghareeb-12121343546.png",
    },
    {
      pic: "https://tuk-cdn.s3.amazonaws.com/can-uploader/jennifer-marquez-09876.png",
    },
    {
      pic: "https://tuk-cdn.s3.amazonaws.com/can-uploader/laura-chouette-12789.png",
    },
  ];
  return (
    <>
      <div className="mt-[150px] mx-auto w-full">
        <p className="md:text-5xl text-4xl font-bold leading-[48px] text-gray-800 raleway text-center mb-6">
          Join Our Insta Squad
        </p>
        <p className="text-xl text-center text-gray-600 open mb-12">
          Follow us on instagram{" "}
          <span className="font-bold open"> @Macem.genx </span> and become part
          of our family
        </p>
        <div className="flex justify-center items-center gap-x-8 w-full lg:flex-row flex-col space-y-8">
          {instapic.map((item, index) => {
            return (
              <div
                key={index}
                className="relative group transform duration-100"
              >
                <img src={item.pic} alt={item.pic} className="" />
                <div className="absolute right-0 left-0 top-0 bottom-0 group-hover:backdrop-blur-md transform duration-100 ease-in-out group-hover:block hidden p-5">
                  <div className="h-full flex flex-col justify-end">
                    <div className="flex items-end gap-4">
                      <div className="flex items-center gap-1">
                        <svg
                          width={16}
                          height={14}
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.8931 2.07333C13.5526 1.73267 13.1483 1.46243 12.7033 1.27805C12.2584 1.09368 11.7814 0.998779 11.2998 0.998779C10.8181 0.998779 10.3412 1.09368 9.89618 1.27805C9.45121 1.46243 9.04692 1.73267 8.70642 2.07333L7.99975 2.78L7.29309 2.07333C6.60529 1.38554 5.67244 0.999136 4.69975 0.999136C3.72706 0.999136 2.79422 1.38554 2.10642 2.07333C1.41863 2.76112 1.03223 3.69397 1.03223 4.66666C1.03223 5.63935 1.41863 6.5722 2.10642 7.26L2.81309 7.96666L7.99975 13.1533L13.1864 7.96666L13.8931 7.26C14.2337 6.91949 14.504 6.51521 14.6884 6.07023C14.8727 5.62526 14.9676 5.14832 14.9676 4.66666C14.9676 4.185 14.8727 3.70807 14.6884 3.26309C14.504 2.81812 14.2337 2.41383 13.8931 2.07333V2.07333Z"
                            stroke="#4B5563"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-sm text-gray-600">367</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
                            stroke="#4B5563"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="text-sm text-gray-600">90</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2 text-gray-800">
                      Medusa Collection Hot Sellin ..
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default index;
