import AssignCard from '@/app/components/assignCard'
import style from '@/app/assign/page.module.css'
import roomOpen from '@/public/open-door.png'
import roomClose from '@/public/close-door.png'

const selectRoom = ({form,setForm,setCurrentForm}) => {
  function handleChecked4(){
    setForm({
        ...form,
        room:"Room no - 1.1"
    })
    console.log('checked')
   }
  return (
    <>
    <h1 className={`${style.heading}`}>Please select a wing</h1>
    <div className="flex gap-5 mt-5 flex-wrap">
        <AssignCard image={roomOpen} name="Room no - 1" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomClose} name="Room no - 2" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomOpen} name="Room no - 3" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomClose} name="Room no - 4" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomOpen} name="Room no - 5" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomClose} name="Room no - 6" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomOpen} name="Room no - 7" form={form} setForm={setForm} handleChecked={handleChecked4}/>
      <AssignCard image={roomClose} name="Room no - 8" form={form} setForm={setForm} handleChecked={handleChecked4}/>
    </div>
    <div className='mt-8'>
        <button onClick={()=>{setCurrentForm({name:'bed'})}} disabled={form.room?false:true} className={`${style.assign} rounded-full px-8 py-2`}>Next</button>
    </div>
</>
  )
}

export default selectRoom