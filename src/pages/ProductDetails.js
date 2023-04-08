import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai'
import { useSelector } from 'react-redux'

function ProductDetails(props) {

    const [activeTap, setactiveTap] = useState(1);
    const [reviews, setreviews] = useState([]);
    const { user } = useSelector((state) => state.getuser.user)
    const [deleteshow, setdeleteshow] = useState(false);

    const mouseEnter = (id) => {
        console.log(id + 'atick vai id')
        console.log(user._id + 'atick vai 2')
        if(user._id.toString() === id.toString()){
            setdeleteshow(true)
        } else {
            setdeleteshow(false)
        }
    }

    const deleteReviews = async () => {
        
    }

    console.log(deleteshow)

    return (
        <div className='max-w-[1300px] h-[550px]  mx-auto rounded-lg bg-gray-200 my-8 px-14 py-6'>
            <div className='w-full flex justify-between gap-x-10 px-9'>
                <p className={activeTap === 1 ? 'p-4 text-lg font-[500]  border-b-[4px] border-[#622d60] mb-6' : 'p-4 mb-6 text-lg font-[500] cursor-pointer'} onClick={() => { setactiveTap(1) }}>Product Reviews</p>
                <p className={activeTap === 2 ? 'p-4 text-lg font-[500] border-b-[4px] border-[#622d60] mb-6' : 'p-4 mb-6 text-lg font-[500] cursor-pointer'} onClick={() => { setactiveTap(2) }}>Product Details</p>
                <p className={activeTap === 3 ? 'p-4 text-lg font-[500] border-b-[4px] border-[#622d60] mb-6' : 'p-4 mb-6 text-lg font-[500] cursor-pointer'} onClick={() => { setactiveTap(3) }}>Seller Information</p>
            </div>
            <div className='flex flex-col justify-center'>
                {
                    activeTap === 2 ? (
                        <div>
                            <p className='text px-8 py-3 whitespace-pre-line pb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deserunt eligendi suscipit illo doloremque sunt alias temporibus, laboriosam nostrum possimus pariatur, sint officia impedit voluptatum, ad voluptate accusantium dolores libero ducimus odio excepturi omnis iusto. Nulla, assumenda numquam voluptatibus quisquam repellat sunt minima aliquid! Animi illum ipsam natus quibusdam voluptas, sint saepe quo, totam odit, necessitatibus velit. Amet consectetur aperiam eaque officia sed rerum quos, totam vitae. Quibusdam, quaerat placeat iure voluptatum explicabo rerum tempore dicta ratione reiciendis quidem facilis?</p>
                            <p className='text px-8 py-3 whitespace-pre-line'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deserunt eligendi suscipit illo doloremque sunt alias temporibus, laboriosam nostrum possimus pariatur, sint officia impedit voluptatum, ad voluptate accusantium dolores libero ducimus odio excepturi omnis iusto. Nulla, assumenda numquam voluptatibus quisquam repellat sunt minima aliquid! Animi illum ipsam natus quibusdam voluptas, sint saepe quo, totam odit, necessitatibus velit. Amet consectetur aperiam eaque officia sed rerum quos, totam vitae. Quibusdam, quaerat placeat iure voluptatum explicabo rerum tempore dicta ratione reiciendis quidem facilis?</p>
                        </div>
                    ) : null ||
                        activeTap === 1 ? props.product.reviews.length === 0 ? <div className='m-auto w-[150px]'>No Review Yets</div> : <div>
                            {
                                props.product.reviews.map((i) => {
                                    const { avatar, comment, images, name, _id , user } = i
                                    return <div key={_id} onMouseEnter={() => mouseEnter(user)} onMouseLeave={() => setdeleteshow(false)} className='w-[300px] relative duration-150 bg-[#622d60] py-4 rounded-xl text-white flex flex-col shadow-lg'>
                                      { deleteshow ? <p onClick={() => deleteReviews(_id) } className='absolute top-4 right-4 duration-150 text-gray-300 hover:text-white cursor-pointer'><AiFillDelete className='text-xl'/></p> : null  }  
                                        <div className='flex gap-x-2 pl-2 pb-2 border-b-2 border-white'>
                                            <img src={avatar} className='w-8  h-8 rounded-full object-cover' alt="" />
                                            <p className=' text-[14px] tracking-wider capitalize'>{name}</p>
                                        </div>
                                        <p className='py-3 text-[13px] tracking-wide px-6 '>{comment}</p>

                                        <div className='flex gap-x-2 px-6 items-center'>
                                        {
                                            images.map((i) => {
                                                return <img src={i.image} className='w-14 h-14 rounded-xl object-cover shadow-lg' alt="" />
                                            })
                                        }
                                        </div>
                                    </div>
                                })
                            }
                        </div> : null ||
                            activeTap === 3 ? (
                        <div className='grid grid-cols-1 lg:grid-cols-2 w-full bg-[#622d60] text-white mx-6 rounded-2xl place-items-center p-10'>
                            <div className="left w-full bg-[#622d60] text-left p-8 flex flex-col gap-y-4">
                                <img src={props.shop.avatar} className='w-14 shadow-sm rounded-full object-cover h-14' alt="" />
                                <div>
                                    <p>{props.shop.name}</p>
                                    <p className='font-[500]'>{props.shop.follow} follower</p>
                                </div>
                                <p>{props.shop.description}</p>
                                <button className='py-3 mt-3 text-[14px] px-3 tracking-wide bg-zinc-700 rounded-md shadow-lg text-white'>Send message</button>
                            </div>
                            <div className="right  bg-[#622d60]  w-full h-full px-10 flex flex-col gap-y-3 py-7 ml-auto">
                                <p className='flex '>Joined On : <span className='font-[500] text-white py-1 ml-3 px-5 rounded-lg bg-green-600 tracking-wide'>{props.shop.createdAt}</span></p>
                                <p className='flex '>Address : <span className='font-[500] text-white py-1 ml-3 px-5 rounded-lg bg-green-600 tracking-wide'>{props.shop.address}</span></p>
                                <p className='flex'> Total Products : <span className='font-[500] text-white py-1 ml-3 px-5 rounded-lg bg-green-600 tracking-wide'>{props.plength}</span></p>
                                <p className='flex mb-10'> Total Reviews : <span className='font-[500] text-white py-1 ml-3 px-5 rounded-lg bg-green-600 tracking-wide'>131</span></p>
                                <Link to={`/shop/${props.shop._id}`} className='py-3 text-[14px] px-6 tracking-wide bg-[#622d60] text-center shadow-white rounded-md shadow-sm text-white'>View Shop</Link>

                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default ProductDetails