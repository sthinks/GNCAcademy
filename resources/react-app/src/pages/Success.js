import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import SuccesImage from "../images/success.png";

const Success = () => {
    const location = useLocation();
    const { name, surname } = location.state;
    return (
        <div>
            <Header />
            <div className='bg-[#E02228] h-[86vh] flex flex-col items-center justify-center'>
                <span className="font-[400] text-[50px] text-white">GNC</span>
                <span className="font-[400] text-[32px] text-white">{name} {surname} ;</span>
                <img src={SuccesImage} className="mt-2" />
                <p className='mt-2'>
                    <span className='font-[700] text-[25px] text-white block text-center'>Başvuru</span>
                    <span className='font-[700] text-[25px] text-white block text-center'>talebiniz tarafımıza ulaşmıştır.</span>
                </p>
                <p className='mt-3'>
                    <span className='font-[500] text-[15px] text-white block text-center'>
                        Öncelikle göstermiş olduğunuz ilgi ve paylaştığınız
                    </span>
                    <span className='font-[500] text-[15px] text-white block text-center'>
                        detaylar için teşekkür ederiz.
                    </span>
                </p>
                <p className='mt-3'>
                    <span className='font-[500] text-[15px] text-white block text-center'>
                        Danışmanlarımız en kısa sürede uygun eğitim programları ile
                    </span>
                    <span className='font-[500] text-[15px] text-white block text-center'>
                        ilgili görüşmek üzere size dönüş sağlayacaktır.
                    </span>
                </p>
                <span className='font-[500] text-[15px] text-white mt-5'>
                    İyi günler dileriz.
                </span>
            </div>

        </div>
    )
}

export default Success