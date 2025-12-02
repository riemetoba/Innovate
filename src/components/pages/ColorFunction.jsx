

const ColorFunction = ({ text, className }) => {
    let functionalColor = text.replace("#", "<span class='komola'>").replace("#", "</span>")
  return (
    <h1 className={`${className}`}  dangerouslySetInnerHTML={{ __html: functionalColor}}></h1>
  )
}

export default ColorFunction