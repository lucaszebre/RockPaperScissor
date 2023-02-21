import React from 'react'
import Image from 'next/image'
import {DataIndexContext} from '../../pages/index.js'

const Step1 = () => {
    const {DataIndex, setIndex} = React.useContext(DataIndexContext)
    return (
    <div className={`${DataIndex.Selected? 'hidden': 'flex'} -z-10  p-[2em] flex-row items-center place-content-center mt-[2em]`}>
        <div className='relative '>
            <Image src={"/images/bg-pentagon.svg"} alt="pentagon-pattern" width={345} height={345} />
            <div onClick={() => setIndex({type: 'SCISSORS',payLoad: DataIndex })} className='-top-[3em] cursor-pointer right-[6em] absolute rounded-full bg-gray-50  border-violet-600 md:p-[2em] p-[4vw]  border-[3vw] md:border-[1em]'>
                <Image  src="/images/icon-scissors.svg" alt="pentagon-pattern" width={49} height={59} />

            </div>
            <div onClick={() => setIndex({type: 'ROCK',payLoad: DataIndex })}  className=' bottom-[-3em] cursor-pointer    right-0 absolute rounded-full bg-gray-50  border-yellow-600 md:p-[2em] p-[4vw]  border-[3vw] md:border-[1em]'>
            <Image  src={"/images/icon-rock.svg"} alt="pentagon-pattern" width={61} height={59} />

            </div>
            <div onClick={() => setIndex({type: 'LiZARD',payLoad: DataIndex })}  className='bottom-[-3em] cursor-pointer  left-0 absolute rounded-full bg-gray-50  border-green-600 md:p-[2em] p-[4vw]  border-[3vw] md:border-[1em]'>
            <Image  src="/images/icon-lizard.svg" alt="pentagon-pattern" width={61} height={59} />

            </div>
            <div onClick={() => setIndex({type: 'SPOCK',payLoad: DataIndex })}  className='absolute cursor-pointer  bottom-[7em] left-[-3em] rounded-full bg-gray-50  border-red-600 md:p-[2em] p-[4vw]  border-[3vw] md:border-[1em]'>
            <Image  src="/images/icon-spock.svg" alt="pentagon-pattern" width={44} height={59} />
            </div>
            <div onClick={() => setIndex({type: 'PAPER',payLoad: DataIndex })}  className='absolute cursor-pointer  bottom-[7em] right-[-3em]  rounded-full bg-gray-50  border-pink-600 md:p-[2em] p-[4vw]  border-[3vw] md:border-[1em]'>
            <Image  src="/images/icon-paper.svg" alt="pentagon-pattern" width={55} height={55} />

            </div>
        </div>
    </div>
    )
}

export default Step1
