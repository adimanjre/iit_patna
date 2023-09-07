import AssignCard from '@/app/components/assignCard'
import style from '@/app/assign/page.module.css'
import closeBed from '@/public/close-bed.png'
import openBed from '@/public/open-bed.png'


const selectBed = ({form,setForm,setCurrentForm}) => {
  function handleChecked4(){
    setForm({
        ...form,
        bed:"bed no - 1.1"
    })
    console.log('checked')
   }
  return (
    <>
    <h1 className={`${style.heading}`}>Please select a wing</h1>
    <div className="flex gap-5 mt-5">
        <AssignCard image={openBed} name="bed no - 1.1" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={closeBed} name="bed no - 1.2" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={closeBed} name="bed no - 1.3" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={closeBed} name="bed no - 1.4" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={closeBed} name="bed no - 1.5" form={form} setForm={setForm} handleChecked={handleChecked4}/>
    </div>
    <div className='mt-8'>
        <button onClick={()=>{setCurrentForm({name:'final'})}} disabled={form.room?false:true} className={`${style.assign} rounded-full px-8 py-2`}>Next</button>
    </div>
</>
  )
}

export default selectBed