// import { Input,Button, Divider, AspectRatio } from '@chakra-ui/react'
import { Box, Button,Input, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Login.css'
// import {createUserWithEmailAndPassword,signInWithPopup} from "firebase/auth"
// import { auth, googleProvider } from '../firebase-config/config'
// import { Link ,useHistory} from "react-router-dom";
// import { useUserAuth } from "../context/Authcontext";
// import { Alert } from "@chakra-ui/react";
// import { Payment } from './Payment'
import { useLocation,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export const Login = () => {
    const [identifier,setEmail] = useState("");
    const [password,setPass] = useState("")
    const [error,setError] = useState("")
    const [userData, setUserData] = useState(null);
    // const {login,googleSignin} = useUserAuth()
    const history = useNavigate()

    const [auth, setAuth] = useState()
    const location = useLocation()
    // console.log(location);
    // const history = useHistory();

    // handle sign in 
    // const handlesignin = async() => {
    //   try{
    //     await login(identifier,password)
    //     alert("Login Successfully")
    //     history("/Turfdata")
    //   }catch(err){
    //     setError(err.message)
    //   } 
    // }
    const signinWithgoogle = async() => {
    
    }
   
    useEffect(() => {
      if (!location) {
        return;
      }
      const { search } = location;
      console.log(search);
      axios({
        method: 'GET',
        url: `http://localhost:1337/auth/google/callback?${search}`,
      })
      .then((res) => res.data)
      .then(setAuth)
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
    }, [location]);

    const handlePost = async () => {
        
      try {
        const response = await axios.post("http://localhost:1337/api/auth/local", {
         
             identifier,
             password
          
        });
        console.log(response.data);
        history("/turf")
        
        const responseData = response.data.user.id;
        const emailId = response.data.user.email;
        localStorage.setItem('emailId', emailId.toString());
        console.log(responseData)
        localStorage.setItem('apiResponse', responseData.toString());
        // alert('Data posted successfully!');
       
      } catch (error) {
        // console.error("Error posting data:", error);
        setError("Error posting data");
      }
    };
   

   
    
    
  return (
    <div id='loginContainer'>
        <div id='loginBg'>
            {/* <img src={loginBg} alt="" /> */}
        </div>
        <div id='loginform'>
            <h1 id='headingLogin'>LOGIN</h1>
            {/* {
            error && <Alert variant={"subtle"} status='error'>{error}</Alert>
           } */}
            <Box>
              <Typography id='username'>USER NAME</Typography>
              <input type="text " id="usernameInput" onChange={(e)=>setEmail(e.target.value)} />
            </Box>
            <Box>
               <Typography id='password'>PASSWORD</Typography>
               <input type="password"  id="passwordInput"  onChange={(e)=>setPass(e.target.value)}/>
            </Box>
            <Button id='loginFormBtn' onClick={handlePost}>Login </Button>
            <Button id='loginwithBtn' 
            onClick={() =>
              (window.location = 'http://localhost:1337/api/connect/google')
              
            }
            >
   
                <img id='glogo' src='https://res.cloudinary.com/dx78kzenz/image/upload/v1702027041/google_logo_ff05da96f9.png' alt="" />
         
              {/* <Button id='postDataBtn' onClick={handlePost}>
        Post Data
      </Button> */}

              <p id='gtext'>Login via Google</p>
            </Button>
             <p style={{color:"#C5C6C7"}}>Don't have an account? <Link to={"/signup"} style={{color:"#45A29E",fontWeight:"bold"}}>Sign Up</Link></p>
        </div> 
    </div>
  )
}