"use client"

import Image from 'next/image'
import style from './page.module.css'
import Link from 'next/link'
import eyeOn from '@/public/eye-on.png'
import eyeOff from '@/public/eye-off.png'
import { useState, useEffect } from 'react'
import logo from '@/public/logo.png'

export default function Home() {
  const [viewPassword, setViewPassword] = useState(false)

  async function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <main className={`${style.loginBody} h-screen`}>
      <div className='flex flex-row h-screen'>
        <div className='basis-2/4 p-3'>
          <Image src={logo} height="78" width="78"/>
        </div>
        <div className='basis-2/4 flex justify-center items-center min-h-full p-24 bg-white'>
          <div className='container'>
            <h1 className={`${style.loginHeading} text-center mt-10`}>
            Request for new room
            </h1>
            <form>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='First Name'
                className={`${style.formInput} w-full`}
                />
              </div>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='Last Name'
                className={`${style.formInput} w-full`}
                />
              </div>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='Email Address'
                className={`${style.formInput} w-full`}
                />
              </div>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='Phone Number'
                className={`${style.formInput} w-full`}
                />
              </div>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='Date of Birth(DD-MM-YYYY)'
                className={`${style.formInput} w-full`}
                />
              </div>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='Address line-1'
                className={`${style.formInput} w-full`}
                />
              </div>
              <div className='mt-8'>
                <input 
                type='text' 
                placeholder='Address line-2'
                className={`${style.formInput} w-full`}
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
