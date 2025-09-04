import { useState,useEffect } from "react"
interface Pokemon{
    id:number,
    name:string,
    imageUrl:string
}

interface Props{
    id:number
}

export const usePokemon = ({id}:Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [isloading, setIsloading] = useState(true)
  const getPokemonById= async(id:number)=>{
    setIsloading(true)
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data=await response.json()
    setPokemon({
        id:id,
        name:data.name,
        imageUrl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    })
    setIsloading(false)
  }

  useEffect(()=>{
    getPokemonById(id)

  },[id])





  return {
    // Properties
    isloading,
    pokemon,
    formatedId:id.toString().padStart(3,'0')
  }
   
  
}
