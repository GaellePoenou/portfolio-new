import React from "react";

const SkillLanguage = ({ skill1, level1, skill2, level2, skill3, level3 }) => {
  return (
    <div className="">
      <div className="relative mb-[1rem] bg-white p-3 border-2 border-[#496a7a] ">
        <h1 className="w-full uppercase text-[#496a7a] rounded-sm text-[20px] font-bold">
          {skill1}
        </h1>
        <div className={`${level1} bottom-0 h-[6px] bg-[#496a7a]`}></div>
        <h1 className="w-full uppercase text-[#496a7a] rounded-sm text-[20px] font-bold">
          {skill2}
        </h1>
        <div className={`${level2} bottom-0 h-[6px] bg-[#496a7a]`}></div>
      </div>
    </div>
  );
};

export default SkillLanguage;
