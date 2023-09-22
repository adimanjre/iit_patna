import Image from 'next/image'
import profile from '@/public/profile.png'
import style from '@/app/dashboard/page.module.css'
import Link from 'next/link'

export default function Notification({border}){
    return(
        <div className={`flex gap-1 auto-cols-max border rounded-md p-4 justify-between items-center my-4 ${border}`}>
            <div className='flex items-center'>
                <div className='mr-4'>
                    <Image src={profile} height={48} width={48} alt="profile"/>
                </div>
                <div>
                    <p className={`${style.name}`}>Student Name</p>
                    <p className={`${style.text}`}>Hostel 1, A wing, Room no 1, 1st floor, 1st bed</p>
                </div>
            </div>
            <div className='gap-2 flex'>
                <button className={`${style.assign} rounded-full px-8 py-2`}><Link href="/assign">View</Link></button>
            </div>
        </div>
    )
}