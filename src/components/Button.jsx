

const Button = ({btnText, className}) => {
  return (
   <button className={`py-3.5 px-7 bg-[#FF7628] rounded-[100px] text-white ${className}`}>{btnText}</button>
  )
}

export default Button