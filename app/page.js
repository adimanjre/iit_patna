"use client"

import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link'
import eyeOn from '@/public/eye-on.png'
import eyeOff from '@/public/eye-off.png'
import { useState, useEffect } from 'react'
import logo from '@/public/logo.png'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [loginData,setLoginData] = useState({
    email:"",password:""
  })
  const [viewPassword, setViewPassword] = useState(false)
  const router = useRouter()
  async function handleSubmit(e){
    e.preventDefault();
    if(loginData.email == "test@gmail.com" && loginData.password == "test"){
      router.push('/dashboard')
    }
  }

  return (
    <main className={`${style.loginBody} h-screen`}>
      <div className='flex flex-row h-screen'>
        <div className='basis-2/3 p-3'>
          <Image src={logo} height="78" width="78"/>
        </div>
        <div className='basis-1/3 flex justify-center items-center h-full p-16 bg-white rounded-l-2xl'>
          <div className='container'>
            <h1 className={`${style.loginHeading}`}>
            Sign in to your  account
            </h1>
            <form>
              <div className='mt-8'>
              <input 
              type='text' 
              placeholder='Email Address'
              onChange={(e)=>setLoginData({...loginData,email:e.target.value})}
              className={`${style.formInput} w-full`}
              />
              </div>
              <div className='mt-4 relative'>
              <input 
              type={!viewPassword?'password':'text'} 
              placeholder='Password'
              onChange={(e)=>setLoginData({...loginData,password:e.target.value})}
              className={`${style.formInput} w-full`}
              >
              </input>
              <Image 
              src={!viewPassword?eyeOff:eyeOn} 
              className='absolute right-3 top-3 right-0' 
              alt="password"
              onClick={()=>setViewPassword(!viewPassword)}
              />
              </div>
              <button
              className={`${style.loginButton} mt-10 w-full`}
              onClick={(e)=>handleSubmit(e)}
              >
                Sign In
              </button>
              <div className='mt-4'>
              <Link href="/register" className={`${style.btmLink}`}>
              Already have an account? <span className={`${style.link}`}>Sign Up</span>
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
