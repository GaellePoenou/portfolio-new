import Image from "next/image";
import service1 from "../public/service1.png";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
      <div className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] mx-auto relative hidden md:block">
        <div className="absolute top-0 left-0 w-full h-full   dark:bg-white p-10 shadow-lg ">
          <Image
            src={service1}
            alt="service1"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-full object-contain bg-white p-10"
          />
        </div>
        <div
          className="absolute w-full h-full
          z-[10] bg-[#496a7a] bottom-[-2rem] right-[-2rem]"
        ></div>
      </div>
      <div>
        <h3 className="text-3xl py-1 font-saira text-[#496a7a]">
          01. About me
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Diplômée récemment, je me lance en tant que{" "}
          <span className="text-[#496a7a] uppercase font-bold">
            développeuse web fullstack
          </span>
          .
          <br />À la recherche d'opportunités en freelance ou en tant que
          salarié, je m'engage à apporter créativité et compétences.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Curieuse et polyvalente, j'explore constamment de nouvelles façons
          d'appliquer mes <span className="text-[#496a7a]">compétences</span>{" "}
          fraîchement acquises.
        </p>
      </div>
    </div>
  );
};

export default About;
