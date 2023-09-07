import Nav from '@/app/components/navbar'
import Notifications from '@/app/components/notification'
import style from './page.module.css'
import LineChart from '@/app/components/lineChart'
import BarChart from '@/app/components/barChart'

export default function Dashboard(){
    return(
       <div className=''>
         <Nav active="dashboard"/>
         <div className='grid grid-cols-2 grid-flow-col gap-4 px-10 py-6'>
            <div className={`${style.container} border border-stone-300 rounded-xl p-6`}>
                <h1 className={`${style.heading} mb-4`}>Request from students</h1>
                <Notifications/>
                <Notifications/>
                <Notifications/>
                <Notifications/>
            </div>
            <div className='grid gap-4'>
                <div className={`${style.container} border-stone-300  border rounded-xl p-5`}>
                    <h1 className={`${style.heading2} text-center mb-3`}>Room occupied per floor</h1>
                    <div className=''>
                        <div className='' >
                                <BarChart/>
                        </div>
                    </div>
                </div>
                <div className={`${style.container} border-stone-300 border rounded-xl p-5`}>
                    <h1 className={`${style.heading2} text-center`}>Room un-occupied per floor</h1>
                    <div className=''>
                        <div className=''>
                                <BarChart/>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
    )
}