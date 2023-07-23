import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import SuggestedProduct from '../components/SuggestedProduct';
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { serverProducts } from '../server';
import { productData } from '../static/data';
import Loader from './Loader';
import ProductDetails from './ProductDetails';
import ReviewCard from '../components/ReviewCard';

function SingleProduct() {

  const { id } = useParams()
  const [product, setproduct] = useState('');
  const [loading, setloading] = useState(false);
  const [img, setimg] = useState('');
  const [change, setchange] = useState(false);
  const [open, setopen] = useState(false);
  const [product2, setproduct2] = useState('');
  

  const toastinfo = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  }


  const SingleProducts = async () => {
    try {
      setloading(true)
      const { data, status } = await axios.get(`${serverProducts}/products/${id}`)
      if (status === 200) {
        setproduct(data)
        setloading(false)
      }
    } catch (error) {
      setloading(false)
      toast.error(<p className='text-stone-600 tracking-wide px-2'>Product Get Unsuccessfull</p>, toastinfo)
    }
  }

  const Allproduct = async () => {
    try {
      setloading(true)
      const { data, status } = await axios.get(`${serverProducts}/adminproducts`)
      if (status === 200) {
        setproduct2(data)
        setloading(false)
      }
    } catch (error) {
      setloading(false)
    }
  }

  

  useEffect(() => {
    SingleProducts()
    Allproduct()
  }, [change]);

  return (
    <>
      {loading && <Loader />}
      {
        product && product2 && product2 !== '' && product !== '' &&
        <div>
        <div className='grid grid-cols-1 px-2 md:grid-cols-2 place-items-center mx-auto md:h-[82vh] max-w-[1300px] w-full'>
          <div className="left flex justify-center">
            <div className='flex flex-col ml-2 gap-y-3 mt-6'>
              {
                product.product.images.map((img , index) => {
                  return <img key={index} src={img.image} onClick={(e) => {
                    setimg(e.target.src)
                    setloading(true)
                    setTimeout(() => {
                      setloading(false)
                    }, 500);
                  }} className='h-36 w-40 p-3 object-cover overflow-hidden rounded-md border-[3px] border-stone-500 cursor-pointer' alt="" />
                })
              }
            </div>
            <img src={img == '' ? product.product.images[0].image : img} className='imgdt rounded-xl shadow-lg' alt="" />
          </div>
          <div className="right md:w-full md:h-full bg-gray-200 shadow-lg m-2 p-10">
            <p className='text-3xl font-bold capitalize py-3'>{product.product.name}</p>
            <p className='text py-3'>{product.product.category}</p>
            <p className='text py-3'>{product.product.description}</p>
            <p>Price : <span className='line-through'>{product.product.price}$</span></p>
            <p className='py-1'>ratings : {product.product.ratings}$</p>
            <p>Stock : {product.product.stock}</p>
            <p>Total Sell : {product.product.totalSell}</p>
            <Link to={`/shop/${product.shop.user}`} className='flex gap-x-2 my-3'>
              <img src={product.shop.avatar} className='h-12 w-12 object-cover rounded-full shadow-lg' alt="" />
              <div>
                <p>{product.shop.name}</p>
                <p className='text'>ratings(3.5)</p>
              </div>
            </Link>
             <button className='cursor-pointer bg-[#622d60] py-2 px-5 tracking-wide duration-150 hover:scale-105 text-[15px] text-white rounded-lg shadow-lg mt-3' onClick={() =>setopen(true)} > Reviews Send </button>
          </div>

        {
          open ? <ReviewCard change={change} setchange={setchange} setopen={setopen} /> : ''
        }  
        </div>

        <ProductDetails shop={product.shop} product={product.product} plength={product2 !== '' && product2 && product2.products.length} />
        </div>
      }
      {
        product2 && product2 !== '' && product !== '' && <SuggestedProduct data={product2} category={product.product.category} />
      }
      
    </>
  )
}

export default SingleProduct