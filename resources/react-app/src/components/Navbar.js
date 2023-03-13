import React, { useEffect, useState } from 'react';
import Logo from "../assets/images/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';

const Navbar = () => {
    let subtitle;
    const [navbar, setNavbar] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [searched, setSearched] = useState()

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '300px'
        },
    };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`, {
            params: {
                _limit: 10
            }
        })
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const filteredData = () => {
        const filteredItem = data.filter((item) => {
            return item.title.toLowerCase().includes(value.toLocaleLowerCase()) ||
                (value === "" || item.title === value)
        })
        setSearched(filteredItem)
    }
    useEffect(() => {
        filteredData()
    }, [value])

    console.log(searched)

    return (
        <>
            <nav className="w-full shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to='/'>
                                <img src={Logo} width="120" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border bg-black"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="font-semibold">
                                    <Link to="/">Ana Sayfa</Link>
                                </li>
                                <li>
                                    <Link to="/hakkimizda">Hakkımızda</Link>
                                </li>
                                <li>
                                    <Link to="/egitimlerimiz">Eğitimlerimiz</Link>
                                </li>
                                <li>
                                    <Link to="/iletisim">İletişim</Link>
                                </li>
                            </ul>
                            <div className="mt-8 lg:hidden">
                                <Link
                                    to="/"
                                    className="inline-block w-full text-[#D73636] font-bold"
                                >
                                    Online Eğitim Portalı
                                </Link>
                                <div className='max-lg:flex max-lg:items-center mt-8'>
                                    <BiSearchAlt2 className='text-3xl mr-5' />
                                    <FaUser className='text-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:flex items-center">
                        <Link to="/"
                            className="inline-block w-full text-center text-[#D73636] font-bold"
                        >
                            Online Eğitim Portalı
                        </Link>
                        <BiSearchAlt2 className='text-3xl cursor-pointer' onClick={openModal} />
                        <FaUser className='text-xl cursor-pointer' />
                    </div>
                </div>
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <form>
                    <div className='relative flex items-center'>
                        <input className="border-2 w-full py-2 pl-3 focus:outline-none" placeholder='Ara...' value={value} onChange={(e) => setValue(e.target.value)} />
                        <BiSearchAlt2 className='text-3xl cursor-pointer absolute right-2' />
                    </div>
                </form>
                <div className='py-5'>
                    <ul>
                        {searched?.slice(0, 5).map((item) => (
                            <li className='cursor-pointer'>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </Modal>
        </>

    )
}

export default Navbar