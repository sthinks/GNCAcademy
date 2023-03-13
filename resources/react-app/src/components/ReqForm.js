import React from 'react'
import ArrowRight from '../assets/images/arrow-right.png'

const ReqForm = () => {
  return (
    <div className="bg-[#3D4543] w-[157px] h-[157px] fixed right-8 top-20 rounded-l-full rounded-tr-full flex items-center justify-center z-10 max-sm:w-[90px] max-sm:h-[90px] max-sm:right-2">
      <a href="/kayit-form">
        <p>
          <span className="text-white font-bold block max-sm:text-[15px]">
            Eğitim
          </span>
          <span className="text-white font-bold block max-sm:text-[15px]">
            Talep
          </span>
          <span className="text-white font-bold flex items-center max-sm:text-[15px]">
            Formu
            <img src={ArrowRight} className="ml-3 max-sm:ml-1" />
          </span>
        </p>
      </a>
    </div>
  )
}

export default ReqForm
