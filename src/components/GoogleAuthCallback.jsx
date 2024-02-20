import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import Home from './home/Home'
import Contact from './contact/Contact'
import Header from './common/header/Header'
import Footer from './common/footer/Footer'
import App from '../App'

function GoogleAuthCallback() {
  const [auth, setAuth] = useState()
  const [islogin, setIslogin] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (!location) {
      return
    }
    const { search } = location
    console.log(search);
    axios({
      method: 'GET',
      url: `http://localhost:1337/api/auth/google/callback?access_token=${search}`,
    })
      .then((res) => res.data)
      .then(setAuth)
      .then(setIslogin(true))

      localStorage.setItem('islogin', true)
      window.location.reload();
      window.location.href = 'http://localhost:3000/'
  }, [location])
  return 
}

export default GoogleAuthCallback