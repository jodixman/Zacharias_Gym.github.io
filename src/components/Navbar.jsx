import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);



return (
  <header className='z-[999999999]'>
          <nav className='flex flex-wrap py-6 px-6 justify-between items-center navbar bg-[#111111] z-[999] shadow-sm shadow-slate-700 fixed top-0 translate-x-1/2 w-full -left-1/2 '>
      {/* Logo */}
      <img src={logo} alt="logo" 
      className='w-[240px]'/>

      {/* List NavBar */}
      <ul className='list-none md:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
              <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-20'} text-white hover:opacity-50`}>
                  <a href={`#${nav.id}`}>
                      {nav.title}
                  </a>
              </li>
          ))}
      </ul>

      {/* Hamburger */}
      <div className={`md:hidden flex flex-2 justify-center items-center rounded-full p-2 bg-[#343535]`}>
              <img src={toggle ? close : menu} alt="menu" 
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle((prev) => !prev)}/>

              {/* Memunculkan Menu */}
              <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-2-[140px] rounded-xl sidebar z-[999]`}>
                      
                  <ul className='list-none flex-col justify-end items-center flex-1'>
                  {navLinks.map((nav, index) => (
                      <li 
                      key={nav.id}
                      className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-5'} text-white hover:opacity-50`}>
                          <a href={`#${nav.id}`}>
                              {nav.title}
                          </a>
                      </li>
                      ))}
                  </ul>
              </div>
      </div>
  </nav>
  </header>
)
}

export default Navbar