import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <div>
      <TypeAnimation
        sequence={["Développeuse Web", 1500, "Entrepreuneure", 1500]}
        speed={50}
        className="text-8 md:text-6xl text-[#496a7a] font-bold uppercase"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;
