import React from 'react'
import AssignCard from '@/app/components/finalAssignCard'
import style from '@/app/assign/page.module.css'
import hostel from '@/public/hostel.png'
import wing from '@/public/wing.png'
import roomOpen from '@/public/open-door.png'
import roomClose from '@/public/close-door.png'
import closeBed from '@/public/close-bed.png'
import openBed from '@/public/open-bed.png'

const finalAssign = ({ form, setForm, setCurrentForm }) => {
    return (
        <>
            <h1 className={`${style.heading} mb-5`}>Final room information</h1>
            <div className='flex gap-5 w-2/3'>
                <AssignCard image={hostel} className="" name={form.hostel} form={form} setForm={setForm} />
                <AssignCard image={wing} name={form.wing} form={form} setForm={setForm} />
                <div className='grid gap-5'>
                    <AssignCard image="" name={form.floor} className="col-span-2" form={form} setForm={setForm} />
                    <div className='flex gap-5'>
                        <AssignCard image={roomOpen} name={form.room} form={form} setForm={setForm} />
                        <AssignCard image={openBed} name={form.bed} form={form} setForm={setForm} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default finalAssign