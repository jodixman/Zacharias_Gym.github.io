import { aboutList } from '../constants'
import styles from '../style'
import { useState } from 'react'

import 'aos/dist/aos.css'

const About = () =>{

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  

    return(
    <section id='about' className='font-poppins' >
        {/* Top[Judul] */}
        <div className={`${styles.paddingY} flex flex-col text-white`} data-aos="fade-left">
            <div className='mb-10'>
                <p className='text-slate-600'>Guide</p>
                <h2 className={`text-3xl`}>In diesem About Rasino</h2>
            </div>

            <div className='relative z-[100]'>
                <p className='text-slate-600 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto hic inventore quos ex quibusdam?</p>

                <div className='relative'>
                    <a href="#" className='hover:opacity-50 z-[10] static'>DOWNLOAD FOR FREE</a>
                    <span className='bg-secondary py-5 px-5 rounded-full absolute -left-2 -top-2 z-[-1]'></span>
                </div>
            </div>
        </div>

        {/* Bottom[List] */}
        <div className='flex flex-col accordion-item' data-aos="zoom-in-right" data-aos-delay="500">
            {aboutList.map((List, index)=>(
                <div key={List.id} className=''>
                    <div className='text-white flex flex-col justify-between border-b-2 mt-10   group hover:opacity-50 cursor-pointer'
                     onClick={() => toggleAccordion(index)}>
                        <div className='flex flex-row justify-between  '>
                            <div className='flex flex-row accordion-header'>
                                <p className='mr-5 mb-5 text-[10px]'>{List.value}</p>
                                <h2 className='mb-5'>{List.text}</h2>
                            </div>
                            <p className='text-end hidden sm:block group-hover:rotate-[315deg] transition duration-300 group-hover:text-secondary'>{'->'}</p>
                        </div>

                        <div className={`${activeIndex === index ? 'flex' : 'hidden'} text-white my-10 accordion-content`} >
                            <p>{List.comment}</p>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    </section>
)}

export default About