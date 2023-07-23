'use client'

import { createContext, useContext, useState,} from 'react'





const Context = createContext<any>(null)

export const StateContext = ({ children }:any) => {
  const [showCart, setShowCart] = useState(false)
  


return (
  <Context.Provider
    value={{
      showCart,setShowCart
    }}
  >
    {children}
  </Context.Provider>
)






}


export const useStateContext = () => useContext(Context)