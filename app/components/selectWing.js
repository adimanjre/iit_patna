import AssignCard from '@/app/components/assignCard'
import style from '@/app/assign/page.module.css'
import wing from '@/public/wing.png'

const selectWing = ({form,setForm,setCurrentForm}) => {
  function handleChecked2(){
        setForm({
            ...form,
            wing:'A-wing'
        })
        console.log('checked1')
       }
  return (
    <>
    <h1 className={`${style.heading}`}>Please select a wing</h1>
    <div className="flex gap-5 mt-5">
        <AssignCard image={wing} name="A-wing" form={form} setForm={setForm} handleChecked={handleChecked2}/>
        <AssignCard image={wing} name="B-wing" form={form} setForm={setForm} handleChecked={handleChecked2}/>
        <AssignCard image={wing} name="C-wing" form={form} setForm={setForm} handleChecked={handleChecked2}/>
        <AssignCard image={wing} name="D-wing" form={form} setForm={setForm} handleChecked={handleChecked2}/>
    </div>
    <div className='mt-8'>
        <button onClick={()=>{setCurrentForm({name:'floor'})}} disabled={form.wing?false:true} className={`${style.assign} rounded-full px-8 py-2`}>Next</button>
    </div>
</>
  )
}

export default selectWing