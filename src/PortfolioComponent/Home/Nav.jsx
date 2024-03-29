import {React, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Header from './Header.jsx';

const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <>
    <div className=' select-none flex justify-between items-center h-16 max-w-6xl mx-auto px-4 first-letter font-outfit text-[#18102b]  bg-[#fbfafc]'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] flex whitespace-nowrap'><span className='text-black'> &lt; L</span>T /&gt;</h1>
      <ul className='hidden md:flex'>
        {/* <li className='p-4'>Home</li> */}
        <li className='p-4 w-32' > <a href='#about' className=' hover:no-underline hover:text-black hover:text-[15px]'> About me </a></li>
        {/* <li className='p-4'>Service</li> */}
        <li className='p-4'><a href='#contact' className=' hover:no-underline hover:text-black hover:text-[15px]'> Contact </a></li>
        <li className='p-4'><a href='#projects' className=' hover:no-underline hover:text-black hover:text-[15px]'> Projects </a></li>
        <li className='p-4'><a href='#skills' className=' hover:no-underline hover:text-black hover:text-[15px]'> Skills </a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu className='cursor-pointer' size={25} /> : <AiOutlineClose className='cursor-pointer' size={25} />}

      </div>
      <div className={nav ? 'fixed right-0 top-0 w-[60%] h-full  bg-[#fcfbfb] mt-16 ease-in-out duration-500 md:hidden text-[#18102b] couraor' : 'fixed left-[-500px]'}>
        <ul className=''>
          {/* <li className='p-4'>Home</li> */}
           <li className='p-4 w-32' > <a href='#about' className=' hover:no-underline hover:text-black hover:text-[15px]'> About me </a></li>
        {/* <li className='p-4'>Service</li> */}
        <li className='p-4'><a href='#Contact' className=' hover:no-underline hover:text-black hover:text-[15px]'> Contact </a></li>
        <li className='p-4'><a href='#Project' className=' hover:no-underline hover:text-black hover:text-[15px]'> Projects </a></li>
                <li className='p-4'><a href='#skills' className=' hover:no-underline hover:text-black hover:text-[15px]'> Skills </a></li>
      </ul>
      </div>
    </div>
    <Header />
    </>
  )
}

export default Nav
