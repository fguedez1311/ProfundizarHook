import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster, toast } from 'sonner'
// import { HookApp } from './HookApp'
// import { InstagromApp } from './07-use_Optimistic/instagromApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEfect/TrafficLightWithEffect'
// import { ScrambleWords } from './o5-useReducer/ScrambleWords'
// import { TrafficLightWithHook } from './02-useEfect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TasksApp } from './o5-useReducer/TaskApp'
// import { MemoHook } from './06-memo-hook/MemoHook'
import { ProffesionalAPP } from './09-useContext/ProffesionalApp'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
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
