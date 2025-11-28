import React from 'react'
// import { User } from "lucide-react";

const HeaderComponent = () => {
  return (
    <div className='flex text-center'>
        <img className='mt-7.5 ml-9 ' src="Logo.svg" alt="kgbj" />
        <div id='ss' className='flex mt-12 ml-auto'>
            <a href='#' className='text-zinc-600 text-xl'>услуги</a>
            <a href='#' className='text-zinc-600 ml-9 text-xl'>о нас</a>
            <a href='#' className='text-zinc-600 ml-9 text-xl'>польза продукта</a>
            <a href='#' className='text-zinc-600 ml-9 text-xl'>оборудование</a>
            <a href='#' className='text-zinc-600 ml-9 text-xl'>этапы работы</a>
            <a href='#' className='text-zinc-600 ml-9 text-xl'>отзывы</a>
        </div>
        <button id='ll' className='w-50 h-12 rounded-2xl text-2xl font-normal text-stone-50 bg-[#5CCD6A] ml-auto mt-8 mr-9  ring-12 ring-white/45 pb-1.5 cursor-pointer transform-gpu hover-opacity-100'>связаться</button>
    </div>
  )
}

export default HeaderComponent