import { useState } from "react";

function index({setshowSearch, search}) {


  return (
    <>
      <div
        onClick={() => setshowSearch(true)}
        className={`bg-black block z-50 bg-opacity-60 fixed top-0 w-full h-full backdrop-blur-lg ${
          search ? `block` : `hidden`
        }`}
      ></div>
      <div className={`py-10 bg-white max-h-[552px] fixed right-0 top-0 z-50 left-0 duration-300 ease-in-out transform ${
          search ? `translate-y-0` : `translate-y-[-800px]`
        }`}>
        <div className="flex justify-between items-center px-20">
          <div className="relative w-full">
            <svg
              className="absolute left-4 top-5"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z"
                stroke="#4B5563"
                strokeMiterlimit={10}
              />
              <path
                d="M15.8574 15.8583L21.0001 21.0009"
                stroke="#4B5563"
                strokeMiterlimit={10}
                strokeLinecap="round"
              />
            </svg>
            <input
              className="text-base text-gray-600 py-5 pl-12 bg-gray-100 max-w-[624px] w-full outline-none open"
              placeholder="SEARCH YOUR ITEMS HERE "
            />
          </div>
          <div onClick={() => setshowSearch(false)} aria-label="svg">
            <svg
              className="cursor-pointer"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2.09313L15.9069 0L9 6.90687L2.09313 0L0 2.09313L6.90687 9L0 15.9069L2.09313 18L9 11.0931L15.9069 18L18 15.9069L11.0931 9L18 2.09313Z"
                fill="#1F2937"
              />
            </svg>
          </div>
        </div>
        <hr className="border-gray-200 w-full mt-10 mb-12" />
        <div className="px-20 flex justify-between items-start w-full">
          <ul className="w-full">
            <li className="text-2xl font-bold text-gray-800 raleway">
              Most Searched Products
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open my-6">
              Vegan Leather
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open">
              Knit Wear Styles
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open my-6">
              Sustainable Styles
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open">
              Macem X Polo Collection
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open my-6">
              Macem X Ralph Lauren Collection
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open">
              Macem Winter Collection 2022
            </li>
          </ul>
          <ul className="w-full">
            <li className="text-2xl font-bold text-gray-800 raleway">
              Newest Products
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open my-6">
              Vegan Leather
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open">
              Knit Wear Styles
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open my-6">
              Sustainable Styles
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open">
              Mascot Tainted Sunnies
            </li>
          </ul>
          <ul className="w-full">
            <li className="text-2xl font-bold text-gray-800 raleway">
              Our Suggestions
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open my-6">
              Mascot Tainted Sunnies
            </li>
            <li className="text-xl hover:font-bold text-gray-600 open">
              Macem X Ralph Lauren Collection
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default index;
