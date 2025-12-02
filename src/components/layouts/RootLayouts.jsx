
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"



const RootLayouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayouts