import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className=' min-h-[85vh] 800px:min-h-[100vh] w-full bg-no-repeat bg-cover' style={{backgroundImage : 'url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg'}} >
        <div className='w-full px-4 sm:w-[1000px] pb-5 overflow-hidden pl-20 pt-24'>
            <h1 className='text-3xl md:text-5xl md:h-32 pb-2 font-medium'>Best Collection For Your home Decoration</h1>
            <p className='text mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing. id tempore repellendus aspernatur facere numquam, placeat sit in adipisci ratione tempora, quae libero quisquam laboriosam. Laudantium iste voluptatem soluta eos ipsam tenetur quae dolorum, eveniet esse doloribus ipsa. Quae tempore mollitia sit tenetur optio ea.</p>
            <Link to={'/products'} className='text py-3 px-8  rounded-xl shadow-lg bg-purple-900 text-white'>Shop Now</Link>
        </div>
    </div>
  )
}

export default Hero