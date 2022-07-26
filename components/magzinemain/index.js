import React from 'react'
import Magzine from '../reuseable/magzine/index'
import Magzinepic from '../reuseable/magzinepic/index'
import Magzinepic1 from '../reuseable/magzinepic1/index'
import Search from '../reuseable/searchbar/index'
function index() {
  return (
    <>
    <div className='container mx-auto mt-14'>
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
      <Magzinepic
       yellowimg={"https://tuk-cdn.s3.amazonaws.com/can-uploader/magzineyellow423.png"}
       july={"23 July 2022"}
       fashion={"Down The Fashion Lane"}
       secret={"Read about how your favourite celebrities pick their clothing items to have striking appearances. You might want to click read story if you want to know their fashion secrets."}
       story={"Story By:"}
       alina={"Alina Davidson"}
       needleimg={"https://tuk-cdn.s3.amazonaws.com/can-uploader/sui24345.png"}
       lunch={"Mozzart Event Launch"}
       rstory={"READ STORY"}
       glassesimg={"https://tuk-cdn.s3.amazonaws.com/can-uploader/glassses2345.png"}
       winter={"Winter Fashion Trends 2022"}
       rstory1={"READ STORY"}
      />
      <Magzinepic1
       yellowimg={"https://tuk-cdn.s3.amazonaws.com/can-uploader/magzinepink245.png"}
       pink={"Pink, The New Black ?"}
       pinkrstory={"READ STORY"}
       needleimg={"https://tuk-cdn.s3.amazonaws.com/can-uploader/perfume5456.png"}
       lunch={"Mozzart Event Launch"}
       rstory={"READ STORY"}
       glassesimg={"https://tuk-cdn.s3.amazonaws.com/can-uploader/prada2367.png"}
       winter={"Winter Fashion Trends 2022"}
       rstory1={"READ STORY"}
      />
      <div className='my-[112px] text-center'>
      <p className="text-xl text-gray-800 open mb-12">Showing <span className='font-semibold open'>12</span> of <span className='font-semibold open'>total 34 blogs</span>. If you want to see more click below</p>
      <button className='raleway text-base font-medium text-white px-10 py-5 bg-gray-800 hover:bg-gray-700 transform duration-300 ease-in-out'>LOAD MORE</button>
      </div>
      <Search/>
    </div>
    </>
  )
}

export default index