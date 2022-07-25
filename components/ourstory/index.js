import React from "react";
import Magzine from "../reuseable/magzine/index";
import Searchbar from '../reuseable/searchbar/index'
function index() {
  return (
    <>
      <div className="container mx-auto mt-14">
        <Magzine
          story={"BUCKLE UP - STORY TIME"}
          our={"Our Candid Story"}
          ptag={
            "Here is a paragraph telling ya’all how awesome we are We offers style choices that make your outfit of the day look fire. Hop onto lastest fashion trends with Macem"
          }
          ptag1={
            "We offers style choices that make your outfit of the day look fire. Hop onto lastest fashion trends with Macem"
          }
        />
        <div className="mt-20 flex justify-between items-center lg:flex-row flex-col gap-y-8">
          <div>
            <p className="text-5xl font-bold text-gray-800 raleway">
              Prime Attributes
            </p>
            <p className="text-xl tracking-wide open text-gray-600 open max-w-[624px] w-full my-6">
              Here is a paragraph telling ya’all how awesome we are We offers
              style choices that make your outfit of the day look fire
            </p>
            <p className="text-xl tracking-wide open text-gray-600 max-w-[521px] w-full">
              We offers style choices that make your outfit of the day look fire
            </p>
          </div>
          <div>
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/silvergir%3Bl23.png"
              alt="silver"
            />
            <p className="text-base text-gray-800 open mt-4">
              Macem Medusa Collection{" "}
              <span className="text-base italic font-italic text-gray-600 open">
                Year 2021 - 2023
              </span>
            </p>
          </div>
        </div>
        <div className="mt-20 flex justify-between items-center lg:flex-row flex-col gap-y-8">
          <div>
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/browngirl3435.png"
              alt="silver"
            />
            <p className="text-base text-gray-800 open mt-4">
              Mildred Ankunding{" "}
              <span className="text-base italic font-italic text-gray-600 open">
                Founder and CEO
              </span>
            </p>
          </div>
          <div>
            <p className="text-5xl font-bold text-gray-800 raleway">
              Word of Honour
            </p>
            <p className="text-xl tracking-wide open text-gray-600 open max-w-[624px] w-full my-6">
              Here is a paragraph telling ya’all how awesome we are We offers
              style choices
            </p>
            <p className="text-xl tracking-wide open text-gray-600 max-w-[521px] w-full">
              We offers style choices that make your outfit of the day look fire
            </p>
          </div>
        </div>
        <div className="mt-20 flex justify-between items-center lg:flex-row flex-col gap-y-8">
          <div>
            <p className="text-5xl font-bold text-gray-800 raleway">
              Prime Attributes
            </p>
            <p className="text-xl tracking-wide open text-gray-600 open max-w-[624px] w-full my-6">
              Here is a paragraph telling ya’all how awesome we are We offers
              style choices that make your outfit of the day look fire
            </p>
            <p className="text-xl tracking-wide open text-gray-600 max-w-[521px] w-full">
              Here is a paragraph telling ya’all how awesome we are We offers
              style choices that make your outfit of the day look fire
            </p>
            <p className="text-xl tracking-wide open text-gray-600 max-w-[521px] w-full mt-6">
              Here is a paragraph telling ya’all how awesome we are We offers
              style choices
            </p>
          </div>
          <div>
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/man235656.png"
              alt="silver"
            />
            <p className="text-base text-gray-800 open mt-4">
              Macem Medusa Collection{" "}
              <span className="text-base italic font-italic text-gray-600 open">
                Year 2021 - 2023
              </span>
            </p>
          </div>
        </div>
        <Searchbar />
      </div>
    </>
  );
}

export default index;
