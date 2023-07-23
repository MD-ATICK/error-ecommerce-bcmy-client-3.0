import { React, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../server.js";
import { toast } from "react-hot-toast";

const Singup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [loading, setloading] = useState(false);
  // const [disable, setdisable] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true)
      const form = new FormData();
      form.append("image", avatar);
      const url = `https://api.imgbb.com/1/upload?key=6226ca30d95b139a79184223cfbc266a`;
      const { data, status } = await axios.post(url, form)
      if (status === 200) {
        try {
          const res = await axios.post(`${server}/register`, { name, email, password, avatar: data.data.url }, { headers: { "Content-Type": "application/json" } })
          if (res.status === 201) {
            setName('')
            setEmail('')
            setPassword('')
            setAvatar(null)
            navigate('/sign-in')
            // toast.success('2 mintues You cannot Submit')
            // toast.success(res.data.message)
          } else {
            toast.error('Failed to resgister')
          }
          setloading(false)
        } catch (error) {
          setloading(false)
          toast.error(<p className='text'>{error.response.data.error}</p>)
        }

      } else {
        toast.error('Image convert url failed')
      }

    } catch (error) {
    }
  }


  return (
    <div className="min-h-[83vh] bg-blue-500 flex flex-col justify-center py-0 sm:px-6 lg:px-8">
      {loading ? <p className="text text-blue-600 py-2 px-6 shadow-lg my-2  bg-white rounded-md">Loading...</p> : ''}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-3 text-center text-3xl font-extrabold text-white">
          Register as a new user
        </h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block tracking-wide text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border-[2px] border-gray-600 mt-3 rounded shadow-sm placeholder-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block tracking-wide text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border-[2px] border-gray-600  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block tracking-wide text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border-[2px] border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="block tracking-wide text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-12 w-12 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full cursor-pointer shadow-md w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-12 w-12" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-6  tracking-wideflex cursor-pointer items-center justify-center px-6 py-[10px] border border-gray-500 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    required
                    onChange={(e) => {
                      setAvatar(e.target.files[0])
                    }}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className='group relative w-full cursor-pointer h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
              >
                Submit
              </button>
            </div>
            <div className={`flex items-center w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/sign-in" className="text-blue-600 underline pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Singup