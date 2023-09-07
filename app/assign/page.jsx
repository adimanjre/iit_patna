"use client"

import Navbar from '@/app/components/navbar'
import Notification from "../components/notification"
import { useState } from 'react'
import Hostel from '@/app/components/selectHostel'
import Wing from '@/app/components/selectWing'
import Floor from '@/app/components/selectFloor'
import Room from '@/app/components/selectRoom'
import Bed from '@/app/components/selectBed'
import Final from '@/app/components/finalAssign'
import style from '@/app/assign/page.module.css'

export default function Assign() {
    const [form,fillForm] = useState({
        hostel:'',wing:'',floor:'',room:'',bed:''
    })
    const [currentForm,setCurrentForm] = useState({
        name:'hostel'
    })
  return (
    <div className="flex flex-col">
            <div className="col-start-1 col-end-13">
            <Navbar border="no-border"/>
            </div>
            <div className="px-10 col-start-1 col-end-6">
                <div className="">
                    <Notification/>
                </div>
                <div className='border border-b-slate-200 my-8'></div>
                
                <div>
                    {
                        currentForm.name == "hostel" 
                        ? <Hostel form={form} setForm={fillForm} setCurrentForm={setCurrentForm} />
                        : currentForm.name == "wing" 
                        ? <Wing form={form} setForm={fillForm} setCurrentForm={setCurrentForm}/>
                        : currentForm.name == "floor"
                        ? <Floor form={form} setForm={fillForm} setCurrentForm={setCurrentForm}/>
                        : currentForm.name == "room"
                        ? <Room form={form} setForm={fillForm} setCurrentForm={setCurrentForm}/>
                        : currentForm.name == "bed"
                        ? <Bed form={form} setForm={fillForm} setCurrentForm={setCurrentForm} />
                        : <Final form={form} setForm={fillForm} setCurrentForm={setCurrentForm} />
                    }
                </div>
            </div>
        </div>
  )
}
