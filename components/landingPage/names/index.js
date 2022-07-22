import React from "react";
import Marquee from "react-fast-marquee";
function index() {
    let names = [
        {
            title:"Wordwide Delivery",
        },
        {
            title:"Cruelty Free",
        },
        {
            title:"Drug Free",
        },
        {
            title:"Recyclable",
        },
        {
            title:"Money-Back Guarantee",
        }
    ]
  return (
    <>
      <div className="flex justify-between items-center relative mt-[150px]">
        <img className="absolute right-0 left-0 w-full -z-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/brandanme11.png" alt="back"/>
        <Marquee gradient={false} speed={100}>
        {names.map((item, index) =>{
            return(
                <div key={index * Math.random * 1000} className="flex justify-evenly items-center w-full gap-8">
                    <p className="text-2xl font-bold leading-normal text-white raleway">{item.title}</p>
                </div>
                );
            })}
            </Marquee>
      </div>
    </>
  );
}

export default index;
