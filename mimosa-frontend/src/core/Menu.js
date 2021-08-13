import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import NavMenuMobile from './Navbar/NavMenuMobile'


const Home = () => {

  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
    <Navbar toggle={toggle} />
    <NavMenuMobile isOpen={isOpen} toggle={toggle} />
    </>
  )
}

export default Home
