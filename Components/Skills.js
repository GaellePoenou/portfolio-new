import React from "react";
import Skill from "./Skill";
import SkillLanguage from "./SkillLanguage";

const Skills = () => {
  return (
    <div
      className=" pt-[1rem] md:pt-[4rem] pb-[5rem]
  "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <h1 className="text-3xl py-1 font-saira text-[#496a7a]">
          <span className="font-bold">03.</span>Skills
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-[1rem] items-center pt-[1rem] md:pt-[4rem]">
        <div className="">
          <Skill title="Frontend" />
          <SkillLanguage
            skill1="html/css"
            skill2="Javascript"
            level1="w-[91%]"
            level2="w-[88%]"
          />
        </div>
        <div className="">
          <Skill title="Backend" />
          <SkillLanguage
            skill1="PHP/Symphony"
            skill2="SQL"
            level1="w-[91%]"
            level2="w-[88%]"
          />
        </div>
        <div className="">
          <Skill title="CMS" />
          <SkillLanguage
            skill1="Wordpress"
            skill2="Shopify"
            level1="w-[91%]"
            level2="w-[51%]"
          />
        </div>
        <div className="">
          <Skill title="Version" />
          <SkillLanguage
            skill1="Git"
            level1="w-[91%]"
            skill2="Github"
            level2="w-[91%]"
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;
