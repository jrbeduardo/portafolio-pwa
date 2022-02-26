import { coursesData } from "../resources/courses";
import AOS from 'aos';
import { useScroll } from "../hooks/useScroll";
AOS.init({
  duration: 1000
});

export const Courses = () => {
  useScroll();
  return (
    <>
      <div>
        <div className="md:h-3/5 h-screen">
          <div className="h-4/5 md:h-3/5 bg-theme">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_xhfwgplf.json" 
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="relative">
          <svg className="absolute -top-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1440 320">
            <path fill="#2a2a2a" d="M0,96L26.7,90.7C53.3,85,107,75,160,101.3C213.3,128,267,192,320,229.3C373.3,267,427,277,480,261.3C533.3,245,587,203,640,192C693.3,181,747,203,800,213.3C853.3,224,907,224,960,224C1013.3,224,1067,224,1120,192C1173.3,160,1227,96,1280,85.3C1333.3,75,1387,117,1413,138.7L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
          </svg>
      </div>
            
          </div>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-3xl md:text-xl text-center md:mt-0 lg:mt-24  mx-24 mt-40 md:mx-2.5">
          Como profesor tengo experiencia en universidades públicas y educación
          en línea
        </p>
        <p className="text-4xl  md:text-2xl text-center font-bold mt-5">
          PORQUE . . .
        </p>
        <div className="font-bold text-center bg-gray-500 mx-5 p-20 text-white rounded-tl-full rounded-br-full mt-5">
          <h2 className="text-4xl md:text-2xl" data-aos="zoom-in">
            El principio de la educación es predicar con el ejemplo        
          </h2>
        </div>
      </div>

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {coursesData.map((course) => (
          <div key={course.title}>
            <div className="relative p-10 border-2 text-center rounded-bl-3xl border-gray-400">
              <img
                className="w-full h-52"
                src={course.image}
                alt={course.title}
              ></img>

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black hover:opacity-80">
                <h1 className="text-2xl text-white font-semibold">
                  {course.title}
                </h1>
                <button
                  onClick={() => {
                    window.open(course.link, "_blank");
                  }}
                  className="border-2  text-white rounded border-white py-2 px-5 hover:bg-green-500 font-bold mt-5"
                >
                  VER
                </button>
                <p className="text-white mt-2 px-5">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
