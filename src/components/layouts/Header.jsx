
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import { FaChevronDown } from "react-icons/fa";
import Button from '../Button';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
        <Container>
            <Flex className={'justify-between'}>
                <div className=''>
                    <Link to={"/"}>
                    <Image imgSrc={logo}/>
                    </Link>
                </div>
                <div>
                    <ul className='flex items-center gap-x-3'>
                        <li><Link to={"/"} className='flex items-center hover:text-[#FF7628] duration-300'>Home <FaChevronDown className='ml-1.5'/></Link></li>
                        <li><Link to={"/about"} className='flex items-center hover:text-[#FF7628] duration-300'>About <FaChevronDown className='ml-1.5'/></Link></li>
                        <li><Link to={"/service"} className='flex items-center hover:text-[#FF7628] duration-300'>Service <FaChevronDown className='ml-1.5'/></Link></li>
                        <li><Link to={"/portfolio"} className='flex items-center hover:text-[#FF7628] duration-300'>Portfolio <FaChevronDown className='ml-1.5'/></Link></li>
                        <li><Link to={"/price"} className='flex items-center hover:text-[#FF7628] duration-300'>Price <FaChevronDown className='ml-1.5'/></Link></li>
                        <li><Link to={"/blog"} className='flex items-center hover:text-[#FF7628] duration-300'>Blog <FaChevronDown className='ml-1.5'/></Link></li>
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