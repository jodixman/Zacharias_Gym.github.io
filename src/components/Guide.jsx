import { work6 } from '../assets'
import styles from '../style'
import 'aos/dist/aos.css'

const Guide = () =>(
    <section id='guide' className='mb-20 flex-col  font-poppins' data-aos="zoom-in-up" data-aos-duration="1000">
        {/* Background */}
        <div className='sm:py-30 md:py-20 py-20 bg-center w-full bg-white bg-local bg-no-repeat bg-cover relative' style={{backgroundImage: "url('https://i.pinimg.com/564x/16/6d/b0/166db0245f209f82009b9b87dbdecf8d.jpg')"}}>
            <span className='p-20 bg-secondary absolute -right-0 top-0 rounded-t-none rounded-l-full rounded-b-full rounded-r-none opacity-50'></span>
        </div>

        {/* Text */}
        <div className='flex-1 flex flex-col md:flex-row text-white bg-[#232223] pb-10'>
            {/* Guide Text */}
            <div className='flex-1 mt-10'>
                <h1 className='mb-5 text-5xl leading-15 font-semibold'>Your guide to <br className='sm:block hidden'/> maximun 
                <span className='text-secondary'> success!</span> </h1>
                <p className='leading-7 mt-10 text-slate-600'>
                    Why we always to make popple? <br/>
                    What is your name? <br/>
                    Where we always to find you?<br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et fuga necessitatibus quod?
                </p>
            </div>
            
        <div className='flex justify-center items-center'>
            <a href='#' className='rounded-full bg-secondary inline-block px-[30px] py-[102px] text-black font-bold text-center cursor-pointer mt-10 hover:opacity-50 md:mr-20'>
                    <h2 className='text-2xl'>I WANT TO KNOW!</h2>
                    <p className='text-4xl'>↗</p>
                </a>
        </div>

            {/* Circle */}
        </div>


    </section>
)


export default Guide