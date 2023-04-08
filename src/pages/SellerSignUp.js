import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { serverShop } from "../server";

const SellerSignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState();
    const [avatar, setAvatar] = useState();
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(1)
            const form = new FormData();
            form.append("image", avatar);
            const url = `https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a`;
            const { data, status } = await axios.post(url, form)
            if (status === 200) {
                const shopdetails = { avatar: data.data.url, name, email, password, zipCode, phoneNumber, address }
                console.log(shopdetails)
                try {
                    const { data , status } = await axios.post(`${serverShop}/register` , shopdetails , { withCredentials : true} )
                    if(status === 201){
                        console.log(4)
                        console.log(data)
                        toast.success('2 mintues You cannot Submit' , {theme : 'light'})
                        toast.success(<p className="text-[14px]">{data.message}</p> , {theme : "light"})
                    } else {
                        console.log(6)
                        toast.error('Failed to Shop resgister')
                    }
                } catch (error) {
                    console.log(7)
                    console.log(error)
                }
            } else {
                console.log(8)
                toast.error('Image convert url failed')
            }
            
        } catch (error) {
            console.log(9)
            console.log(error)
        }
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <div className="min-h-[83vh] bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register as a seller
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6 text-center" onSubmit={handleSubmit}>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            >
                                Shop Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="name"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="phone-number"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="address"
                                    name="address"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            >
                                Zip Code
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    name="zipcode"
                                    required
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="avatar"
                                className="block text-left text-[14px] mb-1 text-sm font-medium text-gray-700"
                            ></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img
                                            src={URL.createObjectURL(avatar)}
                                            alt="avatar"
                                            className="h-full w-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <RxAvatar className="h-8 w-8" />
                                    )}
                                </span>
                                <label
                                    htmlFor="file-input"
                                    className="ml-5  text-left text-[14px] mb-1flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                >
                                    <span>Upload a file</span>
                                    <input
                                        type="file"
                                        name="avatar"
                                        id="file-input"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={handleFileInputChange}
                                        className="sr-only"
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                        <div className={`w-full`}>
                            <h4>Already have an account?</h4>
                            <Link to="/" className="text-blue-600 py-2 px-6 underline">
                               Back to home
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SellerSignUp;