import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Rules from '@/components/Rules'
import { Inter } from '@next/font/google'
import Step1 from '@/components/Step1'
import Step2 from '@/components/Step2'
import { useState , useReducer } from 'react'
import data from 'public/data.json'

import { createContext } from 'react'
const inter = Inter({ subsets: ['latin'] })
export const DataIndexContext = createContext()

export default function Home() {
  const [RulesOpen, setRules] = useState(false)

  const handleRules = () => {
    setRules(!RulesOpen)
  }


const DataInitial = {
  index: 0,
  Selected:false
}

  

const ActionIndex = (state, action) => {

  switch (action.type) {
    case 'ROCK':
      
    
      return {
        index: 3,
        Selected:true
        
      }
    
    case 'PAPER':
      return {
        
        index: 4,
        Selected:true
      }
    
    case 'SCISSORS':
      
      return {
        index: 0,
        Selected:true
        
      }
      case 'LiZARD':
    
        
      return {
        index: 2,
        Selected:true
      }
      case 'SPOCK':
      
      return {
        index: 1,
        Selected:true
      }

      case 'RESET':
        return {
          
          index: 0,
          Selected:false
        }

    default:
      return state
  }
}


const [DataIndex, setIndex] = useReducer (ActionIndex, DataInitial)
const [RandomNumber, setRandomNumber] = useState(0)

const ActionScore = (state, action) => {
  switch (action.type) {
    case "WIN":
      console.log(state.Score)
      return {
        Score: state.Score + 1,
        State: "WIN"
      }
    case "LOOSE":
      return {
        Score: state.Score - 1,
        State: "LOOSE"
      }
    case "DRAW":
      return {
        Score: state.Score,
        State: "DRAW"
      }
    default:
      return state
  }
}

const [Active, setActive] = useState(false)



const InitScore ={
  Score:0,
  State : ""
}
    
const [DataScore, setScore] = useReducer (ActionScore, InitScore)
  return (
    <>
      
      <DataIndexContext.Provider value={{DataIndex, setIndex,ActionIndex,setRandomNumber,RandomNumber,setScore,DataScore,Active,setActive}}>
      <Nav />
      <Rules
        onClick={handleRules}
        RulesOpen={RulesOpen}
      />
      <Step1 
    
      /> 
      <Step2 />
   

      </DataIndexContext.Provider>
      <Footer
        onClick={handleRules}
        
      />
    </>
  )
}
