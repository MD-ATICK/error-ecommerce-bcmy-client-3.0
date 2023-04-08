import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dropdown({ categoriesData, setdropdown }) {
    console.log(categoriesData)
    const navigate = useNavigate()

    const handleCategories = (item) => {
        setdropdown(false)
        console.log(item.title)
        navigate(`/products/?category=${item.title}`)
        // window.location.reload()
    }

    return (
        <div className="absolute max-w-[371px] w-full -my-3 py-3 shadow-lg z-50 bg-white rounded-md  text-black">
                {
                    categoriesData && categoriesData.map((item , index) => {
                        return <div className="flex cursor-pointer hover:bg-gray-200 py-3 tracking-wide gap-x-3 px-3" key={index} onClick={() => handleCategories(item) }>
                                <img src={item.image_Url} className='w-7 h-7' alt="" />
                                <h1>{item.title}</h1>
                        </div>
                    })
                }
        </div>  

    )
}

export default Dropdown