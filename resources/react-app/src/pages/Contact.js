import React, { useEffect } from 'react'
import CustomForm from '../components/CustomForm'
import Header from '../components/Header'
import TopRight from "../images/frame.png";
import MiddleLeft from "../images/vektor.png";
import MapVektor from "../images/map-vektor.png";

const Contact = () => {

    return (
        <div className='relative'>
            <img src={TopRight} className="absolute right-[-5%] top-0 z-10 w-[500px] lg:w-[341px] xl:w-[276px] 2xl:w-[372px] max-xl:hidden" />
            <img src={MiddleLeft} className="absolute left-[0px] top-[35%] z-10 max-sm:w-[100px] xl:w-[164px] 2xl:w-[283px] max-xl:hidden" />
            <img src={MapVektor} className="absolute right-[0px] bottom-[0px] z-10 max-sm:hidden xl:w-[220px] 2xl:w-[350px] max-xl:hidden" />
            <Header />
            <div className='bg-[#f5f5f5]'>
                <div className='max-w-[1000px] mx-auto'>
                    <div className='p-10'>
                        <span className='font-[500] text-[24px] leading-[34px]'>Eğitim Talep Formu</span>
                    </div>
                    <div className='bg-white p-10'>
                        <span className='font-[400] text-[16px] leading-[23px] text-[#000000]'>
                            Merhaba, sizi tanıyarak süreci hızlandırabilmek
                            ve eğitim başlangıç  seviyenizi belirleyebilmek
                            adına aşağıda yer alan sorulara eksiksiz cevap
                            vermenizi bekleriz.
                        </span>
                        <CustomForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact