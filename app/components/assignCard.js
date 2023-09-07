import Image from 'next/image'
import style from '@/app/assign/page.module.css'

const assignCard = ({name,image,form,setForm, handleChecked}) => {
    
   const imageStyle = {
    display:'none'
   }
  return (
    <div className='border rounded-xl p-5'>
        <Image src={image} style={!image && imageStyle} className='mb-6'/>
        <div className='flex justify-between gap-3 items-center'>
            <p className={`${style.cardName}`}>{name}</p>
            <label className={`${style.switch}`}>
              <input type="checkbox" onClick={handleChecked}/>
              <div className={`${style.slider}`}></div>
            </label>
           
        </div>
    </div>
  )
}

export default assignCard