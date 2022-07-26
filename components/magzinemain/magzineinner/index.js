import React from "react";
import Magzine from "../../reuseable/magzine/index";
function index() {
  return (
    <>
      <div className="mx-auto container mt-14">
        <Magzine
          story={"OUR EXQUISITE APPROACH"}
          our={"Magazine"}
          ptag={
            "Here is a paragraph telling ya’all how awesome we are We offers style choices that make your outfit of the day look fire. Hop onto lastest fashion trends with Macem"
          }
          ptag1={
            "We offers style choices that make your outfit of the day look fire. Hop onto lastest fashion trends with Macem"
          }
        />
        <div className="mt-20 w-full">
          <img
            className="w-full"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/maginner35404956.png"
            alt="image"
          />
        </div>
        <div className="mt-10 mb-8 text-center">
          <p className="text-base text-gray-600 open">23 July 2022</p>
          <p className="text-5xl font-bold text-gray-800 mt-4 mb-6 raleway">
            Down The Fashion Lane
          </p>
          <p className="text-xl text-gray-800 open">
            Story By: <span className="font-semibold open">Alina Davidson</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-6">
          <svg
            className="cursor-pointer"
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5 11.0637C21.5 5.26522 16.7984 0.56366 11 0.56366C5.20156 0.56366 0.5 5.26522 0.5 11.0637C0.5 16.3043 4.33906 20.6482 9.35938 21.4366V14.0998H6.69266V11.0637H9.35938V8.75038C9.35938 6.11928 10.9273 4.66475 13.3255 4.66475C14.4744 4.66475 15.6763 4.87007 15.6763 4.87007V7.45428H14.3516C13.048 7.45428 12.6402 8.26335 12.6402 9.09491V11.0637H15.552L15.087 14.0998H12.6406V21.4376C17.6609 20.6496 21.5 16.3057 21.5 11.0637Z"
              fill="#9CA3AF"
            />
          </svg>
          <svg
            className="cursor-pointer"
            width={24}
            height={18}
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.25 2.13264C22.406 2.49936 21.513 2.74097 20.5992 2.84982C21.5595 2.2875 22.2817 1.39415 22.6303 0.337325C21.7224 0.868227 20.7307 1.24073 19.6978 1.43889C19.2629 0.983042 18.7397 0.620405 18.1603 0.373018C17.5808 0.125631 16.9571 -0.00133967 16.327 -0.000175167C13.7761 -0.000175167 11.7117 2.0342 11.7117 4.54201C11.7099 4.89084 11.7499 5.23863 11.8308 5.57795C10.0016 5.4922 8.2104 5.02557 6.57187 4.20791C4.93333 3.39026 3.48351 2.23959 2.31516 0.829512C1.90527 1.52051 1.6885 2.30891 1.6875 3.11232C1.6875 4.68732 2.50922 6.07951 3.75 6.89514C3.01487 6.87769 2.29481 6.68312 1.65094 6.32795V6.3842C1.65094 8.58732 3.24469 10.4201 5.35406 10.8373C4.9574 10.9431 4.54864 10.9966 4.13812 10.9967C3.84683 10.9972 3.5562 10.9689 3.27047 10.9123C3.85687 12.717 5.56359 14.0295 7.58531 14.067C5.94252 15.3331 3.9256 16.0174 1.85156 16.0123C1.48341 16.0118 1.11561 15.9899 0.75 15.9467C2.85993 17.294 5.31255 18.0066 7.81594 17.9998C16.3172 17.9998 20.9616 11.0764 20.9616 5.0717C20.9616 4.87482 20.9564 4.67795 20.947 4.48576C21.8485 3.84454 22.6283 3.04769 23.25 2.13264Z"
              fill="#9CA3AF"
            />
          </svg>
          <svg
            className="cursor-pointer"
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0024 0.5C5.204 0.5 0.502441 5.20156 0.502441 11C0.502441 15.2984 3.08994 18.9922 6.78838 20.6188C6.76025 19.8875 6.78369 19.0062 6.97119 18.2094C7.17275 17.3562 8.32119 12.4859 8.32119 12.4859C8.32119 12.4859 7.98369 11.8156 7.98369 10.8266C7.98369 9.27031 8.88369 8.10781 10.0087 8.10781C10.9649 8.10781 11.4243 8.825 11.4243 9.68281C11.4243 10.6437 10.8103 12.0781 10.4962 13.4094C10.2337 14.525 11.054 15.4297 12.1556 15.4297C14.1431 15.4297 15.4837 12.875 15.4837 9.84687C15.4837 7.54531 13.9321 5.825 11.1149 5.825C7.93213 5.825 5.94463 8.20156 5.94463 10.8547C5.94463 11.7687 6.2165 12.4156 6.63838 12.9125C6.83057 13.1422 6.85869 13.2359 6.78838 13.4984C6.73682 13.6906 6.62432 14.1547 6.57275 14.3422C6.50244 14.6094 6.28682 14.7031 6.04775 14.6047C4.58057 14.0047 3.89619 12.4016 3.89619 10.5922C3.89619 7.61094 6.41338 4.03438 11.4009 4.03438C15.4087 4.03438 18.0478 6.93594 18.0478 10.0484C18.0478 14.1687 15.7556 17.2438 12.3806 17.2438C11.2462 17.2438 10.1821 16.6297 9.8165 15.9359C9.8165 15.9359 9.20713 18.3547 9.07588 18.8234C8.85557 19.6344 8.41963 20.4406 8.02119 21.0734C8.9877 21.3586 9.99007 21.5038 10.9978 21.5047C16.7962 21.5047 21.4978 16.8031 21.4978 11.0047C21.4978 5.20625 16.8009 0.5 11.0024 0.5Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>
        <div className="mt-10 mx-auto max-w-[842px] w-full">
          <p class="text-2xl tracking-wide text-center text-gray-600 open">
            Here is a paragraph telling ya’all how awesome we are We offers
            style choices that make your outfit of the day look fire. Here is a
            paragraph telling ya’all how awesome we are we offers style choices{" "}
          </p>
          <p class="text-2xl tracking-wide text-center text-gray-600 mt-6 open">
            Here is a paragraph telling ya’all how awesome we are We offers
            style choices that make your outfit of the day look fire.
          </p>
        </div>
        <div className="mt-10 w-full">
          <img
            className="mx-auto"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/pinki4345.png"
            alt="image"
          />
          <p class="text-base text-center text-gray-800 open mt-4">
            Macem X Ralph Lauren{" "}
            <span className="ml-2 text-base italic font-italic text-gray-600 open">
              Summer of year 2023{" "}
            </span>{" "}
          </p>
        </div>
        <div className="text-center mt-10">
          <p class="text-2xl tracking-wide text-center text-gray-600 max-w-[843px] w-full mx-auto">
            Here is a paragraph telling ya’all how awesome we are We offers
            style choices that make your outfit of the day look fire. Here is a
            paragraph telling ya’all how awesome we are we offers style choices
            here is a paragraph telling ya’all how awesome we are We offers
            style choices that make your outfit of the day look fire.
          </p>
        </div>
      </div>
    </>
  );
}

export default index;
