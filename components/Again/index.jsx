import React from 'react'
import {DataIndexContext} from '../../pages/index.js'


const Again = () => {
    const {DataIndex, setIndex,DataScore} = React.useContext(DataIndexContext)
    return (
    <div className='flex flex-col place-content-center items-center'>
        <h1 className='text-white mb-[1em] font-bold text-center md:text-base text-xs'>YOU {DataScore.State}</h1>
        <button onClick={() => setIndex({type: 'RESET',payLoad: DataIndex })} className='bg-white rounded border-0 text-blue-200 px-2 py-1 md:text-base text-xs'>PLAY AGAIN</button>
    </div>
    )
}

export default Again
