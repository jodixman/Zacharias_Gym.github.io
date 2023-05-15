import React from 'react'
import styles from '../style'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`py-3 px-6 bg-secondary font-poppins font-medium text-[18px]  text-primary outline-none rounded-[10px] flex group mt-10 sm:mt-0 ${styles}`}>
        Trustpilot 
        <span className='pl-5 text-xl group-hover:-translate-y-2 group-hover:translate-x-2 block transition duration-500 '>↗</span>
    </button>
  )
}

export default Button