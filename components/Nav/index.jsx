import React from 'react'
import {DataIndexContext} from '../../pages/index.js'

const Nav = () => {
    const {DataIndex, setIndex,ActionIndex,setRandomNumber,RandomNumber,setScore,DataScore} = React.useContext(DataIndexContext)
    return (
    <div className='flex w-full  items-center place-content-center pt-[2em]'>
        <div className='p-4 flex md:w-[50%]  w-[90%] justify-between border-gray-50 border-[1px] h-[8em] rounded'>
        
            <img src='/images/logo-bonus.svg' width={109} height={109}  />
            <div className='h-[6em] bg-slate-50 w-[6em] rounded  '>
                <h2 className='text-blue text-center font-bold'>score</h2>
                <p className='mt-2 text-4xl text-center font-bold text-gray-700'>{DataScore.Score}</p>
            </div>
    
        </div>
    </div>
    
    )
}

export default Nav
