import React, { useState, useEffect } from 'react'
import { Button, DialogActions, Dialog, DialogContent, DialogTitle, Rating } from '@mui/material'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../pages/Loader';
import { serverProducts } from '../server';


function ReviewCard(props) {


    const { id } = useParams()


    const [rating, setrating] = useState('');
    const [comment, setcomment] = useState('');
    const [convert, setconvert] = useState('');
    const [loading, setloading] = useState(false);
    const [loading2, setloading2] = useState(false);
    const [reviews, setreviews] = useState('');


    const toastinfo = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }

    const hchange = async (e) => {
        const form = new FormData();
        form.append("image", e.target.files[0]);
        setloading(true)
        const url = `https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a`;
        axios.post(url, form)
            .then((res) => {
                setloading(false)
                setconvert([...convert, { image: res.data.data.url }])
            })
            .catch((err) => {
                setloading(false)
            })
    }

    
    const ReviewSubmit = async () => {
        try {
            setloading2(true)
            const { data , status} = await axios.post(`${serverProducts}/review?id=${id}` , {rating , comment , images : convert} , { withCredentials : true })
            if(status === 201){
                props.setopen(false)
                setloading2(false)
                props.setchange(!props.change)
                toast.success('Review submited' , toastinfo)
                console.log(data)
            }
        } catch (error) {
            setloading2(false)
            toast.success('Review Failed' , toastinfo)
            console.log(error)
        }
        console.log({id , rating , comment , convert})
    }



    return (
        <>  
           {loading2 && <Loader/>}
            <div className='wishlistbox flex justify-center items-center'>
                 <div className='w-[450px] shadow-lg rounded-xl bg-[#622d60] '>
                    { loading && <p className='text-white text-xl m-4 font-[600]'>Image Uploading ...</p>}
                    <h1 className='ml-6 mt-2 text-xl text-white font-bold'>Submit Review</h1>
                    <DialogContent className='flex flex-col gap-2'>
                        <Rating
                            onChange={(w) => setrating(w.target.value)}
                            value={rating}
                            size='large'

                        />
                        <textarea name="" className='submitDialogTextArea text-black font-[500] tracking-wide w-full my-3 focus:outline-none p-3 rounded-xl shadow-lg' id="" value={comment} onChange={(w) => setcomment(w.target.value)} rows="4" ></textarea>
                        <div className='flex flex-col ml-5 gap-2'>
                            <div className='flex'>
                            <label htmlFor='atick' className='cursor-pointer bg-green-700 py-2 mb-2 mr-3 border-none outline-none px-5 tracking-wide text duration-150 hover:scale-105 text-[15px] text-white rounded-lg shadow-lg mt-3 ml-2 w-[130px] text-center' > Add photo </label>
                            <button onClick={() => setconvert('')} className='cursor-pointer bg-orange-600 py-2 mb-2 mr-3 border-none outline-none px-5 tracking-wide text duration-150 hover:scale-105 text-[15px] text-white rounded-lg shadow-lg mt-3 ml-2 w-[110px] text-center' > Clear </button>

                            </div>
                            <input type="file" id='atick' className='imtsb hidden' onChange={hchange} />
                            <div className='flex items-center gap-x-2'>
                                {convert.length > 0 && convert.map((i) => {
                                    return <img className='h-20 w-20 rounded-lg' src={i.image} alt="nai" />
                                })}
                            </div>
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <button className='cursor-pointer bg-orange-700 py-2  mb-3 mr-3 px-5 tracking-wide duration-150 hover:scale-105 text-[15px] text-white rounded-lg shadow-lg mt-3'onClick={() => props.setopen(false)} > Cancel </button>
                        <button className='cursor-pointer bg-green-700 py-2 mb-3 mr-3 px-5 tracking-wide duration-150 hover:scale-105 text-[15px] text-white rounded-lg shadow-lg mt-3' onClick={ReviewSubmit} > Submit </button>
                    </DialogActions>

                </div>
            </div>
        </>
    )
}

export default ReviewCard