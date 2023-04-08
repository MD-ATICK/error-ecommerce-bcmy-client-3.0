import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import ActivationToken from './pages/ActivationToken';
import ActivationShopToken from './pages/ActivationShopToken';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from './server';
import { toast } from 'react-hot-toast';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch } from './UserSlice/UserSlice';
import Header from './components/home/Header';
import HeaderTwo from './components/home/HeaderTwo';
import BestSellering from './pages/BestSellering';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import Footer from './components/home/Footer';
import Loader from './pages/Loader';
import Account from './pages/Account';
import Orders from './pages/Orders';
import FzeroF from './pages/FzeroF';
import MyCart from './pages/MyCart';
import Refunds from './pages/Refunds';
import TrackOrder from './pages/TrackOrder';
import PaymentMethods from './pages/PaymentMethods';
import Address from './pages/Address';
import MessageChat from './pages/MessageChat';
import SellerSignUp from './pages/SellerSignUp';
import ShopDashboard from './pages/ShopDashboard';
import Adminpage from './pages/Adminpage';
import SellerCreateProduct from './pages/seller/SellerCreateProduct';
import SellerProducts from './pages/seller/SellerProducts';
import AdminProducts from './pages/admin/AdminProducts';
import ShopGet from './pages/shop/ShopGet';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';

function App() {
  const dispatch = useDispatch()

  const [data, setdata] = useState(false);
  const [wbox, setwbox] = useState(false);
  const [cbox, setcbox] = useState(false);

  const { loading, user } = useSelector((state) => state.getuser)
  user && console.log(user.user._id)

  useEffect(() => {
    dispatch(getUserFetch())
  }, [data]);

  return (
    <div>
    <BrowserRouter>
      {loading && <Loader />}
      <Header id={user && user.user._id} />
      <HeaderTwo wbox={wbox} setwbox={setwbox} cbox={cbox} setcbox={setcbox} />
      <Routes>
        <Route path='/' element={<Home wbox={wbox} setwbox={setwbox}  />} />
        {user && user !== '' && user.isauthuser === false && <Route path='/sign-in' element={<Login setdata={setdata} />} />}
        {user && user !== '' && user.isauthuser === false && <Route path='/sign-up' element={<Register />} />}
        <Route path='/activation/:token' element={<ActivationToken />} />
        <Route path='/activationshop/:token' element={<ActivationShopToken/>} />
        <Route path='/best-selling' element={<BestSellering wbox={wbox} setwbox={setwbox}  cbox={cbox} setcbox={setcbox} />} />
        <Route path='/products' element={<Products wbox={wbox} setwbox={setwbox}  cbox={cbox} setcbox={setcbox} />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/events' element={<Events />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/account' element={<Account setdata={setdata} />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/my-cart' element={<MyCart cbox={cbox} setcbox={setcbox} />} />
        <Route path='/refunds' element={<Refunds />} />
        <Route path='/track-order' element={<TrackOrder />} />
        <Route path='/payment' element={<PaymentMethods />} />
        <Route path='/address' element={<Address />} />
        <Route path='/message' element={<MessageChat />} />
        {/* <Route path='/seller/shop-login' element={<SellerLogin setdata={setdata} />} /> */}
        <Route path='/seller/shop-signup' element={<SellerSignUp />} />
        <Route path='/shop/:id' element={<Shop />} />
        <Route path='/dashboard' element={<ShopDashboard setdata={setdata} />} />
        {/* {/* <Route path='/seller/create-product' element={<SellerCreateProduct  />} /> */}
        {/* <Route path='/admin/create-product' element={<SellerCreateProduct  />} /> */}
        <Route path='/products' element={<SellerProducts  />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/users' element={<Adminpage />} />
        {/* <Route path='/shop/:id' element={<ShopGet />} /> */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<FzeroF/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

    </div>
  );
}

export default App;
