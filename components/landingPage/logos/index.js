import React from "react";
import Marquee from "react-fast-marquee";
function index() {
  let brands = [
    {
      image: "https://tuk-cdn.s3.amazonaws.com/can-uploader/marie333.png",
    },
    {
      image: "https://tuk-cdn.s3.amazonaws.com/can-uploader/vogue232.png",
    },
    {
      image: "https://tuk-cdn.s3.amazonaws.com/can-uploader/reviewd212.png",
    },
    {
      image: "https://tuk-cdn.s3.amazonaws.com/can-uploader/bazaar23.png",
    },
    {
      image: "https://tuk-cdn.s3.amazonaws.com/can-uploader/heavy21.png",
    },
    {
      image: "https://tuk-cdn.s3.amazonaws.com/can-uploader/grazia112.png",
    },
    {
      image:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/cosmopolitan211.png",
    },
  ];
  return (
    <>
      <div className="mt-[150px] mx-auto w-full">
        <Marquee gradient={false} speed={100}>
          {brands.map((item, index) => {
            return (
              <div
                key={index * Math.random * 1000}
                className="flex justify-between items-center w-full gap-x-4"
              >
                <img src={item.image} alt={item.image} />
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
}

export default index;
