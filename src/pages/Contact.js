import { ContactForm } from "../components/ContactForm";
import TypewriterComponent from "typewriter-effect";
import { useScroll } from "../hooks/useScroll";
import { MapView } from "../components/MapView";


export const Contact = () => {
  useScroll();
  return (
    <div>
        <div className='bg-theme flex items-center flex-col justify-center h-screen text-white'>
          
          <div className='h-3/5 md:h-3/5'>
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_abqysclq.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
          </div>
          <div className="text-center">
            <p className="font-semibold md:text-2xl text-4xl ">
            <TypewriterComponent
                options={{
                  strings: ['Si prefieres puedes descargar mi curriculum . . .',
                '. . . o bien llena el formulario de más abajo.'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
              
            </p>
            <a href="https://drive.google.com/file/d/1s99GQpOPuuzaHB8D_85czUrPSnUTdgqn/view?usp=sharing" download="CV_eduardo.pdf">
              <button className='bg-azul text-2xl rounded text-white px-5 py-1 mb-5 mt-5 text-xl'>
                descarga mi CV
              </button>
            </a>  
          </div>
        </div>
        <div className="mt-10 flex items-center md:flex-col justify-evenly">
          <ContactForm/>
          <MapView/>
        </div>        
    </div>
  )
}
