
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { FaChevronDown } from "react-icons/fa";
import Button from '../Button';



const Header = () => {
  return (
    <div>
        <Container>
            <Flex className={'justify-between'}>
                <div className=''>
                    <Image imgSrc={logo}/>
                </div>
                <div>
                    <ul className='flex items-center gap-x-3'>
                        <li className='flex items-center hover:text-[#FF7628] duration-300'>Home <FaChevronDown className='ml-1.5'/></li>
                        <li className='flex items-center hover:text-[#FF7628] duration-300'>About <FaChevronDown className='ml-1.5'/></li>
                        <li className='flex items-center hover:text-[#FF7628] duration-300'>Service <FaChevronDown className='ml-1.5'/></li>
                        <li className='flex items-center hover:text-[#FF7628] duration-300'>Portfolio <FaChevronDown className='ml-1.5'/></li>
                        <li className='flex items-center hover:text-[#FF7628] duration-300'>price <FaChevronDown className='ml-1.5'/></li>
                        <li className='flex items-center hover:text-[#FF7628] duration-300'>Blog <FaChevronDown className='ml-1.5'/></li>
                    </ul>
                </div>
                <div className=''>
                    <Button btnText={"Contact Us"}/>
                </div>
            </Flex>

        </Container>
    </div>
  )
}

export default Header