import { FaFacebook, FaTwitterSquare, FaGithub} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div className="h-40 md:h-11 mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#2a2a2a" 
            d="M0,32L205.7,288L411.4,64L617.1,192L822.9,96L1028.6,64L1234.3,160L1440,192L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z">
          </path>
        </svg>
      </div>  
      <div className="bg-theme w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className='p-10 font-raleway  text-center'>
            <p className='text-2xl text-white pb-2'>Hecho con 💙 Por</p>
            <div className="h-1 border-2 border-white border-dotted my-3"></div>
            <div className='flex text-2xl text-white w-full justify-evenly'>
              <FaFacebook size={30} className="cursor-pointer" onClick={()=>{
                window.open("https://www.facebook.com/profile.php?id=100040393116170", '_blank');
              }}/>
              <Link to="contacto"><SiGmail size={30}/></Link>
        
              <FaTwitterSquare size={30} className="cursor-pointer" onClick={()=>{
                window.open("https://twitter.com/jrbeduardo", '_blank');
              }}/>
              
              <FaGithub size={30} className="cursor-pointer" onClick={()=>{
                window.open("https://github.com/jrbeduardo", '_blank');
              }}/>
             
            </div>
            <div className="h-1 border-2 border-white border-dotted  my-3 "></div> 
            <p className='text-2xl text-white my-2'>@jrbeduardo</p>
          </div>
        </div>
    </div>
  </>
   
  )
}
