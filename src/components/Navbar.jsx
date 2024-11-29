import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between mb-20 py-6">
        <div className="flex items-center shrink-0" >
        <img  className="mx-2 w-10" src={logo}  />
        {/* MP */}
        </div>
        <div className="flex items-center justify-center m-5 gap-4 text-2xl">
       <FaLinkedin className="mx-2" />
       <FaGithub className="mx-2"/>
       <FaTwitter className="mx-2"/>
       <FaInstagram className="mx-2" />
        </div>

    </nav>
    
    </>
  )
}

export default Navbar