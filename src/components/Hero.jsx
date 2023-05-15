import styles from '../style';
import { work1 } from '../assets'
import Button from '../components/Button';
import { homeNumber } from '../constants';
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () =>{
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // nama acara yang dikirim pada dokumen, yang harus diinisialisasi oleh AOS
        initClassName: 'aos-init', // kelas diterapkan setelah inisialisasi
        animatedClassName: 'aos-animate', // kelas diterapkan pada animasi
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (dalam px) dari titik pemicu asli
        delay: 0, // nilai dari 0 hingga 3000, dengan langkah 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // easing default untuk animasi AOS
        once: true, // apakah animasi harus terjadi hanya sekali - sambil menggulir ke bawah
        mirror: false, // apakah elemen harus dianimasikan saat menggulir melewatinya
        anchorPlacement: 'top-bottom', // menentukan posisi elemen mana yang terkait dengan jendela yang harus memicu animasi
      });

    return(
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} text-white relative  `}>
        {/* Left */}
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-right">
            {/* Online Coach */}
            <h1 className='font-poppins font-semibold ss:text-[120px] text-[62px] ss:leading-[180px] leading-[80px]'>ONLINE <br className='sm:block hidden'/>
            Choach <br className='sm:block hidden'/>
            Solution</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-8`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem quia mollitia ex ut explicabo obcaecati eaque provident temporibus. Est!
            </p>
        </div>

        {/* Right */}
        <div className={`flex flex-1 flex-row md:my-0 mt-40 pb-6 bg-[#343535] font-poppins rounded-xl relative`} data-aos="fade-left" data-aos-delay="300">
            {/* Image Work */}
            <span className=' bg-secondary p-10 rounded-full absolute z-[99] tranlsate-x-1/2 left-1/2 -top-10 hidden'></span>

            <div className={`${styles.flexStart} flex flex-col flex-1`}>
                <img src={work1} alt="work1" className='w-full h-full sm:relative sm:bottom-10 sm:right-10 z-[5]'/>
                <div className='sm:flex sm:justify-between sm:items-center flex-col sm:flex-row  mt-10 px-3 sm:w-full'>
                    <p className={`${styles.paragraph} text-white text-[15px] mx-w-[20px]`}>Check out our 12 reviews on Trustpilot</p>

                    <Button/>
                </div>
            </div>

            {/* Number */}
            <div className={``}>
                {homeNumber.map((homenumber) => (
                    <div key={homenumber.id} className={`flex- flex justify-start items-start flex-col m-3 mx-auto mt-10 pl-5 sm:mb-20 `}>
                        <h4 className='text-white text-4xl font-semibold sm:text-[40px] sm:font-bold'>{homenumber.value}</h4>
                        <p className='text-xl text-slate-200 mt-2 sm:text-[20px] sm:mt-4 '>{homenumber.text}</p>

                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Hero