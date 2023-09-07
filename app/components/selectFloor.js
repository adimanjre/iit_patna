import AssignCard from '@/app/components/assignCard'
import style from '@/app/assign/page.module.css'


const selectFloor = ({form,setForm,setCurrentForm}) => {
  function handleChecked3(){
    setForm({
        ...form,
        floor:'1st floor'
    })
    console.log('checked1')
   }
  return (
    <>
    <h1 className={`${style.heading}`}>Please select a wing</h1>
    <div className="flex gap-5 mt-5">
        <AssignCard image="" name="1st floor" form={form} setForm={setForm} handleChecked={handleChecked3} />
        <AssignCard image="" name="2nd floor" form={form} setForm={setForm} handleChecked={handleChecked3}/>
        <AssignCard image="" name="3rd floor" form={form} setForm={setForm} handleChecked={handleChecked3} />
        <AssignCard image="" name="4th floor" form={form} setForm={setForm} handleChecked={handleChecked3}/>
        <AssignCard image="" name="5th floor" form={form} setForm={setForm} handleChecked={handleChecked3} />
        <AssignCard image="" name="6th floor" form={form} setForm={setForm} handleChecked={handleChecked3}/>
    </div>
    <div className='mt-8'>
        <button onClick={()=>{setCurrentForm({name:'room'})}} disabled={form.floor?false:true} className={`${style.assign} rounded-full px-8 py-2`}>Next</button>
    </div>
</>
  )
}

export default selectFloor