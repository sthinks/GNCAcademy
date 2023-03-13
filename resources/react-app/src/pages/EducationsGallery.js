import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../components/Banner'

const EducationsGallery = () => {

    return (
        <>
            <Helmet>
                <title>Eğitimlerimiz</title>
            </Helmet>
            <Banner title="EĞİTİMLERİMİZ" />
            <div className='bg-[#F4F4F4] py-10'>
                <div className='mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div className='flex'>
                        <div className='flex-1'>
                            <div>
                                <h2 className='font-bold text-[#4D4E50]'>Eğitimlerden <br /> Kareler</h2>
                            </div>
                        </div>
                        <div className='flex-[2_2_0]'></div>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div className='py-10'>
                    <div class="columns-2 md:columns-3 lg:columns-3">
                        <div className='relative flex justify-center items-center mb-4'>
                            <div className='bg-[#D73636] absolute w-full h-full opacity-[0.6]' />
                            <span className='absolute text-white font-bold text-xl'>Satış Torna Eğitimi</span>
                            <img src="https://source.unsplash.com/random/1" />
                        </div>
                        <div className='relative flex justify-center items-center mb-4'>
                            <div className='bg-black absolute w-full h-full opacity-[0.6]' />
                            <span className='absolute text-white font-bold text-xl'>Satış Torna Eğitimi</span>
                            <img src="https://source.unsplash.com/random/2" />
                        </div>
                        <div className='relative flex justify-center items-center mb-4'>
                            <div className='bg-black absolute w-full h-full opacity-[0.6]' />
                            <span className='absolute text-white font-bold text-xl'>Satış Torna Eğitimi</span>
                            <img src="https://source.unsplash.com/random/3" />
                        </div>
                        <div className='relative flex justify-center items-center mb-4'>
                            <div className=' bg-[#D73636] absolute w-full h-full opacity-[0.6]' />
                            <span className='absolute text-white font-bold text-xl'>Satış Torna Eğitimi</span>
                            <img src="https://source.unsplash.com/random/4" />
                        </div>
                        <div className='relative flex justify-center items-center mb-4'>
                            <div className='bg-[#D73636] absolute w-full h-full opacity-[0.6]' />
                            <span className='absolute text-white font-bold text-xl'>Satış Torna Eğitimi</span>
                            <img src="https://source.unsplash.com/random/5" />
                        </div>
                        <div className='relative flex justify-center items-center mb-4'>
                            <div className='bg-black absolute w-full h-full opacity-[0.6]' />
                            <span className='absolute text-white font-bold text-xl'>Satış Torna Eğitimi</span>
                            <img src="https://source.unsplash.com/random/6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EducationsGallery