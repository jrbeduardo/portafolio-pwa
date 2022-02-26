import { projectsData } from '../resources/projects'
import AOS from 'aos';
import { useScroll } from "../hooks/useScroll";
AOS.init({
  duration: 1000
});
export const Projects = () => {
  useScroll();
  return (
    <>
      <div className='flex flex-col'>
       <div className='h-screen w-full '>
         <div className='h-3/4 bg-theme '>
            <lottie-player 
              src="https://assets8.lottiefiles.com/packages/lf20_zpymeot9.json"  background="transparent"  
              speed="1"  
              loop  
              autoplay></lottie-player>
         </div>
         <p className='text-3xl md:text-xl md:mb-10 mt-10 md:mb-1 md:mx-2.5 mx-24 text-center  mb:mb-10 mb-5 ' >
         Profesionalmente no me comprometo a trabajar en más proyectos de los que pueda contar con mi mano 🖐🏻
        </p>
        <p className='text-4xl  md:text-2xl text-center font-bold mt-5'>
          PORQUE me premite . . .
        </p>
       
       </div>
       <div className='font-bold mt-20 text-center sm:mt-13 bg-limon mx-5 p-20 text-white rounded-tl-full rounded-br-full'>
         <h2 className='text-4xl md:text-2xl' data-aos="slide-right">estar enfocado y administrar ...</h2>

         <h2 className='text-4xl md:text-2xl'data-aos="slide-left"> mi tiempo y energía.</h2>
       </div>
    </div>
    <div className='grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5'>
      {projectsData.map(project => 
      <div key={project.title}>
        <div className='relative p-2 border-2 text-center rounded-bl-3xl rounded-tr-3xl border-gray-400 grid grid-cols-1 divide-y'>
          <img 
            className='w-full'
            src={project.image} 
            alt={project.title}
            ></img>
            <hr ></hr>
            <p className="h-2/5">{project.description}</p>
            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black hover:opacity-80 rounded-bl-3xl rounded-tr-3xl'>
              <h1 className='text-2xl text-white font-semibold'>{project.title}</h1>
              <button onClick={()=>{
                window.open(project.link, '_blank');
              }} className='border-2  text-white rounded border-white py-2 px-5 hover:bg-green-500 font-bold mt-5'>VER</button>
                           
            </div>
        </div>
      </div>)}
    </div>
    </>
    

  )
}
