
const Container = ({ children, clsName }) => {
  return <div className={`max-w-[1170px] m-auto ${clsName}`}>{children}</div>;
};

export default Container;
