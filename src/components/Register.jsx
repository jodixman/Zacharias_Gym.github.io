import { useState } from 'react';
import styles from '../style'
import { work2 } from '../assets'
import Button from './Button'
//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'
//AXIOS
import axios from 'axios'





const Register = () =>{
    AOS.init();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit=(e) =>{
        e.preventDefault();
        // console.log(firstName,lastName,email)

        const data = {
            FirstName:firstName,
            LastName:lastName,
            Email:email
        }
        axios.post('https://sheet.best/api/sheets/0e64eb3c-3802-4017-a08c-3a03fd0bb05a',data).then((response) => {
            console.log(response);
            setFirstName('');
            setLastName('');
            setEmail('');
        })
    }
    return(
    <section id='register' className={`${styles.paddingY} flex flex-col`}>
        <div className={`text-white`}>
            {/* Top */}
            <p className={`${styles.paragraph} text-white max-w-[800px]`} data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ducimus natus animi est ab, eius ipsum repudiandae nihil neque ea!</p>

            {/* Bottom */}
            <div className='mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-between w-full' data-aos="fade-up" data-aos-delay="300">
                <img src={work2} alt="work2" className='rounded-xl w-full h-full'/>
                {/* Form */}
                <div className={`${styles.flexCenter} mt-20 md:mt-0 md:ml-10 flex-col bg-[#282829] px-3 py-5 rounded-xl md:max-w-[380px] relative`}>
                    <span className='bg-black py-2 px-3 rounded-full absolute -top-10 -translate-x-1/2 left-1/2 border border-[12px] border-[#292929] cursor-pointer hover:px-4 hover:py-3'>
                        <p className='text-center rotate-[270deg] text-4xl relative -left-1 text-secondary'>↙</p></span>
                    <div className='text-center mt-8'>
                        <h3 className={`text-2xl font-semibold`}>Download for free</h3>
                        <p className={`${styles.paragraph} text-slate-400 mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ducimus beatae molestias vero totam?</p>
                    </div>
                    {/* Input */}
                    <form className='flex flex-col w-full mt-5' onSubmit={handleSubmit}>
                        <div className='flex flex-col mb-5'>
                            <label for="first-name">First Name <span className='text-secondary'>*</span></label>
                            <input type="text" id='first-name' className='bg-transparent border border-slate-500 focus:outline-none focus:ring-secondary focus:ring-2 rounded-md py-1 mt-3 pl-2' placeholder='First Name' required onChange={(e) =>setFirstName(e.target.value)} value={firstName}/>
                        </div>

                        <div className='flex flex-col mb-5 '>
                            <label for="last_name">Last Name <span className='text-secondary'>*</span></label>
                            <input type="name" id='last_name' className='bg-transparent border border-slate-500 focus:outline-none focus:ring-secondary focus:ring-2 rounded-md py-1 mt-3 pl-2' placeholder='Last Name' required onChange={(e) =>setLastName(e.target.value)} value={lastName}/>
                        </div>

                        <div className='flex flex-col mb-5'>
                            <label for="email">Email <span className='text-secondary'>*</span></label>
                            <input type="email" id='email' className='bg-transparent border border-slate-500 focus:outline-none focus:ring-secondary focus:ring-2 rounded-md py-1 mt-3 pl-2' placeholder='Enter@your.email' required onChange={(e) =>setEmail(e.target.value)} value={email}/>
                        </div>
                    <button className='py-3 px-6 bg-secondary font-poppins font-medium text-[18px]  text-primary outline-none rounded-[10px] flex group mt-10 sm:mt-0 w-full justify-center hover:bg-yellow-400'>Download for free</button>
                    </form>

                </div>
            </div>
        </div>

    </section>
  )
    }

export default Register