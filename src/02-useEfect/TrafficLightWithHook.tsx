// import { useState,useEffect } from "react";
import {useTrafficLight} from '../hooks/useTrafficLight'
// const colors={
//     red:"bg-red-500 animate-pulse",
//     yellow:"bg-yellow-500 animate-pulse",
//     green:"bg-green-500 animate-pulse",
// }

// // type TrafficLightColor='red'| 'yellow' | 'green'
// // Otra forma de tipar los colors
// type TrafficLightColor=keyof typeof colors

export const TrafficLightWithHook = () => {
  const {countdown,light,greenLight,redLight,yellowLight,percentaje}=useTrafficLight(5)
  // const [light, setLight] = useState<TrafficLightColor>('red')
  // const [countdown, setCountdown] = useState(5)
  // useEffect(() => {
  //   if(countdown===0)  return
      
    
    
  //   const intervalId=setInterval(()=>{
  //       console.log("setInterval llamado")
  //       setCountdown((prev)=>prev-1)
  //   },1000)
  
  //   return () => {
  //     console.log("Cleanup effect")
  //     clearInterval(intervalId)
  //   }
  // }, [countdown]) 
  // useEffect(()=>{
  //     if(countdown>0) return
  //     setCountdown(5)
  //     if(light==='red'){
  //       setLight('green')
  //       return
  //     }
  //     if(light==='yellow'){
  //       setLight('red')
  //       return
  //     }
  //     if(light==='green'){
  //       setLight('yellow')
  //       return
  //     }     
     
    
  // },[countdown,light])

  return (
   
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
         <h1 className="text-white text-3xl font-thin">Semaforo con useEffect</h1>
         <h2 className="text-white text-xl">Countdown: {countdown}</h2>
         <div className="w-64 bg-gray-700 rounded-full h-2">
            <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear "
                style={{ width:`${percentaje}%` }}
            >

            </div>
            
         </div>
        <div className={`w-32 h-32 ${redLight} rounded-full`}></div>

        <div className={`w-32 h-32 ${yellowLight} rounded-full`}></div>

        <div className={`w-32 h-32 ${greenLight} rounded-full`}></div>

        
      </div>
    </div>
  );
};
