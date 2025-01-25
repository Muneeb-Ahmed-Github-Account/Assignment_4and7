import ProjectCard from "@/components/ProjectCard";
import { TiArrowDown } from "react-icons/ti";
import project1 from "../../public/images/ecommerce.jpg"
import project2 from "../../public/images/portfolio1.jpg"
import project3 from "../../public/images/resume.jpg"
export default function Work() {
  return (
    <div>

      {/* hero section starts */}

      <div className="flex md:flex-row flex-col md:px-20 px-10 md:items-center justify-center sm:h-[70vh] h-[50vh] lg:gap-16 gap-8">
      <div className="">
      <h1 className="lg:text-6xl md:text-5xl sm:text-6xl text-4xl mr-5 font-semibold text-[#181717]">
        Hello, I&apos;m <br /> Muneeb Ahmed.
      </h1>
      </div>
      <div className=" flex text-xl md:mt-24">
        <p className="font-semibold text-[#606060]">A Senior Web Development Student with the strong grip <br /> on Front-end web designing and development.</p>
      </div>
      </div>
        <div className="md:px-20 px-10 sm:-mt-10 md:mb-36">
          <p className="sm:text-5xl text-3xl font-extrabold ">
          <TiArrowDown />
          </p>
        </div>
   
      {/* 1st Card  */}

        <ProjectCard 
        cardNo="01"
        cardTitle="E-Commerce-Website"
        cardParagraph="This is a E-commerce website."
        cardSpan="I built a user-friendly e-commerce website with a smooth shopping experience, secure payments, and responsive design. It features an easy-to-navigate product catalog, simple checkout, and seamless user authentication, showcasing my skills in web development and UI/UX design."
        cardLink="More shots from This Project"
        cardImage={project1}
        />

        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

        {/* 2nd card  */}

        <ProjectCard 
        cardNo="02"
        cardTitle="Portfolio Website"
        cardParagraph="Personal Portfolio Website using Next.js and tailwind "
        cardSpan="I developed a personal portfolio website using Next.js, showcasing my skills in web development. The website features a clean, responsive design with smooth navigation, fast loading times, and a dynamic layout, reflecting my expertise in building modern, high-performance web applications."
        cardLink="More shots from This Project "
        cardImage={project2}/>
        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />
        {/* 3rd card  */}

        <ProjectCard 
        cardNo="03"
        cardTitle="Resume Builder"
        cardParagraph="This is my personal portfolio which I created with HTML CSS and JavaScript."
        cardSpan="I developed a Resume Builder using HTML, CSS, and JavaScript. This tool allows users to create and customize professional resumes. It offers an intuitive interface to input personal information and work experience. The final resume can be downloaded in a clean, professional format."
        cardLink="More shots from This Project "
        cardImage={project3}/>
         <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />
        


    </div>
  );
}