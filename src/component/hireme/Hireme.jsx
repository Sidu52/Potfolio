import React from 'react'
import './Hireme.scss'
import background from '../../Image/hire/3d_background.png'
import boy from '../../Image/hire/3d_boy.png'
export default function Hireme() {
    return (
        <div className='hireme_container relative h-96 flex items-center justify-center'>
            <img src={background} alt="" className=' absolute top-0' />
            <img src={boy} alt="" className='  absolute top-0' />
            <div className=' w-4/5'>
                <h1 className='hireme_heading relative font-medium'>Hire Me for Your Next Project</h1>
                {/* <button className='px-4 py-2 rounded-md border-none bg-orange-300 font-medium'>Contack me</button> */}
            </div>

        </div>

    )
}
