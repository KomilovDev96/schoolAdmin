import React from 'react'

export default function Error() {
  return (
    <div className='fixed top-[0%] left-[0%] w-full h-full flex-col flex items-center justify-center bg-[#000000cf] z-10 '>
        <h2 className='text-[crimson] mb-[5px] text-center text-[30px] font-bold'>Tizimda xatolik yuz berdi!</h2>
        <p className='text-center text-white text-[20px] font-bold'>Iltimos qaytadan urunib ko'ring</p>
    </div>
  )
}
