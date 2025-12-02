import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/bannerBg.jpg')] bg-no-repeat bg-cover bg-center pb-[100px] pt-[90px]">
      <Container>
        <Heading
          className={"pt-[150px] font-open font-extrabold text-[72px] w-[686px]"}
          text={"We Are Digital Marketing Agency"}
          as={"h1"}
        />
        <Heading
          className={"pt-6 font-paprika text-[20px] text-[#6C7D93] w-[571px] leading-9"}
          text={
            "Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "
          }
          as={"p"}
        />
        <Button className={"capitalize font-open text-[20px] font-bold my-6"} btnText={"get free quoto"}/>
      </Container>
    </div>
  );
};

export default Banner;
