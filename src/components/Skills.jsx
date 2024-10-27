import { useEffect, useState } from 'react'
import skills from '../data/skills.json'
import Skill from './Skill'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Skills = () => {
    {/** <ion-icon name="chevron-back-outline"></ion-icon> */}
    const [showMoreSkills, setShowMoreSkills] = useState(false);

    let moreSkillsStyle = ""

    if(!showMoreSkills) {
        moreSkillsStyle = "hidden"
      }

    function SkillNextArrow(props) {
        const { onClick } = props;
        return (
          <div
          className="absolute leading-none block -right-6 top-3 h-60 w-20 sm:w-28 grid place-items-center z-40 skill-icon text-white hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300 hover:scale-105"
          onClick={onClick}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        );
      }
      
      function SkillPrevArrow(props) {
        const { onClick } = props;
        return (
          <div
          className="absolute leading-none block -left-6 top-3 h-60 w-20 sm:w-28 grid place-items-center z-40 skill-icon text-white hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300 hover:scale-105"
          onClick={onClick}
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        );
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerPadding: "60px",
        centerMode: true,
        className: "center",
        nextArrow: <SkillNextArrow />,
        prevArrow: <SkillPrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
    <section id='skills' className="pt-12 sm:pt-24 md:pt-24 text-white">
        <div className="min-h-screen xl:min-h-fit">

            <h2 className="text-3xl pt-16 sm:pt-6 font-extrabold text-center sm:text-5xl xl:py-6">
                Skills
            </h2>
            <hr className='w-48 h-1 mx-auto my-4 bg-sky-600 border-0 rounded md:mt-10 md:mb-1 dark:bg-sky-700'></hr>

            <div className="container m-auto">
                {/* main skills card */}
                <div className="pt-6 grid gap-6 grid-cols-1 px-3 pb-6 sm:pb-8 md:pb-12 sm:px-6 sm:grid-cols-2 md:grid-cols-3">
                    <div className=" rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <div className='text-center p-0 sm:p-3 skill-icon'>
                            {/* hover:animate-pulse */}
                            <ion-icon name="desktop-outline"></ion-icon>
                        </div>
                        <h3 className="min-h-max text-white text-2xl font-bold text-center m-6 pb-3 border-b-2 border-sky-600">Full-Stack Web Development</h3>
                        <div className ="px-6 py-4 sm:p-3 text-center">
                            <p>Building responsive, efficient, and scalable applications from front to back, leveraging modern frameworks, RESTful APIs, and clean, maintainable code.</p>
                        </div>
                        
                    </div>
                    <div className=" rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <div className='text-center p-0 sm:p-3 skill-icon'>
                            {/* hover:animate-spin */}
                            <ion-icon name="cog-outline"></ion-icon>
                        </div>
                        <h3 className="min-h-max text-white text-2xl font-bold text-center  m-6 pb-3 border-b-2 border-sky-600">Automation, Testing, Pipeline</h3>
                        <div className ="px-6 py-4 sm:p-3 text-center">
                            <p>Dedicated to streamlining workflows—I&apos;ll gladly spend a week automating a task that takes only minutes, because efficiency is everything. Robust CI/CD pipelines ensure every release is fast and reliable.</p>
                        </div>
                    </div>
                    <div className=" rounded-lg px-3 sm:px-6 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <div className='text-center p-0 sm:p-3 skill-icon'>
                            {/* hover:animate-bounce */}
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <h3 className="min-h-max text-white text-2xl font-bold text-center  m-6 pb-3 border-b-2 border-sky-600">Infinitely curious, Tech agnostic</h3>
                        <div className ="px-6 py-4 p-0 sm:p-3 text-center">
                            <p>Constantly exploring new technologies and adaptable to various tech stacks, driven by a passion for problem-solving and continuous learning.</p>
                        </div>
                    </div>
                </div>
                {/* end main skills card */}

                {/* extra skills carousels */}
                <div className="grid justify-items-center pb-6 sm:pb-0">
                    <button onClick={() => setShowMoreSkills((prevState) => !prevState)} className="text-sky-600 hover:text-sky-700 active:text-sky-800 focus:outline-none focus:ring focus:ring-sky-300 margin-bm-5">{ showMoreSkills ? 'Hide extra details' : 'Expand for more details'}</button>
                </div>
                
                <div className={`${moreSkillsStyle} slider-container px-6 sm:px-12 md:px-24 shadow-md`}>
                    <Slider {...settings} className="">
                        {skills.map((skill) => (
                            <Skill key={skill.id} skill={ skill }/>
                        ))}
                    </Slider>
                </div>
                {/* end of extra skills carousels */}
            </div>
        </div>
    </section>
    )
}

export default Skills