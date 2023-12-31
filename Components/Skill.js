import React from "react";

const Skill = ({ title }) => {
  return (
    <div
      className="mb-[1rem] md:mb-[2rem]
  "
    >
      <div className="px-[1rem] py-[1rem] font-bold text-[20px] bg-[#496a7a] text-white sm:text-[20px] md:text-[30px] uppercase text-center">
        {title}
      </div>
    </div>
  );
};
export default Skill;
