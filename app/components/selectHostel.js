import AssignCard from '@/app/components/assignCard'
import style from '@/app/assign/page.module.css'
import hostel from '@/public/hostel.png'

const selectHostel = ({form,setForm,setCurrentForm}) => {
    function handleChecked(){
        setForm({
            ...form,
            hostel:'hostel name'
        })
        console.log('checked1')
       }
  return (
    <>  
        <h1 className={`${style.heading}`}>Please select a hostel</h1>
        <div className="flex gap-5 mt-5">
            <AssignCard image={hostel} name="hostel name" form={form} setForm={setForm} handleChecked={handleChecked}/>
            <AssignCard image={hostel} name="hostel name" form={form} setForm={setForm} handleChecked={handleChecked}/>
            <AssignCard image={hostel} name="hostel name" form={form} setForm={setForm} handleChecked={handleChecked}/>
        </div>
        <div className='mt-8'>
            <button onClick={()=>{setCurrentForm({name:'wing'})}} disabled={form.hostel?false:true} className={`${style.assign} rounded-full px-8 py-2`}>Next</button>
        </div>
    </>
  )
}

export default selectHostel