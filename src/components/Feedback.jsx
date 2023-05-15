import styles  from "../style"

import Card from "./Card"


import { Navigation, Pagination, Scrollbar, A11y, Virtual, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';

import { quotes } from '../assets'
import { feedbackGym } from "../constants"


const Feedback = () =>(
    <section className='flex flex-col flex-wrap text-white relative'>
        {/*------ Top[Text] -----*/}
        <div className="flex md:flex-row flex-col justify-center w-full">
            {/* left[Text] */}
            <div className="flex-1 flex flex-col leading-10">
                <p className="text-[20px] text-slate-600">TESTIMONIALS</p>
                <h1 className="text-2xl font-semibold">Feedback From Out Clients</h1>
            </div>
            {/* right[Arrow] */}
            <div className="flex flex-2 flex-row  justify-center items-center gap-5 mt-10 md:mt-0 ">

            </div>
        </div>

        {/*----- Bottom[Card] ------*/}
        <div className="text-white w-full cursor-pointer text-center">
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, Virtual, Autoplay]} 
            spaceBetween={60} 
            slidesPerView={1} 
            navigation
            loop
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{delay:3000,disableOnInteraction: false}}
            breakpoints={{
                620: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 2,
                },
              }}
            className='text-center static'
        >
            <SliderButtons />
        {feedbackGym.map((card,index) =>(
            <SwiperSlide key={card.id}>
            <div className='flex flex-col flex-wrap justify-between mt-10 px-2 w-full font-poppins cursor-pointer'>
                {/* Top[Text] */}
                <p className='text-[15px] border-l-2 border-secondary pl-4'>{card.content}</p>
                {/* Bottom [Profil] */}
                <div className='flex flex-row justify-center flex-wrap gap-4 mt-5  border-t-2 border-gray-500 items-center pt-10'>

                    <div className='flex-1 flex flex-row gap-2 justify-start items-center pl-4 '>
                        <img src={card.img} alt="huma1" className='w-[30%] rounded-full '/>

                        <div className='text-white '>
                            <h1 className='text-xl '>{card.name}</h1>
                            <p className='text-secondary'>{card.title}</p>
                        </div>
                    </div>      

                    <img src={quotes} alt="quotes" className='flex-1/2 '/>
                </div>

            </div>
            
            </SwiperSlide>
        ))}
        
    </Swiper>
        </div>
    </section>
)


export default Feedback

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="flex flex-wrap gap-5 absolute top-[74px] right-[85px] -translate-x-1/2 xs:top-4 z-[99] xs:right-0 xs:-translate-x-0">
            <button onClick={()=> swiper.slidePrev()} className="py-1 px-4 rounded-full bg-slate-500">{'<'}</button>
            <button onClick={()=> swiper.slideNext()} className="py-2 px-4 rounded-full bg-slate-500">{'>'}</button>
        </div>
    )
}

