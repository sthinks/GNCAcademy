import React from 'react'
import { Helmet } from 'react-helmet'
import GncMakina from '../assets/images/aboutus/GncMakina.png'
import Misyon from '../assets/images/aboutus/Misyon.png'
import Birlik from '../assets/images/aboutus/İş Birliği.png'
import Yenilik from '../assets/images/aboutus/Yenilikçi.png'
import Odak from '../assets/images/aboutus/Odak.png'
import Analitik from '../assets/images/aboutus/Analitik.png'
import İlham from '../assets/images/aboutus/İlham.png'
import Gelişim from '../assets/images/aboutus/Gelişim.png'

const AboutUs = () => {
  const misyon = [
    {
      img: Birlik,
      text: 'İş Birliği Oluşturmaya İnanırız',
    },
    {
      img: Yenilik,
      text: 'Yenilikçi Düşünceyi Sahipleniriz',
    },
    {
      img: Odak,
      text: 'Çözüm Odaklıyız',
    },
    {
      img: Analitik,
      text: 'Analitik Düşünceyi Benimseriz',
    },
    {
      img: İlham,
      text: 'İlham Veririz',
    },
    {
      img: Gelişim,
      text: 'Sürekli Gelişime İnanırız',
    },
  ]
  return (
    <>
      <Helmet>
        <title>Hakkımızda</title>
      </Helmet>
      <div>
        <div className="w-full h-auto flex justify-center items-center max-lg:flex-col">
          <div className="w-full flex-1 relative flex justify-center items-center">
            <img className="w-full" src={GncMakina} alt="Hakkımızda" />
            <p className="absolute text-white text-5xl font-bold">Hakkımızda</p>
          </div>
          <div className="w-full flex-1 max-lg:mt-10">
            <p className="px-16 text-center text-xl font-light text-[#4D4E50] max-md:px-3">
              GNC Akademi talaşlı imalat sektörünün ihtiyacına yönelik Nitelikli
              CNC Operatörlerini yetiştirmek için kurulmuştur. Sektörü
              desteklemek, üretime katkı sağlayan firmaların verimini artırmak
              ve bu alanda istihdamı artırmak temel amaçlarındandır.
            </p>
            <p className="px-16 text-center text-xl font-light text-[#4D4E50] my-4 max-md:px-3">
              GNC Akademi, operatörlerin niteliklerini ve niceliklerini artırmak
              adına kuruma, kişiye ve ihtiyaca yönelik detaylı eğitim içerikleri
              sağlamaktadır.
            </p>
            <p className="px-16 text-center text-xl font-light text-[#4D4E50] max-md:px-3">
              Hazırlanan zengin içerikli bu eğitimlerle GNC Akademi; mesleğinde
              usta eğitmen kadrosu ve geniş makine portföyü ile sektörün en
              kaliteli eğitim akademisidir.
            </p>
          </div>
        </div>
        <div className="w-full h-20 my-20 max-sm:my-32">
          <div className="flex justify-center items-center flex-col">
            <p className="text-5xl font-bold text-[#676767] my-2">Vizyon</p>
            <p className="text-xl font-light my-2 text-[#4D4E50] text-center max-sm:w-4/5">
              Sektöründe nitelikli işgücü standartlarını belirleyen en prestijli
              akademi olmak.
            </p>
          </div>
        </div>
        <div className="w-full relative flex justify-center items-center">
          <img
            className="w-full max-lg:h-96 max-lg:object-cover"
            src={Misyon}
            alt="Misyon"
          />
          <div className="flex justify-center items-center flex-col absolute w-3/5 max-sm:w-4/5">
            <p className="text-5xl font-bold text-white my-2 ">Misyon</p>
            <p className="text-xl font-light my-2 text-white text-center">
              Meslek algısını yükselterek, sektöründe istihdam ihtiyacı olan
              rollerin niteliğini, değer katan süreç tasarımı ve oluşturduğu
              stratejik iş birliktelikleri ile geliştirmek.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-28">
          <div className="flex justify-center items-center flex-col">
            <p className="text-5xl font-bold text-[#676767] my-2">
              Değerlerimiz
            </p>
            <div className="my-12 grid grid-cols-3 max-sm:grid-cols-2 gap-32 max-sm:gap-0">
              {misyon.map((item, i) => (
                <div
                  className="flex justify-center items-center flex-col"
                  key={i}
                >
                  <img src={item.img} alt="Birlik" />
                  <p className="text-xl font-light text-[#3D4543] text-center max-sm:p-5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-20">
          <div className="flex justify-center items-center flex-col w-4/5">
            <p className="text-5xl font-bold text-[#676767] my-2">KVKK</p>
            <p className="mt-16 my-8 left w-full text-xl font-medium text-[#4D4E50]">
              KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN KURUMSAL GENEL AYDINLATMA
              METNİ
            </p>
            <p className="left  font-light text-[#3D4543] text-base">
              Gnc Cnc Makina Teknolojileri Anonim Şirketi (“Gnc Makina”) olarak;
              6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili
              mevzuat ve yasal düzenlemelerden kaynaklanan faaliyetleri
              çerçevesinde kişisel verilerinizin işlenmesi, saklanması ve
              aktarılmasına ilişkin siz Ziyaretçilerimizi, Çevrimiçi
              Ziyaretçilerimizi, Müşterilerimizi, Potansiyel Müşterilerimizi,
              Tedarikçi Çalışanlarımızı, Tedarikçi Yetkililerimizi
              bilgilendirmek amacıyla işbu aydınlatma metnini hazırladık.
            </p>

            <div className="w-full font-light text-[#3D4543] text-base">
              <p>
                1) İşlediğimiz Kişisel Veri Kategorileriniz Nelerdir ve Bunları
                Hangi Amaçlarla İşliyoruz?
              </p>
              <p>
                Kişisel bilgileriniz Gnc Cnc Makina Teknolojileri Anonim Şirketi
                tarafından KVKK’nın 4.2. maddesinde öngörülen;
              </p>
              <p>(i) Hukuka ve dürüstlük kurallarına uygun olma,</p>
              <p>(ii) Doğru ve gerektiğinde güncel olma,</p>
              <p>(iii) Belirli, açık ve meşru amaçlar için işlenme,</p>
              <p>
                (iv) İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma,
              </p>
              <p>
                (v) İlgili mevzuatta öngörülen veya işlendikleri amaç için
                gerekli olan süre kadar muhafaza edilme,
              </p>
              <p>
                ilkelerine uygun olarak, iş ortaklarımızla kurduğumuz ve devam
                eden iş ilişkilerimiz kapsamında (bir kişinin birden çok
                kategoriye girmesi mümkündür) aşağıda belirtilen amaçlar
                doğrultusunda işlenebilecektir.
              </p>
              <p>A. Ziyaretçilerimiz</p>
              <p>
                Ziyaretçilerimizin fiziksel mekan güvenliği bilgileri (ör.
                kamera kayıtları);
              </p>
              <p>
                a) fiziksel mekan güvenliğinin temini amacıyla işlenecektir.
              </p>
            </div>

            <button className="w-72 h-12 rounded-3xl bg-[#3D4543] text-white font-medium mt-32 mb-8">
              Devamını Göster
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center my-20">
          <div className="flex justify-center items-center flex-col w-4/5">
            <p className="text-5xl font-bold text-[#676767] my-2 max-md:text-4xl text-center">
              Kalite Politikalarımız
            </p>
            <p className="text-[2.5rem]  max-md:text-2xl text-[#676767] font-normal mt-14">
              <span className="text-[#D73636] font-bold ">GNC Akademi</span>{' '}
              olarak amacımız;
            </p>
            <p className="mt-4 text-lg font-light text-[#3D4543] text-center">
              Üretim teknolojilerinin dünyadaki gelişimini takip ederek, ülkemiz
              sanayisinin sürekli değişip gelişen ihtiyaçlarını önceden
              belirleyip, müşterilerimize kaliteli üretim, hız ve verimlilik
              sağlayacak ürün ve hizmetlerimizi en kısa sürede, en uygun
              maliyetlerle sektörün faydasına sunmak. Sürekli iyileştirdiğimiz
              iş süreçlerimiz ile müşterilerimize beklentilerinin üzerinde
              kalite ve çeşitlilikte ürün-hizmet sağlayarak kendi alanında
              yenilikçi ve lider olmak.En önemli sermayemizin çalışanlarımız
              olduğu ön kabulüyle, mutlu ve huzurlu bir çalışma ortamı
              sağlayarak, tüm personelin güven duyduğu bir işveren markası
              haline gelmek. Sürekli gelişime inanan yaklaşımımızla, her kademe
              için farklı gelişim planları hazırlayarak çalışanlarımızın
              kariyerlerinde önemli bir dönüm noktası olmak.Her biri sektörünün
              en iyileri olan tedarikçilerimiz ile güçlü işbirlikleri
              oluşturarak, tüm tarafların ve dolayısıyla Türk Üretim
              Sanayisi'nin gelişimine katkı sağlamak.İnovatif ve fark yaratan
              bakış açısıyla, tüm bu uygulamaların sürekliliğini, çalışanları,
              müşterileri ve tedarikçileri ile beraber gerçekleştiren GNC
              Makina, KYS’nin ISO 9001:2015 standartları ve gerekliliklerine
              uygun olarak gelişeceğini ve süreçlerini sürekli iyileştireceğini
              beyan eder.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
