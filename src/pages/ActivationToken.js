import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { server } from '../server'

function ActivationToken() {
    const { token } = useParams()
    const [error, seterror] = useState(null);

    const activateEmail = async () => {
        try {
          const res = await axios.post(`${server}/activation` , {activationToken : token} , { headers : { "Content-Type" : "application/json"} })
          console.log(res.data)
          seterror(false)
        } catch (error) {
          seterror(true)
          toast.error(<p className='text'>{error.response.data.message}</p>)
          console.log(error.response.data.message)
        } 
    }
    
    useEffect(() => {
      if(token){
        activateEmail()
      }
    }, []);
  return (
    <div style={{width : '100%' , height : '100vh' , display : 'flex' , justifyContent : 'center' , alignItems : "center"}}>
      { error === null ? '' : 
         
        error ? ( <p>Your token is Exprided..!!</p> ) : ( <p> Your account has been <span style={{fontSize : '17px' , fontWeight : '500' , color : 'green'}}>Activate</span></p> )
      
      }
        
    </div>
  )
}

export default ActivationToken