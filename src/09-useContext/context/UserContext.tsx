import React, {createContext, type PropsWithChildren,useState} from 'react'
import type { User } from '../data/user-mock';
// interface UserContextProps{
//     children:React.ReactNode
// }
type AuthStatus='checking'|'authenticated'|'not-authenticated'
interface UserContextProps{
  authStatus:AuthStatus;
  user:User | null;


  // Methods
  login:(userId:number)=>boolean;
  logout:()=>void;
}
export const UserContext=createContext({} as UserContextProps)
export const UserContextProvider = ({children}:PropsWithChildren) => {
    const [authState, setAuthState] = useState<AuthStatus>('checking')
    const [user, setUser] = useState<User | null>(null)
    const handleLogin=(userId:number)=>{
      console.log(userId)
      return true
    }
    const handleLogout=()=>{
      console.log('logout')
    }
    return (
    <UserContext value={{ 
        authStatus:authState,
        user:user,
        login:handleLogin,
        logout:handleLogout

     }}
    >
        {children}
    </UserContext>
  )
}
