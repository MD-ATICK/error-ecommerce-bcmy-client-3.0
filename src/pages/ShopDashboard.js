import React , { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillGift} from 'react-icons/ai'
import { FiTag} from 'react-icons/fi'
import { FiShoppingBag} from 'react-icons/fi'
import { FiBox} from 'react-icons/fi'
import { TbMessage} from 'react-icons/tb'
import { RxDashboard} from 'react-icons/rx'
import { BsFolderPlus} from 'react-icons/bs'
import { VscNewFile} from 'react-icons/vsc'
import { FaRegMoneyBillAlt} from 'react-icons/fa'
import { HiOutlineReceiptRefund} from 'react-icons/hi'
import { AiOutlineSetting} from 'react-icons/ai'
import CreateProduct from '../components/dashborad file/CreateProduct'
import SellerProducts from './seller/SellerProducts'
import OrderAll from '../components/dashborad file/OrderAll'
import EventAll from '../components/dashborad file/EventAll'
import CreateEvent from '../components/dashborad file/CreateEvent'
import DiscountCodes from '../components/dashborad file/DiscountCodes'
import DashBoard from '../components/dashborad file/DashBoard'
import Settings from '../components/dashborad file/Settings'

function ShopDashboard() {

    const navigate = useNavigate()
    const [activetap, setactivetap] = useState(1);

  return (
    <div className='fullpagecover bg-[#d2d2d2]'>
        <nav className='w-full bg-white shadow-none flex justify-between items-center border-b-[2px] border-stone-300 h-[55px]'>
           <div className="left">
                <img className='h-[30px] ml-12 cursor-pointer' onClick={() => navigate('/')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58ax9CjWFGeUhOsOsxNCxSavvimIL-v8OlA&usqp=CAU" alt="janin na" />
           </div>
           <div className="right flex items-center gap-x-6 mr-12">
                <AiFillGift className='text-2xl text-stone-600'/>
                <FiTag className='text-2xl text-stone-600'/>
                <FiShoppingBag className='text-2xl text-stone-600'/>
                <FiBox className='text-2xl text-stone-600'/>
                <TbMessage className='text-2xl text-stone-600'/>
                <img className='w-[40px] h-[40px] rounded-full object-cover' src="https://img.freepik.com/premium-photo/close-up-young-woman-painting-eggs-pastel-colors-easter-while-sitting-table-kitchen-copy-space_236854-23168.jpg?size=626&ext=jpg" alt="" />
           </div>
        </nav>
        <div className='flex justify-between'>
            <div className="left namewith bg-white h-[92vh] w-full p-4 md:p-8 pr-0 flex-[0.09] md:flex-[0.2]">
                <ul className='flex flex-col gap-y-8 '>
                    <li onClick={() => setactivetap(1)} className={activetap === 1 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><RxDashboard className='text-2xl'/> Dashboard</li>
                    <li onClick={() => setactivetap(2)} className={activetap === 2 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiShoppingBag className='text-2xl'/> All Orders </li>
                    <li onClick={() => setactivetap(3)} className={activetap === 3 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiBox className='text-2xl'/>  All products</li>
                    <li onClick={() => setactivetap(4)} className={activetap === 4 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><BsFolderPlus     className='text-2xl'/> Create Product  </li>
                    <li onClick={() => setactivetap(5)} className={activetap === 5 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiTag className='text-2xl'/>  All Events</li>
                    <li onClick={() => setactivetap(6)} className={activetap === 6 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><VscNewFile className='text-2xl'/>  Create Event</li>
                    <li onClick={() => setactivetap(7)} className={activetap === 7 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FaRegMoneyBillAlt className='text-2xl'/> Withdraw Money</li>
                    <li onClick={() => setactivetap(8)} className={activetap === 8 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><TbMessage className='text-2xl'/> Shop Inbox </li>
                    <li onClick={() => setactivetap(9)} className={activetap === 9 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><AiFillGift className='text-2xl'/> Discount Copouns</li>
                    <li onClick={() => setactivetap(10)} className={activetap === 10 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><HiOutlineReceiptRefund className='text-2xl'/> Refunds</li>
                    <li onClick={() => setactivetap(11)} className={activetap === 11 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><AiOutlineSetting className='text-2xl'/> Settings</li>
                </ul>
            </div>
            <div className="left nameless bg-white h-[92vh] w-full p-4 md:p-8 pr-0 flex-[0.09] md:flex-[0.2]">
                <ul className='flex flex-col gap-y-8 '>
                    <li title='dashboard' onClick={() => setactivetap(1)} className={activetap === 1 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><RxDashboard className='text-2xl'/> </li>
                    <li title='All Orders' onClick={() => setactivetap(2)} className={activetap === 2 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiShoppingBag className='text-2xl'/>  </li>
                    <li title='All Products' onClick={() => setactivetap(3)} className={activetap === 3 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiBox className='text-2xl'/>  </li>
                    <li title='Create Product' onClick={() => setactivetap(4)} className={activetap === 4 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><BsFolderPlus     className='text-2xl'/>  </li>
                    <li title='All events' onClick={() => setactivetap(5)} className={activetap === 5 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FiTag className='text-2xl'/>  </li>
                    <li title='Create Events' onClick={() => setactivetap(6)} className={activetap === 6 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><VscNewFile className='text-2xl'/>  </li>
                    <li title='withdraw money' onClick={() => setactivetap(7)} className={activetap === 7 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><FaRegMoneyBillAlt className='text-2xl'/>  </li>
                    <li title='shop inbox' onClick={() => setactivetap(8)} className={activetap === 8 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><TbMessage className='text-2xl'/>  </li>
                    <li title='discount copouns' onClick={() => setactivetap(9)} className={activetap === 9 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><AiFillGift className='text-2xl'/>  </li>
                    <li title='refunds' onClick={() => setactivetap(10)} className={activetap === 10 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><HiOutlineReceiptRefund className='text-2xl'/> </li>
                    <li title='settings' onClick={() => setactivetap(11)} className={activetap === 11 ? 'flex items-center gap-x-3 text-orange-700 text-[16px] cursor-pointer font-[400] tracking-wide' : 'flex items-center gap-x-3 text-stone-600 text-[16px] cursor-pointer font-[400] tracking-wide'}><AiOutlineSetting className='text-2xl'/> </li>
                </ul>
            </div>
            <div className="right w-full flex-[0.91] md:flex-[0.8]">
                {
                 activetap === 1 ? <DashBoard/> : null ||
                 activetap === 2 ? <OrderAll/> : null ||
                 activetap === 3 ? <SellerProducts/> : null ||
                 activetap === 4 ? <CreateProduct setactivetap={setactivetap} /> : null ||
                 activetap === 5 ? <EventAll/> : null ||
                 activetap === 6 ? <CreateEvent  setactivetap={setactivetap} /> : null ||
                 activetap === 7 ? 7 : null ||
                 activetap === 8 ? 8 : null ||
                 activetap === 9 ? <DiscountCodes /> : null ||
                 activetap === 10 ? 10 : null ||
                 activetap === 11 ? <Settings/> : null 
                }
            </div>
        </div>
    </div>
  )
}

export default ShopDashboard