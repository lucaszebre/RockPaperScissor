import React from 'react'

const Footer = (props) => {
    return (
    <div onClick={props.onClick} className='w-full flex flex-col pr-[1.5em] lg:items-end items-center  bottom-[1.5em] absolute'>
        <button className='border-white border-[1px] rounded py-[.5em] px-[1em]  text-white cursor-pointer'>RULES</button>
    </div>
    )
}

export default Footer
