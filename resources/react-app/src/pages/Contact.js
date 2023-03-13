import React from 'react'
import Banner from '../assets/images/contact/Contact-Banner.png'
import { useFormik } from 'formik'
import { Helmet } from 'react-helmet'
import * as Yup from 'yup'
import { ImLocation2, ImPhone } from 'react-icons/im'
import { TfiEmail } from 'react-icons/tfi'

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstLastName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstLastName: Yup.string().min(2).required('Zorunlu alan'),
      email: Yup.string().min(2).email().required('Zorunlu alan'),
      message: Yup.string(5).required('Zorunlu alan'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <>
      <Helmet>
        <title>İletişim</title>
      </Helmet>
      <div className="">
        <div className="w-full relative flex justify-center items-center">
          <img className="w-full" src={Banner} alt="İletişim" />
          <p className="absolute text-white text-5xl font-bold max-sm:text-2xl">
            İLETİŞİM
          </p>
        </div>
        <div className="container mx-auto flex justify-center items-center relative top-[-100px] max-xl:top-[-50px] max-lg:top-[-10px] max-sm:top-0 max-md:flex-col">
          <div className="flex justify-center items-center flex-col bg-[#D73636] w-[487px] h-[510px] max-sm:w-full">
            <div className="flex justify-center items-center flex-col w-5/12 text-center text-white m-3">
              <ImLocation2 className="text-4xl" />
              <p className="text-sm font-semibold m-2">Adres</p>
              <a href="#map" className="text-sm font-normal m-1 p-1">
                Yukarı Dudullu, Hünkar Sk. No: 4, 34776 Ümraniye/İstanbul,
                Türkiye
              </a>
            </div>
            <div className="flex justify-center items-center flex-col w-5/12 text-center text-white m-3">
              <ImPhone className="text-3xl" />
              <p className="text-sm font-semibold m-2">Telefon</p>
              <a href="tel:216-471-4620" className="text-sm font-normal m-1">
                0 (216) 471 46 20
              </a>
            </div>
            <div className="flex justify-center items-center flex-col w-5/12 text-center text-white m-3">
              <TfiEmail className="text-3xl" />
              <p className="text-sm font-semibold m-2">E-mail</p>
              <a
                href="mailto:info@gncakademi.com"
                className="text-sm font-normal m-1"
              >
                info@gncakademi.com
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-[#FAFAFA] w-[736px] h-[451px] shadow-md shadow-[#00000025] max-sm:w-full max-sm:mt-12">
            <div className="w-5/6 flex justify-start">
              <p className="text-sm text-[#0E0000] font-normal text m-2">
                Soru ve önerileriniz için aşağıdaki bilgi formunu
                kullanabilirsiniz.
              </p>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-center items-center flex-col w-full"
            >
              <input
                className={
                  formik.touched.firstLastName && formik.errors.firstLastName
                    ? 'w-5/6 h-10 bg-[#F2F1F1] rounded-3xl px-10 m-2 border-2 border-red-500'
                    : 'w-5/6 h-10 bg-[#F2F1F1] rounded-3xl px-10 m-2'
                }
                id="firstLastName"
                name="firstLastName"
                type="text"
                placeholder="Ad/Soyad:"
                onChange={formik.handleChange}
                value={formik.values.firstLastName}
              />
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? 'w-5/6 h-10 bg-[#F2F1F1] rounded-3xl px-10 m-2 border-2 border-red-500'
                    : 'w-5/6 h-10 bg-[#F2F1F1] rounded-3xl px-10 m-2'
                }
                id="email"
                name="email"
                type="email"
                placeholder="E-mail:"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <textarea
                className={
                  formik.touched.message && formik.errors.message
                    ? 'resize-none w-5/6  h-44 bg-[#F2F1F1] rounded-3xl p-10 m-2 border-2 border-red-500'
                    : 'resize-none w-5/6  h-44 bg-[#F2F1F1] rounded-3xl p-10 m-2'
                }
                id="message"
                name="message"
                type="textarea"
                placeholder="Mesaj:"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <div className="w-5/6 flex justify-end">
                <button
                  className="w-36 h-10 bg-[#F2F1F1] rounded-3xl text-slate-500 text-base font-semibold"
                  type="submit"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-96">
          <iframe
            id="map"
            title="Google Maps"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0395070124982!2d29.153443451525124!3d41.002508479199655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf3dfc24c703%3A0x28f6192b6abb7846!2sGNC%20CNC%20Makina%20Teknolojileri%20Anonim%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1678188741167!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  )
}

export default Contact
