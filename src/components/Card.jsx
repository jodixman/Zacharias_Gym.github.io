import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';

import { quotes } from '../assets'
import { feedbackGym } from "../constants"

const Card = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar,Virtual]} 
      spaceBetween={50} 
      slidesPerView={3} 
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='pb-20'
    >
      {feedbackGym.map((card,index) =>(
        <SwiperSlide key={card.id}>
        <div className='flex flex-col flex-wrap justify-between mt-20 px-2 max-w-[370px] font-poppins'>
            {/* Top[Text] */}
            <p className='text-[15px] border-l-2 border-secondary pl-4'>{card.content}</p>
            {/* Bottom [Profil] */}
            <div className='flex flex-row justify-center flex-wrap gap-4 mt-5  border-t-2 border-gray-500 items-center pt-10'>

                <div className='flex-1 flex flex-row gap-2 justify-start items-center  pl-4 '>
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
  )
}

export default Card
