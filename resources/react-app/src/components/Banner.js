import React from 'react'
import BannerImage from '../assets/images/contact/Contact-Banner.png'

const Banner = ({ title }) => {
  return (
    <div className="w-full relative flex justify-center items-center">
      <img className="w-full" src={BannerImage} alt="İletişim" />
      <p className="absolute text-white text-5xl font-bold max-sm:text-2xl">
        {title}
      </p>
    </div>
  )
}

export default Banner
