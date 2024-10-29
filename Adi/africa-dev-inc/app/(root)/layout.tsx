import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default RootLayout
