import React, {type PropsWithChildren} from 'react'
// interface UserContextProps{
//     children:React.ReactNode
// }
export const UserContextProvider = ({children}:PropsWithChildren) => {
   
    return (
    <>
        {children}
    </>
  )
}
