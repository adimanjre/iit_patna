import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo.png'
import profile from '@/public/profile.png'

export default function nav({active}){
    return(
        <nav className='navBar px-10'>
            <div className='flex justify-between items-center p-2'>
                <div>
                    <Image src={logo} alt="logo" height={48} width={48}/>
                </div>
                <div className='flex gap-8'>
                    <div>
                        <Link href="/dashboard" className={`${active == 'dashboard'?"active":''} navlinks`}>Dashboard</Link>
                    </div>
                    <div>
                        <Link href="/dashboard" className={`${active == 'room-assign'?"active":''} navlinks`}>Room Assign</Link>
                    </div>
                    <div>
                        <Link href="/dashboard" className={`${active == 'room-change'?"active":''} navlinks`}>Room Assign</Link>
                    </div>
                    <div>
                        <Link href="/dashboard" className={`${active == 'room-surrender'?"active":''} navlinks`}>Room Surrender</Link>
                    </div>
                    <div>
                        <Link href="/dashboard" className={`${active == 'mess'?"active":''} navlinks`}>Mess</Link>
                    </div>
                    <div>
                        <Link href="/dashboard" className={`${active == 'fees'?"active":''} navlinks`}>Fees</Link>
                    </div>
                    <div>
                        <Link href="/dashboard" className={`${active == 'profile'?active:''} navlinks`}>
                            <Image src={profile}/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}