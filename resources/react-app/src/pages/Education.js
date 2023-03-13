import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import BannerImage from '../assets/images/egitim-banner.png';

const Education = () => {
    return (
        <>
            <Helmet>
                <title>Detay</title>
            </Helmet>
            <Banner title="EĞİTİMLERİMİZ" />
            <div className='bg-[#F4F4F4] py-20 mt-10 mb-10'>
                <div className='mx-auto lg:max-w-7xl md:px-8'>
                    <div className='flex'>
                        <div className='flex-1'>
                            <div>
                                <h1 className='font-bold text-[#4D4E50]'>Satış İşleme <br /> Merkezi Eğitimi</h1>
                            </div>
                        </div>
                        <div className='flex-[2_2_0]'>
                            <div>
                                <p>
                                    Talaşlı imalat yöntemleri, ölçme kontrol ve malzeme bilgisini aktararak, katılımcıları hızla CNC teknolojisi ile tanıştırmaktır.
                                    Katılımcılar teknik resim hakkında bilgi edinerek ölçme ve kontrol aletlerini okuyup kullanabilecek, İşleme Merkezine parça
                                    bağlayabilecek, tezgâha ait kesicileri ve aparatları tanıyacak, CNC dik işlem tezgahında sıfır noktasını bularak start verebilecek
                                    aynı zamanda G ve M kodları ile makineyi programlayabileceklerdir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto lg:max-w-7xl md:px-8 mb-10'>
                <div className='flex'>
                    <div className='flex-[2_2_0] text-center'>
                        <div>
                            <img src={BannerImage} className="w-full h-auto" />
                            <div className='flex justify-between items-center py-5 bg-[#F4F4F4] px-10'>
                                <p className='text-[#676767] font-semibold'>Eğitim Süresi</p>
                                <p className='text-[#676767] font-semibold'>4 Hafta</p>
                            </div>
                        </div>
                        <div className='bg-[#D73636] inline-block py-1 w-full text-white rounded-full font-semibold mt-6 text-left px-10'>Eğitim İçeriği</div>
                        <div className='mt-5'>
                            <div className='bg-[#4D4E50] text-center py-3'>
                                <h3 className='text-white font-semibold'>CNC İLEME MERKEZİ 4. SEİYE OPERATÖR EĞİTİM İÇERİĞİ</h3>
                            </div>
                            <div className='bg-[#D9D9D9] text-center py-2'>
                                <h5 className='text-[#3D4543] font-semibold'>1. Hafta Sonu Eğitimi</h5>
                            </div>
                            <div className='bg-[#FAFAFA] px-10 py-5'>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='bg-[#D73636] inline-block py-1 text-white rounded-full font-semibold text-left px-10'>
                                            1.Gün Eğitim Programı
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center mt-3'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-[#4D4E50] py-2 shadow-sm text-center'>
                                            <h6 className='text-white'>Öğle Arası</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='bg-[#D73636] inline-block py-1 text-white rounded-full font-semibold text-left px-10'>
                                            1.Gün Eğitim Programı
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center mt-3'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-[#4D4E50] py-2 shadow-sm text-center'>
                                            <h6 className='text-white'>Öğle Arası</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center mt-3'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#D9D9D9] text-center py-2'>
                                <h5 className='text-[#3D4543] font-semibold'>1. Hafta Sonu Eğitimi</h5>
                            </div>
                            <div className='bg-[#FAFAFA] px-10 py-5'>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='bg-[#D73636] inline-block py-1 text-white rounded-full font-semibold text-left px-10'>
                                            1.Gün Eğitim Programı
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center mt-3'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-[#4D4E50] py-2 shadow-sm text-center'>
                                            <h6 className='text-white'>Öğle Arası</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='bg-[#D73636] inline-block py-1 text-white rounded-full font-semibold text-left px-10'>
                                            1.Gün Eğitim Programı
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center mt-3'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-[#4D4E50] py-2 shadow-sm text-center'>
                                            <h6 className='text-white'>Öğle Arası</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center mt-3'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                        <div className='bg-white py-2 shadow-sm text-center'>
                                            <h6 className='text-[#676767]'>Teknik Resim Okuma</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#4D4E50] inline-block py-1 text-white rounded-full mt-6 text-left px-10'>Tüm Ders Programını Görüntüle</div>
                        <div className='bg-[#D73636] inline-block py-1 w-full text-white rounded-full font-semibold mt-6 text-left px-10'>Yöntem</div>
                        <div className='bg-[#F9F9F9] px-10 py-5 mt-3'>
                            <p>Teorik konu anlatımı, Makine başı pratik uygulama, ödev takip, ilk ve son test sınav uygulamaları ve raporlama.</p>
                        </div>
                        <div className='bg-[#D73636] inline-block py-1 w-full text-white rounded-full font-semibold mt-6 text-left px-10'>Kazanılacak Yetkinlikler</div>
                        <div className='bg-[#F9F9F9] px-10 py-5 mt-3 text-left'>
                            <p>
                                1.CNC freze tezgahlarının açılmasını, iş parçasını ve kesicileri bağlamayı, tezgâh ve iş parçası sıfır
                                noktalarını ayarlamayı, parçadan elle talaş almayı yapabilecektir.
                            </p>
                            <p>2.CNC freze tezgahlarının kontrol panelini kullanarak program yükler ve yüklü programı çalıştırır.</p>
                            <p>3.CNC freze takımlarını operasyona uygun olarak bağlayabilecektir.</p>
                        </div>
                    </div>
                    <div className='flex-1 ml-10'>
                        <div>
                            <div className='bg-[#4D4E50] py-2'>
                                <div className='mx-auto lg:max-w-7xl md:px-8'>
                                    <h6 className='text-white font-semibold'>Eğitim Ücreti</h6>
                                </div>
                            </div>
                            <div className='bg-[#F9F9F9] flex justify-center items-center flex-col py-10'>
                                <h6 className='text-[#676767] font-semibold'>1700 TL + KDV (%18)</h6>
                                <div className='bg-[#D73636] inline-block py-1 px-5 text-white rounded-full font-semibold mt-3'>Bilgi Al</div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='bg-[#4D4E50] py-2'>
                                <div className='mx-auto lg:max-w-7xl md:px-8'>
                                    <h6 className='text-white font-semibold'>Eğitim Detayları</h6>
                                </div>
                            </div>
                            <div className='bg-[#F9F9F9]'>
                                <div className='mx-auto lg:max-w-7xl md:px-8 py-5'>
                                    <p className='mt-3 text-[#676767] font-semibold'>Tarih:</p>
                                    <p className='mt-3 text-[#676767] font-semibold'>Eğitim Süresi:</p>
                                    <p className='mt-3 text-[#676767] font-semibold'>Saat:</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className='bg-[#4D4E50] py-2'>
                                <div className='mx-auto lg:max-w-7xl md:px-8'>
                                    <h6 className='text-white font-semibold'>Eğitmenler</h6>
                                </div>
                            </div>
                            <div className='bg-[#F9F9F9]'>
                                <div className='mx-auto lg:max-w-7xl md:px-8 py-5'>
                                    <div>
                                        <div className='flex items-center'>
                                            <div className='bg-[#D9D9D9] rounded-full w-10 h-10' />
                                            <h5 className='text-[#676767] font-semibold ml-6'>Ahmet YILMAZ</h5>
                                        </div>
                                        <div className='flex items-center mt-5'>
                                            <div className='bg-[#D9D9D9] rounded-full w-10 h-10' />
                                            <h5 className='text-[#676767] font-semibold ml-6'>Ahmet YILMAZ</h5>
                                        </div>
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

export default Education