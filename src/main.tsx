import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HookApp } from './HookApp'
import './index.css'
// import { InstagromApp } from './07-use_Optimistic/instagromApp'
// import { ScrambleWords } from './o5-useReducer/ScrambleWords'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEfect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEfect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TasksApp } from './o5-useReducer/TaskApp'
// import { MemoHook } from './06-memo-hook/MemoHook'
import { ProffesionalAPP } from './09-useContext/ProffesionalAPP'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage/> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <InstagromApp /> */}
    <ProffesionalAPP />
  </StrictMode>,
)
