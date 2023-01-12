import React, { useState } from 'react';
import TopRight from "../images/frame.png";
import MiddleLeft from "../images/vektor.png";
import ArrowRight from "../images/arrow-right.png";
import Phone from '../images/phone.png';
import Mail from '../images/mail.svg';
import Gif from "../gif/banner.gif";
import Mark from "../images/mark.png";
import MapVektor from "../images/map-vektor.png";
import Wave from "../images/wave.png";
import Hand from "../images/hand.png";
import { TiSocialFacebook } from "react-icons/ti"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { TfiLinkedin } from "react-icons/tfi"
import { RiYoutubeFill } from "react-icons/ri"
import Header from '../components/Header';
import axios from 'axios';

const Home = () => {
    const [map, setMap] = useState(false);
    const [success, setSuccess] = useState(false);
    const [value, setValue] = useState({
        mail: '',
        message: ''
    })
    const { innerWidth: width, innerHeight: height } = window;

    const changeHandler = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post("api/contact", value)
                .then((response) => {
                    setSuccess(true)
                    e.target.reset();
                }).catch((error) => {
                    console.log(error)
                    setSuccess(false)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="relative">
            <img src={TopRight} className="absolute right-[-5%] top-0 z-10 w-[500px] lg:w-[341px] xl:w-[393px] 2xl:w-[467px] max-xl:hidden" />
            <img src={MiddleLeft} className="absolute left-[0px] top-[35%] z-10 max-sm:w-[100px] xl:w-[164px] 2xl:w-[220px] max-xl:hidden" />
            <img src={MapVektor} className="absolute right-[0px] bottom-[0px] z-10 max-sm:hidden xl:w-[220px] 2xl:w-[350px] max-xl:hidden" />
            <div className='bg-[#3D4543] w-[157px] h-[157px] fixed right-8 top-20 rounded-l-full rounded-tr-full flex items-center justify-center z-10 max-sm:w-[90px] max-sm:h-[90px] max-sm:right-2'>
                <a href="/iletisim">
                    <p>
                        <span className='text-white font-bold block max-sm:text-[15px]'>
                            Eğitim
                        </span>
                        <span className='text-white font-bold block max-sm:text-[15px]'>
                            Talep
                        </span>
                        <span className='text-white font-bold flex items-center max-sm:text-[15px]'>
                            Formu
                            <img src={ArrowRight} className="ml-3 max-sm:ml-1" />
                        </span>
                    </p>
                </a>
            </div>
            <Header />
            <div className='container mx-auto relative'>
                <div className='absolute top-[20%] left-[10%] max-sm:left-[5%]'>
                    <h1 className="font-[700] text-[96px] leading-[144px] text-white max-sm:text-[45px] max-sm:leading-[60px]">GNC</h1>
                    <div className='bg-white w-[427px] max-sm:w-[280px]'>
                        <span className="font-[400] text-[75px] leading-[90px] text-black max-sm:text-[45px] max-sm:leading-[54px]">AKADEMİ</span>
                    </div>
                    <h4 className='text-white font-[700] text-[32px] leading-[46.24px] max-sm:text-[25px] max-sm:leading-[40px]'>CNC Eğitim Takvimine Buradan Ulaşabilirsiniz.</h4>
                </div>
                <img src={Gif} className="w-full z-[-99] h-[600px] max-sm:h-[340px]" />
                <img src={Wave} className="absolute bottom-0 w-full" />
            </div>
            <div className='container mx-auto pt-20 pb-5 bg-[#F5F5F5] mt-8'>
                <div className='flex relative max-sm:flex-col'>
                    <h1 className="font-[500] text-[28px] leading-[33.6px] text-[#3D4543] w-[66%] text-center absolute top-0 max-sm:w-full">İLETİŞİM</h1>
                    <div className='flex-[2_2_0%] flex justify-center gap-20 pt-20 pb-10 max-sm:flex-col'>
                        <div className="flex justify-start flex-col items-center">
                            <img src={Mark} className="mb-2" />
                            <span className="font-[700] text-[14px] leading-[12.88px] text-[#3D4543] block mb-5">Adres</span>
                            <p className="text-center">
                                <span className='block font-[500] text-[14px] leading-[20.23px] text-[#0E0000]'>Yukarı Dudullu, Hünkar Sk.</span>
                                <span className='block font-[500] text-[14px] leading-[20.23px] text-[#0E0000]'>No: 4, 34776 Ümraniye/</span>
                                <span className='block font-[500] text-[14px] leading-[20.23px] text-[#0E0000]'>İstanbul, Türkiye</span>
                            </p>
                        </div>
                        <div className="flex justify-start flex-col items-center">
                            <img src={Phone} className="mb-3" />
                            <span className="font-[700] text-[14px] leading-[12.88px] text-[#3D4543] block mb-5">Telefon</span>
                            <a href="tel:02164714620" className="text-center">
                                <span className='block font-[500] text-[14px] leading-[20.23px] text-[#0E0000]'>0 (216) 471 46 20</span>
                            </a>
                        </div>
                        <div className="flex justify-start flex-col items-center">
                            <img src={Mail} className="mb-4" />
                            <span className="font-[700] text-[14px] leading-[12.88px] text-[#3D4543] block mb-5">E-mail</span>
                            <a href="mailto:info@gncakademi.com" className="text-center">
                                <span className='block font-[500] text-[14px] leading-[20.23px] text-[#0E0000]'>info@gncakademi.com</span>
                            </a>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className="pr-16 text-center max-sm:pl-10 max-sm:pr-10">
                            <form onSubmit={submitHandler}>
                                <span className='font-[500] text-[14px] leading-[20.23px] text-[#0E0000]'>Soru ve önerileriniz için aşağıdaki bilgi formunu kullanabilirsiniz.</span>
                                <input onChange={changeHandler} required type="email" name='email' placeholder="E-mail:" className='w-full outline-none placeholder:text-[#0E0000] mt-3 pl-4 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.05)]' />
                                <textarea onChange={changeHandler} required id="w3review" name="message" rows="4" cols="50" placeholder='Mesaj:' className='w-full outline-none placeholder:text-[#0E0000] mt-4 pl-4 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.05)]'>
                                </textarea>
                                {
                                    success &&
                                    <span className='font-bold float-left mt-4'>Formunuz başarıyla gönderildi.</span>
                                }

                                <button className='shadow-[0_4px_4px_rgba(0,0,0,0.05)] bg-[#4D4E50] rounded-[30px] text-white px-4 py-1 font-[500] text-[12px] float-right mt-4'>Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-8 pb-8'>
                <div className='flex max-sm:flex-col'>
                    <div className='flex flex-col justify-end mr-5 max-sm:flex-row max-sm:justify-around max-sm:mr-0 max-sm:mb-3'>
                        <div className='bg-[#4D4E50] inline-block rounded-full p-1 rotate-[-90deg] mt-2 max-sm:rotate-[0deg]'>
                            <a href="https://tr-tr.facebook.com/gncmakinateknolojileri/" target="_blank"><TiSocialFacebook className='text-white text-[20px]' /></a>
                        </div>
                        <div className='bg-[#4D4E50] inline-block rounded-full p-1 rotate-[-90deg] mt-2 max-sm:rotate-[0deg]'>
                            <a href='https://www.instagram.com/gncakademi/?hl=da' target="_blank"><AiOutlineInstagram className='text-white text-[20px]' /></a>
                        </div>
                        <div className='bg-[#4D4E50] inline-block rounded-full p-1 rotate-[-90deg] mt-2 max-sm:rotate-[0deg]'>
                            <a href='https://twitter.com/gncmakina' target="_blank"><AiOutlineTwitter className='text-white text-[20px]' /></a>
                        </div>
                        <div className='bg-[#4D4E50] inline-block rounded-full p-1 rotate-[-90deg] mt-2 max-sm:rotate-[0deg]'>
                            <a href='https://www.linkedin.com/company/gncmakinateknolojileri/?originalSubdomain=tr' target="_blank"><TfiLinkedin className='text-white text-[20px]' /></a>
                        </div>
                        <div className='bg-[#4D4E50] inline-block rounded-full p-1 rotate-[-90deg] mt-2 max-sm:rotate-[0deg]'>
                            <a href='https://www.youtube.com/channel/UCXNUcOqnzgaWJJxvL6vRXWg/videos?app=desktop&view=0&sort=dd&shelf_id=1' target="_blank"><RiYoutubeFill className='text-white text-[20px]' /></a>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        {width < 600 ?
                            <div className={`absolute w-full h-full top-0 left-0 bg-[#000000b0] flex items-center justify-center flex-col ${map && 'hidden'}`} onClick={() => setMap(true)}>
                                <div>
                                    <span className='font-[400] text-[30px] leading-[30px] text-white'>Lokasyonu görmek için</span>
                                </div>
                                <div className='mt-3'>
                                    <img src={Hand} />
                                </div>
                            </div> : null}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.039325070509!2d29.151152831950995!3d41.00251246153332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf3dfc24c703%3A0x28f6192b6abb7846!2sGNC%20CNC%20Makina%20Teknolojileri%20Anonim%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1672999572739!5m2!1str!2str"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullscreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home