import Image from "../Image"
import errorGif from "../../assets/error.gif"
import { useNavigate } from "react-router-dom"



const Error = () => {
  const navigate = useNavigate()
  const handleClick = () => {
     navigate("/");
  };
  return (
    <>
    <Image className={"w-[900px] h-[800px] m-auto"} imgSrc ={errorGif}/>
    <button className="bg-amber-500 py-4 px-5 rounded-[100px] text-white" onClick={handleClick}>
    Get Back
  </button>
    </>
  )
}

export default Error