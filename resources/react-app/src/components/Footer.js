import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#D73636]">
      <div className="mx-auto lg:max-w-7xl md:px-8">
        <div className="md:py-16 max-md:py-10">
          <div className="md:flex justify-between">
            <div className="md:flex max-md:px-10">
              <ul className="text-white">
                <h5>Kurumsal</h5>
                <li className="font-thin">
                  <Link to="/hakkimizda">Hakkımızda</Link>
                </li>
                <li className="font-thin">
                  <Link to="/kvkk">KVKK</Link>
                </li>
                <li className="font-thin">
                  <Link to="/vizyon-misyon">Vizyon & Misyon</Link>
                </li>
              </ul>
              <ul className="text-white md:ml-10 max-md:mt-5">
                <h5>Eğitim</h5>
                <li className="font-thin">
                  <Link to="/egitimlerimiz">Eğitimlerimiz</Link>
                </li>
              </ul>
              <ul className="text-white md:ml-10 max-md:mt-5">
                <h5>
                  <Link to="/iletisim">İletişim</Link>
                </h5>
              </ul>
            </div>
            <div className="max-md:mt-5 max-md:px-10">
              <h5 className="text-white md:text-center">Bizi Takip Et!</h5>
              <div className="flex mt-2">
                <a href="https://facebook.com/GNCAkademi/" target="_blank">
                  <FaFacebook className="bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1" />
                </a>
                <a href="https://www.instagram.com/gncakademi/" target="_blank">
                  <FaInstagram className="bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1" />
                </a>
                <a
                  href="https://www.linkedin.com/company/gnc-akademi/?"
                  target="_blank"
                >
                  <FaLinkedin className="bg-[#4D4E50] text-white text-2xl rounded-full p-1 mr-1" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCUy38P612ndEJRxt81IbEIg"
                  target="_blank"
                >
                  <FaYoutube className="bg-[#4D4E50] text-white text-2xl rounded-full p-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
