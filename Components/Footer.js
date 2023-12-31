import React from "react";

const Footer = () => {
  return (
    <div className=" pt-[1rem] pb-[1rem] bg-[#496a7a]">
      <div className="mt-[1rem] flex justify-between  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] ">
        <div className="text-[18px] text-white mb-[2rem] md:mb-0">
          GPW 2023 | All Rights Reserved
        </div>
        <div className="flex items-center space-x-10">
          <p className="text-[18px] text-white">Conditions Générales</p>
          <p className="text-[18px] text-white">Politique de confidentialité</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
