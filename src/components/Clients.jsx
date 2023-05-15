import styles from '../style'
import { work3, work4, work5, line1 } from '../assets'
import 'aos/dist/aos.css'

const Clients = () =>(
    <section id='clients' className={`${styles.paddingY} text-white flex flex-col font-poppins my-20 md:mt-10 z-[9] relative`}>
      {/* Top[text] */}

      <span className='px-[25rem] py-[20rem] bg-slate-500 md:absolute right-0 z-[-1] hidden md:inline-block opacity-30' data-aos="fade-down" data-aos-delay="300"></span>
      <div className='flex flex-col md:flex-row w-full justify-between md:mb-20'>
        <h1 className='my-10 md:my-0 text-7xl font-bold leading-[80px] flex-1 md:text-[80px] md:leading-[100px] max-w-full relative' data-aos="fade-right">Author of this guide: Zacharias Wedel
        <span><img src={line1} alt="line1" className='absolute -bottom-9 right-10 z-[-1]' /></span>
        </h1>
        <div className='flex-1 md:max-w-[500px] mt-10' data-aos="fade-left" data-aos-delay="400">
          <p className='mb-10 md:max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur voluptates, quo itaque nobis placeat nihil omnis neque quis asperiores saepe, cum labore vel expedita laborum, atque odio! Impedit, accusamus.</p>
          <button className='bg-secondary py-5 px-16 rounded-xl text-center text-primary font-bold hover:opacity-50'>About me</button>
        </div>
      </div>
      {/* Bottom[Image] */}
      <div className={`${styles.paddingY} md:flex md:flex-row`}>
          {/* 2 Gambar */}
          <div className='object-contain grid grid-cols-2 md:flex-1 mt-20' >
            <div className='mb-10 w-full' data-aos="fade-down" data-aos-delay="700">
              <img src={work3} alt="work3" className='objcet-contain w-full sm:w-full object-cover'/>
              <p className='text-white text-[20px]'>Training Athletes <br />
                <span className='text-slate-500 text-[15px]'>Zacharia Wedel</span>
              </p>
            </div>

            <div></div>
            <div></div>

            <div className='mb-10 relative bottom-[40px]' data-aos="fade-up" data-aos-delay="600">
              <img src={work4} alt="work4" className=' w-full object-cover'/>
              <p className='text-white text-[20px]'>Lauf Coaching <br />
                <span className='text-slate-500 text-[15px]'>Zachrias Wedel</span>
              </p>
            </div>
            
          </div>
          {/* 1 Gambar */}
          <div className='mt-5 md:flex-1 md:relative md:bottom-[130px]' data-aos="fade-left" data-aos-delay="500"> 
            <img src={work5} alt="work5" className='md:w-[90%] w-full '/>
            <p className='text-white text-[20px]'>GYM <br />
                <span className='text-slate-500 text-[15px]'>Zachrias Wedel</span>
              </p>
          </div>
      </div>
    </section>
  )

export default Clients