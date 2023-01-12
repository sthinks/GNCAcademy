import React, { useRef, useState } from 'react'
import Modal from 'react-modal';
import Close from "../images/close.png";
import Success from "../images/success.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "#E02228",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "50px"
    },
};

const CustomForm = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [showPhone, setShowPhone] = useState(false)

    const ref = useRef();
    const phoneRegExp = /^(05)([0-9]{2})s?([0-9]{3})s?([0-9]{2})s?([0-9]{2})$/

    const [values, setValues] = useState({
        name: '',
        lastname: '',
        address: '',
        phone_number: '',
        email: '',
        school: '',
        school_major: '',
        company: '',
        department: '',
        job: '',
        job_title: '',
        wantcnc: '',
        havecnc: '',
        havecnc_description: '',
        usecnc: '',
        isknow_sawdust_machining_information: '',
        isknow_sawdust_machining_information_description: '',
        material_information: '',
        gauge_information: '',
        maintenance_information: '',
        take_educations: '',
        kvkk: '',
        want_educations: '',
        education_time: ''
    })

    const navigate = useNavigate();

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

    const handleClick = async (e) => {
        e.preventDefault();
        values.havecnc = (values.havecnc === "true");
        values.isknow_sawdust_machining_information = (values.isknow_sawdust_machining_information === "true");
        values.usecnc = (values.usecnc === "true");
        values.kvkk = ref.current.checked

        if (values.phone_number.match(phoneRegExp)) {
            try {
                await axios.post("api/form", values)
                    .then(function (response) {
                        openModal();
                        setTimeout(() => {
                            navigate('/basarili', {
                                state:
                                {
                                    name: values.name,
                                    surname: values.lastname
                                }
                            });
                        }, 3000)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
            }
        } else {
            setShowPhone(true)
        }
    }

    const handleChange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='mt-8'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img onClick={closeModal} src={Close} className="right-0 top-0 absolute" />
                <span className="font-[400] text-[24px] text-white">GNC</span>
                <span className="font-[400] text-[22px] text-white">{values.name} {values.lastname} ;</span>
                <img src={Success} className="mt-2" />
                <p className='mt-2'>
                    <span className='font-[700] text-[18px] text-white block text-center'>Başvuru</span>
                    <span className='font-[700] text-[18px] text-white block text-center'>talebiniz tarafımıza ulaşmıştır.</span>
                </p>
                <p className='mt-3'>
                    <span className='font-[500] text-[11px] text-white block text-center'>
                        Öncelikle göstermiş olduğunuz ilgi ve paylaştığınız
                    </span>
                    <span className='font-[500] text-[11px] text-white block text-center'>
                        detaylar için teşekkür ederiz.
                    </span>
                </p>
                <p className='mt-3'>
                    <span className='font-[500] text-[11px] text-white block text-center'>
                        Danışmanlarımız en kısa sürede uygun eğitim programları ile
                    </span>
                    <span className='font-[500] text-[11px] text-white block text-center'>
                        ilgili görüşmek üzere size dönüş sağlayacaktır.
                    </span>
                </p>
                <span className='font-[500] text-[11px] text-white'>
                    İyi günler dileriz.
                </span>
            </Modal>

            <form onSubmit={handleClick} className='flex flex-wrap flex-row justify-between'>
                <div className='flex flex-col mb-3 w-[45%] max-sm:w-full'>
                    <label htmlFor="name" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Ad *</label>
                    <input type="text" onChange={handleChange} required name="name" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col mb-3 w-[45%] max-sm:w-full'>
                    <label htmlFor="lastname" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Soyad *</label>
                    <input type="text" onChange={handleChange} required name="lastname" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="address" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Adres</label>
                    <input type="text" onChange={handleChange} name="address" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col mb-3 w-[45%] max-sm:w-full'>
                    <label htmlFor="phone_number" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Numaranız *</label>
                    <input type="text" placeholder='0 (530 000-00-00)' onChange={handleChange} required name="phone_number" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                    {showPhone === true ? <p className='text-red-500 font-bold'>Lütfen Telefon Numaranızı istenilen formatta giriniz.</p> : null}
                </div>
                <div className='flex flex-col mb-3 w-[45%] max-sm:w-full'>
                    <label htmlFor="email" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>E-mail *</label>
                    <input type="email" onChange={handleChange} required name="email" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="school" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Mezun Olduğu Okul: *</label>
                    <input type="text" onChange={handleChange} required name="school" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="school_major" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Mezun Olduğu Bölüm *</label>
                    <input type="text" onChange={handleChange} name="school_major" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="company" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Çalıştığı Firma: *</label>
                    <input type="text" onChange={handleChange} required name="company" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="department" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Departman</label>
                    <input type="text" onChange={handleChange} name="department" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="job" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Yaptığı İş: *</label>
                    <input type="text" onChange={handleChange} required name="job" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="job_title" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Ünvan</label>
                    <input type="text" onChange={handleChange} name="job_title" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="wantcnc" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Öğrenmek İstediği CNC Makinesi: *</label>
                    <input type="text" onChange={handleChange} required name="wantcnc" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="havecnc" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Mevcutta CNC Makinesi Var Mı?: *</label>
                    <select required
                        onChange={handleChange}
                        name="havecnc" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" >
                        <option value="" selected disabled hidden>Seçiniz</option>
                        <option value={true}>Var</option>
                        <option value={false}>Yok</option>
                    </select>
                    <textarea onChange={handleChange}
                        placeholder="Açıklama:" name="havecnc_description" rows="4" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black mt-3"></textarea>
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="usecnc" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Hiç CNC Makinesi Kullandı Mı?: *</label>
                    <select required onChange={handleChange}
                        name="usecnc" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" >
                        <option value="" selected disabled hidden>Seçiniz</option>
                        <option value={true}>Evet</option>
                        <option value={false}>Hayır</option>
                    </select>
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="isknow_sawdust_machining_information" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Talaşlı İmalat Bilgisi Var Mı?: *</label>
                    <select required
                        onChange={handleChange}
                        name="isknow_sawdust_machining_information"
                        className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black"
                    >
                        <option value="" selected disabled hidden>Seçiniz</option>
                        <option value={true}>Evet</option>
                        <option value={false}>Hayır</option>
                    </select>
                    <textarea onChange={handleChange}
                        placeholder="Açıklama:" name="isknow_sawdust_machining_information_description" rows="4" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black mt-3"></textarea>
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="material_information" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Malzeme Bilgisi: *</label>
                    <input type="text" required onChange={handleChange} name="material_information" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="gauge_information" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Ölçme Aleti Bilgisi: *</label>
                    <input type="text" required onChange={handleChange} name="gauge_information" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="maintenance_information" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Bakım Bilgisi: *</label>
                    <input type="text" required onChange={handleChange} name="maintenance_information" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="take_educations" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Almış Olduğu Eğitimler: *</label>
                    <input type="text" required onChange={handleChange} name="take_educations" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="want_educations" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Almak İstediği Eğitimler: *</label>
                    <input type="text" required onChange={handleChange} name="want_educations" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex flex-col w-[100%] mb-3'>
                    <label htmlFor="education_time" className='text-[16px] font-[500] leading-[23px] pl-5 py-1'>Talep Edilen Eğitim Tarihi *</label>
                    <input type="date" required onChange={handleChange} name="education_time" className="bg-[#F7F7F7] outline-none rounded-[30px] pl-5 py-2 text-black" />
                </div>
                <div className='flex w-[100%] pl-5 py-2 justify-between'>
                    <div className='flex items-center'>
                        <input ref={ref} required onChange={handleChange} type="checkbox"
                            name="kvkk" className="inline-block h-5 w-5" />
                        <label htmlFor='toggle' className='text-[12px] font-[500] ml-2'>
                            KVKK kapsamında bilgilerimin işlenmesine,
                            onay veriyorum.
                        </label>
                    </div>
                    <button type="submit" className='bg-[#555955] rounded-[50px] py-2 px-7 float-right text-white font-[500]'>Gönder</button>
                </div>
            </form>
        </div>

    )
}

export default CustomForm