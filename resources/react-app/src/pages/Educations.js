import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Banner from '../components/Banner';

const data = [
    {
        id: 0,
        title: "Satış İşleme Merkezi Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 1,
        title: "Online Eğitim",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 2,
        title: "Satış Torna Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 3,
        title: "Satış İşleme Merkezi Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 4,
        title: "Online Eğitim",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 5,
        title: "Satış Torna Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 6,
        title: "Satış İşleme Merkezi Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 7,
        title: "Online Eğitim",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 8,
        title: "Satış Torna Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 9,
        title: "Satış İşleme Merkezi Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 10,
        title: "Online Eğitim",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
    {
        id: 11,
        title: "Satış Torna Eğitimi",
        exp: "alaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır. Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça",
        date: "02.02.2023",
        price: "1700 TL + KDV (%18)"
    },
]

const Educations = () => {
    const [dropdown, setDropdown] = useState(false);
    const [value, setValue] = useState('');
    const [searched, setSearched] = useState([]);
    const [visible, setVisible] = useState(3)

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    const filterHandler = (data) => {
        const filteredItems = data.filter((item) => {
            return item.title.toLowerCase().includes(value.toLocaleLowerCase()) ||
                (value === "" || item.title === value)
        })
        setSearched(filteredItems)
    }

    const dropdownHandler = (filterItem) => {
        const filteredItem = data.filter((item) => (
            item.title === filterItem
        ))
        setSearched(filteredItem)
    }

    useEffect(() => {
        filterHandler(data)
    }, [value])

    return (
        <>
            <Banner title="EĞİTİMLERİMİZ" />
            <div className='mx-auto lg:max-w-7xl md:px-8 py-10'>
                <div className='flex'>
                    <div className='flex-[2_2_0]'>
                        <div className='flex'>
                            <div className='flex-1 mr-5'>
                                <div className='relative'>
                                    <button type="button" className="bg-[#F9F9F9] py-2 rounded-full focus:outline-none px-4 shadow-md w-full flex justify-between" onClick={() => setDropdown(!dropdown)}>
                                        Tümü
                                        <svg className="-mr-1 h-5 w-5 text-gray-400">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    {dropdown ? <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1" role="none">
                                            <ul>
                                                <li className='className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#F9F9F9]' onClick={() => { setDropdown(false); dropdownHandler("Satış İşleme Merkezi Eğitimi") }}>Satış İşleme Merkezi Eğitimi</li>
                                                <li className='className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#F9F9F9]' onClick={() => { setDropdown(false); dropdownHandler("Online Eğitim") }}>Online Eğitim</li>
                                                <li className='className="text-gray-700 block px-4 py-2 text-sm hover:bg-[#F9F9F9]' onClick={() => { setDropdown(false); dropdownHandler("Satış Torna Eğitimi") }}>Satış Torna Eğitimi</li>
                                            </ul>
                                        </div>
                                    </div> : null}
                                </div>
                            </div>
                            <div className='flex-1 relative flex items-center'>
                                <input className=' bg-[#F9F9F9] py-2 rounded-full focus:outline-none px-4 shadow-md w-full' value={value} onChange={(e) => setValue(e.target.value)} />
                                <FaSearch className='absolute right-4 cursor-pointer' />
                            </div>
                        </div>
                        <div className='mt-10'>
                            {searched.slice(0, visible).map((item) => (
                                <div key={item.id}>
                                    <div className='flex'>
                                        <div className='flex-1'>
                                            <div className='h-full w-full object-cover bg-no-repeat bg-fixed bg-center' style={{ background: `url(https://source.unsplash.com/random/6)` }} />
                                        </div>
                                        <div className='flex-[2_2_0]'>
                                            <div className='px-6'>
                                                <h4 className='font-bold text-[#4D4E50]'>{item.title}</h4>
                                                <p className='mt-5'>{item.exp}
                                                </p>
                                                <div className='flex justify-between mt-5'>
                                                    <p className='text-[#676767] font-bold'>{item.date}</p>
                                                    <p className='text-[#676767] font-bold'>{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='h-[1px] w-full bg-[#4D4E50] mt-6 mb-6' />
                                </div>
                            ))}
                            {visible === searched.length ? null : <div className='bg-[#D73636] inline-block py-1 w-full text-white rounded-full font-semibold mt-6 text-center cursor-pointer' onClick={showMoreItems}>Daha Fazlasını Göster</div>}
                        </div>
                    </div>
                    <div className='flex-1 ml-10'>
                        <div>
                            <div className='bg-[#4D4E50] py-2'>
                                <div className='mx-auto lg:max-w-7xl md:px-8'>
                                    <h6 className='text-white font-semibold'>Eğitimler</h6>
                                </div>
                            </div>
                            <div className='py-10 bg-[#F9F9F9]'>
                                <div className='mx-auto lg:max-w-7xl md:px-8'>
                                    <div className="flex items-center mb-4">
                                        <input id="onlineEgitim" type="checkbox" className="w-4 h-4 accent-black" />
                                        <label htmlFor="onlineEgitim" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online Eğitim</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="satisIsleme" type="checkbox" className="w-4 h-4 accent-black" />
                                        <label htmlFor="satisIsleme" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Satış İşleme Merkezi Eğitimi</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="satisTorna" type="checkbox" className="w-4 h-4 accent-black" />
                                        <label htmlFor="satisTorna" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Satış Torna Eğitimi</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Educations