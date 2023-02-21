import React, { use } from 'react'
import Image from 'next/image'
import Again from '../Again'
import {DataIndexContext} from '../../pages/index.js'
import data from 'public/data.json'
import { useEffect} from 'react'
const Step2 = () => {
    const {DataIndex, setIndex,ActionIndex,setRandomNumber,RandomNumber,setScore,DataScore,Active,setActive} = React.useContext(DataIndexContext)
    
    

        // siscors  beat paper and lizard
        // spock  beats scissors and rock
        // lizard beats spock and paper
        // rock beats lizard and scissors
        // paper beats rock and spock
    const WINORLOOSE = (user,computer) => {
        console.log(`choix user ${user}`)
        console.log(`choix user ${computer}`)
        if (user === computer) {
            return "DRAW"
        }else{
        switch (user) {
        case 0:
            switch (computer) {
                case 2:
                    return "WIN"
                case 4:
                    return "WIN"
                default:
                    return "LOOSE"
        }
        case 1:
            switch (computer) {
                case 3:
                    return "WIN"
                case 0:
                    return "WIN"
                default:
                    return "LOOSE"
        }
        case 2:
            switch (computer) {
                case 4:
                    return "WIN"
                case 1:
                    return "WIN"
                default:
                    return "LOOSE"
        }
        case 3:
            switch (computer) {
                case 2:
                    return "WIN"
                case 0:
                    return "WIN"
                default:
                    return "LOOSE"
        }

        case 4:
            switch (computer) {
                case 1:
                    return "WIN"
                case 3:
                    return "WIN"
                case 0:
                    return "LOOSE"
            }
        default:
            return "LOOSE"
        
    }
}
    }

    const [AgainActive, setAgainActive] = React.useState(false);

    useEffect(() => {
        setAgainActive(false);
        const timerId = setTimeout(() => {
            setAgainActive(true);
        }, 4000);
    }, [DataIndex.index]);

    
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 5);
        setRandomNumber(randomNumber);
    }, [DataIndex.index]);

    useEffect(() => {
        setActive(false);
        const timerId = setTimeout(() => {
            setActive(true);
            setScore({type :WINORLOOSE(DataIndex.index, RandomNumber),payLoad:DataScore});
        }, 3000);
    
        return () => {
            clearTimeout(timerId);    
        }
        }, [RandomNumber]);

        return (
    <div className={`${!DataIndex.Selected ? 'hidden' : 'flex'} flex-row items-center content-center place-content-center mt-[2rem] `}>
        
            <div className='flex flex-col mr-[3em] '>
                <h1 className='text-center text-white font-bold' >YOU PICKED</h1>
                <div className={`mt-[3em] cursor-pointer  rounded-full bg-gray-50 md:p-[4em] p-[3vw] border-${data[DataIndex.index].color}-600 border-[1em] md:border-[2em]`}>
                    <Image className="min-w-[35px] min-h-[52px] " src={data[DataIndex.index].Image} alt="pentagon-pattern"  width={90} height={120} />
                </div>
            </div>
            <div className={`${AgainActive?'visible':'hidden'} mr-[3em]`} >
                <Again />
            </div>
            <div className='flex flex-col mr-[3em] '>
                <h1 className='text-center text-white font-bold' >THE MOUSE PICKED</h1>
                <div className={`${Active?'visible':'invisible'} mt-[3em] cursor-pointer  rounded-full bg-gray-50 md:p-[4em] p-[3vw] border-${data[RandomNumber].color}-600 border-[1em] md:border-[2em]`}>
                    <Image className="min-w-[35px] min-h-[52px] " src={data[RandomNumber].Image} alt="pentagon-pattern"  width={90} height={120} />
                </div>
            </div>
            
            
    
    
    </div>
    )
}

export default Step2
