import Image from 'next/image'
import style from '@/app/assign/page.module.css'

const assignCard = ({ name, image, form, setForm, handleChecked }) => {

    const imageStyle = {
        display: 'none'
    }
    return (
        <div className='border rounded-xl p-5'>
            <Image src={image} style={!image && imageStyle} className='mb-6' />
            <div className='flex gap-3 justify-between'>
                <p>{name}</p>
                <div className='flex justify-between gap-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M16.8875 7.80938L13.1687 4.13437L14.3938 2.90938C14.7292 2.57396 15.1413 2.40625 15.6301 2.40625C16.119 2.40625 16.5308 2.57396 16.8656 2.90938L18.0906 4.13437C18.426 4.46979 18.601 4.87462 18.6156 5.34888C18.6302 5.82312 18.4698 6.22767 18.1344 6.5625L16.8875 7.80938ZM15.6188 9.1L6.34375 18.375H2.625V14.6562L11.9 5.38125L15.6188 9.1Z" fill="#0F669C" />
                    </svg>
                    <p className={`${style.editText}`}>Change</p>
                </div>
            </div>
        </div>
    )
}

export default assignCard