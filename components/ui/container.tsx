interface ContainerProps {
    children:React.ReactNode
}


import React from 'react'

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='mx-auto w-full    bg-body' >
        {children}
    </div>
  )
}

export default Container