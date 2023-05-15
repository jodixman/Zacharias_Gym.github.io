import React from 'react'
import Button from "./Button"

const Footer = () =>(
    <section className='flex flex-col flex-wrap justify-center items-center text-white mt-20'>
        <div className='flex flex-col flex-wrap justify-center items-center gap-10'>
            <h1 className='text-3xl max-w-[80%] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, aliquid.</h1>
            <button className='py-3 px-20 bg-secondary rounded-2xl text-2xl font-bold text-black hover:opacity-70'>Download for free</button>
            <p className='text-slate-700'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='flex flex-col sm:flex-row fle-xwrap justify-between items-center text-slate-700 mt-40 sm:mt-20 pb-5 w-full'>
            <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, pariatur.</p>

            <div className='mt-10 sm:mt-0 flex gap-10'>
                <p>Terms of Use</p>
                <p>Privacy Polcy</p>
            </div>
        </div>
    </section>
)


export default Footer