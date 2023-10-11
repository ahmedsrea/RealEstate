import { FaBuilding } from "react-icons/fa6";
import Connect from "../../components/Connect";
type AboutDevProp = {
  images: string;
  title: string;
};
const AboutDev = ({ images, title }: AboutDevProp) => {
  return (
    <div className="bg-[#F6F7F9] py-7 flex flex-col justify-center items-center">
      <div className="max-w-[450px] flex flex-col items-center justify-center text-center">
        <div className="">
          <img
            src={images}
            alt=""
            className="w-[200px] h-[200px] rounded-[50%] border-[2px] border-[#DDDDDD] shadow-sm"
          />
        </div>
        <h1 className="text-[28px] font-bold leading-8 mt-8">{title}</h1>
        <p className="flex items-center gap-1 justify-center mt-1 text-[#6A6A6A] font-bold text-lg mb-4">
          <FaBuilding size={15} className="opacity-80" /> Projects: 1{" "}
          <span className="font-light text-sm">Project</span>
        </p>

        <Connect DevPage={true} />
      </div>
    </div>
  );
};

export default AboutDev;
