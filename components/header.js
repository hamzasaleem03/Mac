import React, { useState } from "react";
import Link from "next/link";
function header(props) {
  const [nav, setshowNav] = useState(false);
  const [pro, setshowPro] = useState(false);
  const [pro1, setshowPro1] = useState(false);
  const list = [
    {
      name: "Home",
      link: "/",
      state: false,
    },
    {
      name: "Products",
      link: "/",
      state: true,
    },
    {
      name: "Our Story",
      link: "./ourstory",
      state: false,
    },
    {
      name: "Magazine",
      link: "./magzinemain",
      state: false,
    },
  ];
  let cart = [
    {
      bag: "https://tuk-cdn.s3.amazonaws.com/can-uploader/pexelssd2323.png",
      rx: "RX980",
      mini: "Mini Tote Bag",
      dollar: "$ 80",
      size: "Size : Small",
      color: "Colour : Orange",
      quantity: "Quantity : 1 Item",
      leather: "Composition : 100% calf leather",
    },
    {
      bag: "https://tuk-cdn.s3.amazonaws.com/can-uploader/2121212.png",
      rx: "RF293",
      mini: "Parmigiani Flared Pants",
      dollar: "$1,200",
      size: "Size : Large",
      color: "Colour : Black",
      quantity: "Quantity : 1 Item",
      leather: "Composition : 100% calf leather",
    },
    {
      bag: "https://tuk-cdn.s3.amazonaws.com/can-uploader/1212433bgfvb5t4.png",
      rx: "RX980",
      mini: "Mini Tote Bag",
      dollar: "$ 80",
      size: "Size : Small",
      color: "Colour : Orange",
      quantity: "Quantity : 1 Item",
      leather: "Composition : 100% calf leather",
    },
    {
      bag: "https://tuk-cdn.s3.amazonaws.com/can-uploader/2223ewqwe32.png",
      rx: "RF293",
      mini: "Parmigiani Flared Pants",
      dollar: "$1,200",
      size: "Size : Large",
      color: "Colour : Black",
      quantity: "Quantity : 1 Item",
      leather: "Composition : 100% calf leather",
    },
    {
      bag: "https://tuk-cdn.s3.amazonaws.com/can-uploader/black56tgfv.png",
      rx: "RF293",
      mini: "Parmigiani Flared Pants",
      dollar: "$1,200",
      size: "Size : Large",
      color: "Colour : Black",
      quantity: "Quantity : 1 Item",
      leather: "Composition : 100% calf leather",
    },
  ];
  return (
    <>
      {/* Desktop view */}

      <div className="block relative">
        <div className="absolute left-0 top-0 -z-10">
          {/* <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/uptop24324.png" alt="up"/> */}
          <svg
            width={228}
            height={276}
            viewBox="0 0 228 276"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_90_541)">
              <circle
                cx="20.5512"
                cy="76.4488"
                r="99.5512"
                fill="url(#paint0_linear_90_541)"
                fillOpacity="0.56"
              />
            </g>
            <g filter="url(#filter1_f_90_541)">
              <circle
                cx="54.7867"
                cy="37.8423"
                r="72.8423"
                fill="url(#paint1_linear_90_541)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_90_541"
                x={-179}
                y="-123.102"
                width="399.103"
                height="399.102"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={50}
                  result="effect1_foregroundBlur_90_541"
                />
              </filter>
              <filter
                id="filter1_f_90_541"
                x="-118.056"
                y={-135}
                width="345.685"
                height="345.685"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={50}
                  result="effect1_foregroundBlur_90_541"
                />
              </filter>
              <linearGradient
                id="paint0_linear_90_541"
                x1="20.5512"
                y1="-23.1024"
                x2="20.5512"
                y2={176}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF7BCA" stopOpacity="0.22" />
                <stop offset={1} stopColor="#FFC56F" stopOpacity="0.46" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_90_541"
                x1="54.7867"
                y1={-35}
                x2="54.7867"
                y2="110.685"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F22FB0" stopOpacity="0.3" />
                <stop offset={1} stopColor="#F58A25" stopOpacity={0} />
                <stop offset={1} stopColor="#7061A3" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <nav className="flex justify-between items-center container relative z-20 px-4 pt-8 mx-auto 2xl:px-4 xl:px-10">
          <a href="/">
            <svg
              width={98}
              height={23}
              viewBox="0 0 98 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.16 0.76V1.36C24.52 1.38 24.03 1.46 23.69 1.6C23.35 1.72 23.12 1.96 23 2.32C22.9 2.66 22.85 3.2 22.85 3.94V18.82C22.85 19.54 22.91 20.08 23.03 20.44C23.15 20.8 23.37 21.04 23.69 21.16C24.03 21.28 24.52 21.36 25.16 21.4V22C24.64 21.96 23.98 21.94 23.18 21.94C22.38 21.92 21.57 21.91 20.75 21.91C19.85 21.91 19 21.92 18.2 21.94C17.42 21.94 16.79 21.96 16.31 22V21.4C16.99 21.36 17.5 21.28 17.84 21.16C18.2 21.04 18.44 20.8 18.56 20.44C18.68 20.08 18.74 19.54 18.74 18.82V2.5L18.95 2.53L11.51 22.09H11.03L3.11 2.68V17.56C3.11 18.52 3.17 19.27 3.29 19.81C3.41 20.33 3.67 20.71 4.07 20.95C4.49 21.17 5.12 21.32 5.96 21.4V22C5.58 21.96 5.09 21.94 4.49 21.94C3.89 21.92 3.32 21.91 2.78 21.91C2.3 21.91 1.81 21.92 1.31 21.94C0.83 21.94 0.43 21.96 0.11 22V21.4C0.77 21.32 1.26 21.17 1.58 20.95C1.92 20.73 2.14 20.37 2.24 19.87C2.36 19.37 2.42 18.68 2.42 17.8V3.94C2.42 3.2 2.36 2.66 2.24 2.32C2.14 1.96 1.92 1.72 1.58 1.6C1.26 1.46 0.77 1.38 0.11 1.36V0.76C0.43 0.78 0.83 0.799999 1.31 0.819999C1.81 0.839999 2.3 0.849999 2.78 0.849999C3.52 0.849999 4.24 0.839999 4.94 0.819999C5.64 0.799999 6.26 0.78 6.8 0.76L13.25 16.87L12.59 17.41L18.86 0.849999C19.16 0.849999 19.47 0.849999 19.79 0.849999C20.13 0.849999 20.45 0.849999 20.75 0.849999C21.57 0.849999 22.38 0.839999 23.18 0.819999C23.98 0.799999 24.64 0.78 25.16 0.76ZM31.0496 22.21C30.1896 22.21 29.4596 22.05 28.8596 21.73C28.2596 21.39 27.8096 20.94 27.5096 20.38C27.2096 19.8 27.0596 19.16 27.0596 18.46C27.0596 17.6 27.2596 16.9 27.6596 16.36C28.0596 15.8 28.5696 15.36 29.1896 15.04C29.8296 14.7 30.4996 14.42 31.1996 14.2C31.8996 13.96 32.5596 13.74 33.1796 13.54C33.7996 13.32 34.3096 13.07 34.7096 12.79C35.1096 12.51 35.3096 12.14 35.3096 11.68V9.49C35.3096 8.85 35.2096 8.33 35.0096 7.93C34.8296 7.51 34.5496 7.2 34.1696 7C33.8096 6.78 33.3496 6.67 32.7896 6.67C32.3696 6.67 31.9296 6.73 31.4696 6.85C31.0096 6.97 30.6296 7.2 30.3296 7.54C30.8496 7.68 31.2496 7.94 31.5296 8.32C31.8296 8.7 31.9796 9.16 31.9796 9.7C31.9796 10.32 31.7696 10.81 31.3496 11.17C30.9496 11.51 30.4396 11.68 29.8196 11.68C29.1596 11.68 28.6596 11.47 28.3196 11.05C27.9796 10.63 27.8096 10.14 27.8096 9.58C27.8096 9.02 27.9496 8.56 28.2296 8.2C28.5096 7.82 28.8996 7.48 29.3996 7.18C29.8996 6.84 30.5396 6.57 31.3196 6.37C32.0996 6.17 32.9496 6.07 33.8696 6.07C34.7496 6.07 35.5296 6.17 36.2096 6.37C36.8896 6.55 37.4696 6.88 37.9496 7.36C38.4296 7.82 38.7396 8.39 38.8796 9.07C39.0196 9.75 39.0896 10.58 39.0896 11.56V19.78C39.0896 20.28 39.1496 20.64 39.2696 20.86C39.3896 21.06 39.5796 21.16 39.8396 21.16C40.0396 21.16 40.2296 21.11 40.4096 21.01C40.5896 20.91 40.7896 20.77 41.0096 20.59L41.3396 21.1C40.8996 21.44 40.4396 21.71 39.9596 21.91C39.4796 22.11 38.8996 22.21 38.2196 22.21C37.5196 22.21 36.9596 22.11 36.5396 21.91C36.1396 21.71 35.8396 21.42 35.6396 21.04C35.4596 20.66 35.3596 20.21 35.3396 19.69C34.8596 20.49 34.2696 21.11 33.5696 21.55C32.8696 21.99 32.0296 22.21 31.0496 22.21ZM32.8496 20.53C33.3296 20.53 33.7696 20.4 34.1696 20.14C34.5896 19.88 34.9696 19.49 35.3096 18.97V12.91C35.1096 13.21 34.8196 13.48 34.4396 13.72C34.0796 13.96 33.6896 14.2 33.2696 14.44C32.8496 14.68 32.4496 14.96 32.0696 15.28C31.7096 15.58 31.3996 15.96 31.1396 16.42C30.8996 16.86 30.7796 17.43 30.7796 18.13C30.7796 18.91 30.9696 19.51 31.3496 19.93C31.7296 20.33 32.2296 20.53 32.8496 20.53ZM49.8819 6.07C50.6219 6.07 51.3019 6.16 51.9219 6.34C52.5619 6.5 53.1119 6.73 53.5719 7.03C54.0519 7.33 54.4319 7.71 54.7119 8.17C54.9919 8.61 55.1319 9.1 55.1319 9.64C55.1319 10.3 54.9319 10.83 54.5319 11.23C54.1319 11.63 53.6319 11.83 53.0319 11.83C52.4119 11.83 51.9019 11.65 51.5019 11.29C51.1219 10.93 50.9319 10.45 50.9319 9.85C50.9319 9.27 51.1019 8.79 51.4419 8.41C51.7819 8.03 52.1919 7.78 52.6719 7.66C52.4919 7.4 52.2119 7.19 51.8319 7.03C51.4519 6.85 51.0319 6.76 50.5719 6.76C49.9719 6.76 49.4319 6.92 48.9519 7.24C48.4719 7.54 48.0519 8 47.6919 8.62C47.3519 9.22 47.0819 9.97 46.8819 10.87C46.7019 11.75 46.6119 12.77 46.6119 13.93C46.6119 15.55 46.8019 16.83 47.1819 17.77C47.5819 18.71 48.0919 19.38 48.7119 19.78C49.3319 20.16 49.9919 20.35 50.6919 20.35C51.1119 20.35 51.5619 20.27 52.0419 20.11C52.5219 19.95 52.9919 19.68 53.4519 19.3C53.9319 18.92 54.3619 18.38 54.7419 17.68L55.3119 17.89C55.0919 18.59 54.7319 19.29 54.2319 19.99C53.7519 20.69 53.1219 21.27 52.3419 21.73C51.5619 22.19 50.6119 22.42 49.4919 22.42C48.2119 22.42 47.0519 22.13 46.0119 21.55C44.9719 20.95 44.1419 20.05 43.5219 18.85C42.9219 17.65 42.6219 16.16 42.6219 14.38C42.6219 12.62 42.9319 11.13 43.5519 9.91C44.1719 8.67 45.0319 7.72 46.1319 7.06C47.2519 6.4 48.5019 6.07 49.8819 6.07ZM64.5568 6.07C66.3168 6.07 67.6968 6.6 68.6968 7.66C69.6968 8.72 70.1968 10.41 70.1968 12.73H60.0868L60.0568 12.16H66.7168C66.7568 11.18 66.6968 10.28 66.5368 9.46C66.3768 8.62 66.1168 7.95 65.7568 7.45C65.4168 6.95 64.9668 6.7 64.4068 6.7C63.6468 6.7 62.9868 7.15 62.4268 8.05C61.8668 8.93 61.5168 10.38 61.3768 12.4L61.4968 12.58C61.4568 12.84 61.4268 13.12 61.4068 13.42C61.4068 13.72 61.4068 14.02 61.4068 14.32C61.4068 15.7 61.6068 16.84 62.0068 17.74C62.4068 18.64 62.9268 19.3 63.5668 19.72C64.2068 20.14 64.8668 20.35 65.5468 20.35C66.0068 20.35 66.4768 20.28 66.9568 20.14C67.4368 20 67.9068 19.74 68.3668 19.36C68.8268 18.98 69.2468 18.44 69.6268 17.74L70.1968 17.98C69.9768 18.68 69.6068 19.38 69.0868 20.08C68.5868 20.76 67.9368 21.32 67.1368 21.76C66.3368 22.2 65.3968 22.42 64.3168 22.42C62.9568 22.42 61.7568 22.12 60.7168 21.52C59.6768 20.92 58.8668 20.03 58.2868 18.85C57.7068 17.65 57.4168 16.19 57.4168 14.47C57.4168 12.65 57.7168 11.12 58.3168 9.88C58.9368 8.64 59.7868 7.7 60.8668 7.06C61.9468 6.4 63.1768 6.07 64.5568 6.07ZM82.5861 6.07C83.3661 6.07 84.0161 6.18 84.5361 6.4C85.0761 6.62 85.4961 6.9 85.7961 7.24C86.1561 7.62 86.4061 8.13 86.5461 8.77C86.6861 9.39 86.7561 10.18 86.7561 11.14V19.21C86.7561 20.05 86.8961 20.62 87.1761 20.92C87.4761 21.22 87.9761 21.37 88.6761 21.37V22C88.3161 21.98 87.7761 21.96 87.0561 21.94C86.3361 21.9 85.6361 21.88 84.9561 21.88C84.2361 21.88 83.5361 21.9 82.8561 21.94C82.1961 21.96 81.6961 21.98 81.3561 22V21.37C81.9361 21.37 82.3461 21.22 82.5861 20.92C82.8461 20.62 82.9761 20.05 82.9761 19.21V10.12C82.9761 9.58 82.9361 9.1 82.8561 8.68C82.7761 8.24 82.6061 7.9 82.3461 7.66C82.0861 7.4 81.6861 7.27 81.1461 7.27C80.5261 7.27 79.9661 7.45 79.4661 7.81C78.9661 8.17 78.5661 8.67 78.2661 9.31C77.9861 9.93 77.8461 10.63 77.8461 11.41V19.21C77.8461 20.05 77.9661 20.62 78.2061 20.92C78.4461 21.22 78.8661 21.37 79.4661 21.37V22C79.1261 21.98 78.6261 21.96 77.9661 21.94C77.3261 21.9 76.6661 21.88 75.9861 21.88C75.2461 21.88 74.4961 21.9 73.7361 21.94C72.9761 21.96 72.4061 21.98 72.0261 22V21.37C72.7661 21.37 73.2861 21.22 73.5861 20.92C73.9061 20.62 74.0661 20.05 74.0661 19.21V9.76C74.0661 8.86 73.9161 8.2 73.6161 7.78C73.3361 7.34 72.8061 7.12 72.0261 7.12V6.49C72.6661 6.55 73.2861 6.58 73.8861 6.58C74.6261 6.58 75.3261 6.55 75.9861 6.49C76.6661 6.41 77.2861 6.3 77.8461 6.16V9.16C78.3461 8.06 79.0161 7.27 79.8561 6.79C80.6961 6.31 81.6061 6.07 82.5861 6.07ZM91.6161 6.07C92.3961 6.07 93.0461 6.18 93.5661 6.4C94.1061 6.62 94.5261 6.9 94.8261 7.24C95.1861 7.62 95.4361 8.13 95.5761 8.77C95.7161 9.39 95.7861 10.18 95.7861 11.14V19.21C95.7861 20.05 95.9361 20.62 96.2361 20.92C96.5561 21.22 97.0861 21.37 97.8261 21.37V22C97.4661 21.98 96.9061 21.96 96.1461 21.94C95.4061 21.9 94.6861 21.88 93.9861 21.88C93.2661 21.88 92.5661 21.9 91.8861 21.94C91.2261 21.96 90.7261 21.98 90.3861 22V21.37C90.9661 21.37 91.3761 21.22 91.6161 20.92C91.8761 20.62 92.0061 20.05 92.0061 19.21V10.12C92.0061 9.58 91.9561 9.1 91.8561 8.68C91.7761 8.24 91.5961 7.9 91.3161 7.66C91.0361 7.4 90.6161 7.27 90.0561 7.27C89.4361 7.27 88.8761 7.46 88.3761 7.84C87.8761 8.22 87.4761 8.73 87.1761 9.37C86.8961 9.99 86.7461 10.69 86.7261 11.47L86.5761 9.31C87.1161 8.07 87.8361 7.22 88.7361 6.76C89.6361 6.3 90.5961 6.07 91.6161 6.07Z"
                fill="#1E293B"
              />
            </svg>
          </a>
          <div className="flex item-center gap-6">
            <div
              onClick={() => props.setSearch(true)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <svg
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

              <p className="text-base leading-none text-right text-gray-800 open">
                Search
              </p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5436 3.75C13.5005 3.75 12.0005 6.75 12.0005 6.75C12.0005 6.75 10.5005 3.75 7.45735 3.75C4.98423 3.75 3.02579 5.81906 3.00048 8.28797C2.94892 13.4128 7.06595 17.0573 11.5786 20.1202C11.703 20.2048 11.85 20.2501 12.0005 20.2501C12.151 20.2501 12.2979 20.2048 12.4224 20.1202C16.9345 17.0573 21.0516 13.4128 21.0005 8.28797C20.9752 5.81906 19.0167 3.75 16.5436 3.75Z"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-base leading-none text-right text-gray-800 open">
                Favourites
              </p>
            </div>
            <div
              onClick={() => setshowNav(true)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.25 3.75H5.25L7.5 16.5H19.5"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 13.5H19.1925C19.2792 13.5001 19.3633 13.4701 19.4304 13.4151C19.4975 13.3601 19.5434 13.2836 19.5605 13.1986L20.9105 6.44859C20.9214 6.39417 20.92 6.338 20.9066 6.28414C20.8931 6.23029 20.8679 6.18009 20.8327 6.13717C20.7975 6.09426 20.7532 6.05969 20.703 6.03597C20.6528 6.01225 20.598 5.99996 20.5425 6H6"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-base leading-none text-right text-gray-800 open">
                Bag
              </p>
            </div>
          </div>
        </nav>
        <hr className="border-gray-200 mt-4" />
        <nav className="container relative z-20 flex items-center justify-center px-4 pt-6 mx-auto 2xl:px-4 xl:px-10">
          <div className="flex items-center justify-center relative">
            <ul className="flex items-center gap-x-10">
              {list.map((item) => {
                let tag = item.link;
                return (
                  <div key={item.name}>
                    <Link href={tag}>
                      <li
                        onClick={() => setshowPro(item.state)}
                        className="text-base leading-none text-right text-gray-800 cursor-pointer open"
                      >
                        {item.name}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
          <div></div>
        </nav>
        <hr className="border-gray-200 mt-6" />
      </div>

      {/* show on lg */}
      {/* <div className=" z-20 flex justify-between items-center mt-8 px-6">
        <div className="lg:hidden block">
          <Icon icon="ruklogo" w={86} h={76} customClasses={"cursor-pointer"} />
        </div>
        <div onClick={() => setshowNav(true)} className="lg:hidden block">
          <Icon icon="tabler" customClasses={"cursor-pointer"} />
        </div>
      </div> */}
      {/* end */}
      {/*  Mobile Nav */}
      {/* <div onClick={() => setshowNav(false)} className={`bg-black z-20 lg:hidden block opacity-60  fixed top-0 w-full h-full ${nav ? `block` : `hidden`}`}></div>
      <nav className={`w-64 lg:hidden block bg-white top-0 z-[80] fixed left-0 duration-300 ease-in-out h-screen p-3 overflow-scroll transform ${nav ? `translate-x-0` : `-translate-x-full`}`}>
        <div className="flex items-center justify-between mt-6 ">
          <a href="/" className="-ml-4">
            <Icon icon="ruklogoblack" w={86} h={56} customClasses={"cursor-pointer"} />
          </a>
          <div onClick={() => setshowNav(false)}>
            <Icon w={20} h={20} icon="cross" customClasses={"cursor-pointer"} />
          </div>
        </div>{" "}
        <ul className="text-base cursor-pointer tracking-1 leading-5 focus:outline-none">
          {list.map((item, index) => {
            return (
              <div key={item.name}>
                <Link key={index} href={item.link}>
                  <li className="mt-6">{item.name}</li>
                </Link>
              </div>
            );
          })}
        </ul>
        <div className="mt-8 ">
          <button className="px-8 py-4 text-sm font-semibold leading-none w-full tracking-wide product-gradient-button product-gradient2  rounded text-gray-50  ">Login</button>
        </div>
      </nav> */}

      {/* Cart Section */}
      <div
        onClick={() => setshowNav(false)}
        className={`bg-black block z-20 bg-opacity-60 fixed top-0 w-full h-full backdrop-blur-lg ${
          nav ? `block` : `hidden`
        }`}
      ></div>
      <nav
        className={`bg-white max-w-[720px] w-full h-screen z-20  fixed right-0  ml-auto duration-300 ease-in-out transform ${
          nav ? `translate-x-0` : `translate-x-[800px]`
        }`}
      >
        <div className="flex justify-between items-center p-10">
          <p className="text-2xl font-bold text-center text-gray-800">
            Your Shopping Bag
          </p>
          <svg
            onClick={() => setshowNav(false)}
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
        <hr className="border border-gray-200 my-10" />
        <div className="h-[600px] overflow-y-scroll">
          {cart.map((item, index) => {
            return (
              <div
                key={index * Math.random * 1000}
                className="px-10 flex justify-start items-start gap-8 mb-10 overflow-y-scroll lg:flex-row flex-col space-y-4"
              >
                <img
                  className="w-[187px] h-[187px]"
                  src={item.bag}
                  alt={item.bag}
                />
                <div aria-label="text" className="w-full">
                  <p className="text-sm text-gray-600 open mb-1">{item.rx}</p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xl text-gray-800 open">{item.mini}</p>
                    <p className="text-xl font-bold text-gray-800 open">
                      {item.dollar}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 open">{item.size}</p>
                  <p className="text-sm text-gray-600 mb-2 open">
                    {item.color}
                  </p>
                  <p className="text-sm text-gray-600 mb-2 open">
                    {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600 open">{item.leather}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-10 px-10">
          <p className="text-2xl font-semibold text-gray-800 open">TOTAL</p>
          <p className="text-2xl font-semibold text-gray-800 open">$1,280</p>
        </div>
        <div className="mt-6 px-10">
          <button className="raleway text-base font-medium leading-none text-white w-full px-5 py-5 bg-gray-800 text-center hover:bg-gray-700 transform duration-300 ease-in-out">
            SEE YOUR SHOPPING BAG
          </button>
        </div>
      </nav>
      {/* End */}

      {/* Product Interaction section */}
      <div
        onClick={() => setshowPro(true)}
        className={`bg-black block z-20 bg-opacity-60 fixed top-0 w-full h-full backdrop-blur-lg ${
          pro ? `block` : `hidden`
        }`}
      ></div>
      <div
        className={`pt-12 bg-white max-h-[850px] z-20  fixed top-0 right-0 left-0 duration-300 ease-in-out transform ${
          pro ? `translate-y-0` : `translate-y-[-1200px]`
        }`}
      >
        <div className="flex justify-between items-center px-20">
          <div className="flex items-center gap-x-20 ">
            <p className="text-xl font-bold text-gray-800 cursor-pointer border-gray-800 border-b-4 pb-8 h-[60px] open">
              New{" "}
            </p>
            <p
              onClick={() => setshowPro1(true)}
              className="text-xl text-gray-800 cursor-pointer hover:border-gray-800 hover:border-b-4 border-transparent pb-8 h-[60px] open"
            >
              Men
            </p>
            <p className="text-xl text-gray-800 cursor-pointer hover:border-gray-800 hover:border-b-4 border-transparent pb-8 h-[60px] open">
              Women
            </p>
          </div>
          <div onClick={() => setshowPro(false)} className="-mt-4">
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
        <hr className="border-gray-200 w-full" />
        <div className="flex h-full">
          <div className="pl-20 max-w-[376px] w-full mt-8">
            <p className="text-xl hover:font-bold text-gray-600 open">Men</p>
            <p className="text-xl hover:font-bold text-gray-600 open my-8">
              Women
            </p>
            <p className="text-xl hover:font-bold text-gray-600 open">
              Macem 2023 Collection
            </p>
          </div>
          <div className="max-h-screen bg-gray-200 w-[1px] "></div>
          <div className="p-8 flex gap-x-8 items-center flex-wrap">
            <div className="group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/endo2323.png"
                alt="one"
              />
              <p className="text-xl group-hover:font-semibold mt-6 text-gray-800 open">
                Clothing
              </p>
            </div>
            <div className=" group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/show434.png"
                alt="one"
              />
              <p className="text-xl  group-hover:font-semibold mt-6 text-gray-800 open">
                Footwear
              </p>
            </div>
            <div className=" group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/bags2323g.png"
                alt="one"
              />
              <p className="text-xl  group-hover:font-semibold mt-6 text-gray-800 open">
                Bags
              </p>
            </div>
            <div className="mt-8 group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hands23fv5.png"
                alt="one"
              />
              <p className="text-xl mt-6 group-hover:font-semibold  text-gray-800 open">
                Accessories
              </p>
            </div>
            <div className="mt-8 group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/perfume43456.png"
                alt="one"
              />
              <p className="text-xl mt-6 group-hover:font-semibold  text-gray-800 open">
                Fragrance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product 2 Men */}
      <div
        onClick={() => setshowPro1(true)}
        className={`bg-black block z-20 bg-opacity-60 fixed top-0 w-full h-full backdrop-blur-lg ${
          pro1 ? `block` : `hidden`
        }`}
      ></div>
      <div
        className={`pt-12 bg-white z-20  fixed top-0 right-0 left-0 duration-300 ease-in-out transform ${
          pro1 ? `translate-y-0` : `translate-y-[-800px]`
        }`}
      >
        <div className="flex justify-between items-center px-20">
          <div className="flex items-center gap-x-20 ">
            <p className="text-xl text-gray-800 cursor-pointer hover:border-gray-800 hover:border-b-4 border-transparent pb-8 h-[60px] open">
              New{" "}
            </p>
            <p className="text-xl font-bold text-gray-800 cursor-pointer border-gray-800 border-b-4 pb-8 h-[60px] open">
              Men
            </p>
            <p className="text-xl text-gray-800 cursor-pointer hover:border-gray-800 hover:border-b-4 border-transparent pb-8 h-[60px] open">
              Women
            </p>
          </div>
          <div onClick={() => setshowPro1(false)} className="-mt-4">
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
        <hr className="border-gray-200 w-full" />
        <div className="flex h-full">
          <div className="pl-20 max-w-[376px] w-full mt-8">
            <p className="text-xl text-gray-600 open hover:font-bold">Bags</p>
            <p className="text-xl text-gray-600 open hover:font-bold my-8">
              Shoes
            </p>
            <p className="text-xl text-gray-600 open hover:font-bold">
              Accessories
            </p>
            <p className="text-xl text-gray-600 open hover:font-bold my-8">
              Fragrances
            </p>
            <p className="text-xl text-gray-600 open hover:font-bold">
              Ready to wear
            </p>
            <p className="text-xl text-gray-600 open hover:font-bold my-8">
              Macem 2023 Collection
            </p>
            <p className="text-xl text-gray-600 open pb-20">
              Macem X Lufu Collection
            </p>
          </div>
          <div className="max-h-screen bg-gray-200 w-[1px] "></div>
          <div className="p-8 flex gap-x-8 items-center flex-wrap">
            <div className=" group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blurbaig045.png"
                alt="one"
              />
              <p className="text-xl  group-hover:font-semibold mt-6 text-gray-800 open">
                Backbacks
              </p>
            </div>
            <div className=" group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/dogbag3424.png"
                alt="one"
              />
              <p className="text-xl  group-hover:font-semibold mt-6 text-gray-800 open">
                Travelling Bags
              </p>
            </div>
            <div className=" group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/insidebag2344.png"
                alt="one"
              />
              <p className="text-xl  group-hover:font-semibold mt-6 text-gray-800 open">
                Business Bags
              </p>
            </div>
            <div className="mt-8 group">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/waleet4546.png"
                alt="one"
              />
              <p className="text-xl mt-6 group-hover:font-semibold  text-gray-800 open">
                Wallets
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* end */}
    </>
  );
}

export default header;
