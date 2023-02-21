import React from 'react'
import Image from 'next/image'
const Rules = (props) => {
    return (
    


            
                        <div className={`${props.RulesOpen? 'block' : 'hidden' } p-[2em] bg-white md:w-auto   place-content-center z-10 items-center content-center  place-items-center    w-screen  md:h-auto  h-full    backdrop-brightness-50 rounded  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} >
                            <div className='flex flex-row md:justify-between justify-center w-full mb-[2em]'>
                                <h1 className='text-[2rem] text-blue-900 text-center font-bold'>RULES</h1>
                                <Image onClick={props.onClick} className='md:flex md:relative absolute bottom-[3em]  md:bottom-0 object-contain  ' src='/images/icon-close.svg' width={19.09} height={19.09} />
                            </div>
                            <div className='items-center flex flex-col mt-[2em]'>
                                <Image className='items-center place-content-center flex ' src='/images/image-rules-bonus.svg' width={336} height={330} />
                            </div>
                        </div>


    )
}

export default Rules
