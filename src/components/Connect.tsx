import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { FaHeadset } from "react-icons/fa6";
import { Link } from "react-router-dom";

type ConnectProp = {
  DevPage?: boolean;
};

const Connect = ({ DevPage }: ConnectProp) => {
  return (
    <div className="">
      {/* Display > lg */}

      {DevPage ? (
        <div className={`lg:flex flex-row hidden`}>
          <Link
            to={`https://api.whatsapp.com/send?phone=+2010098089862as`}
            className="flex flex-row items-center gap-2 text-[#19C34A] mr-4"
          >
            <BsWhatsapp /> +201009808
          </Link>
          <Link
            to={`tel:+201009808986ew2a`}
            className="flex flex-row items-center gap-2 text-[#83818A] mr-4"
          >
            <BsFillTelephoneFill /> +201009808
          </Link>
          <Link
            to={`tel:+201009808986ew2a`}
            className="flex flex-row items-center justify-center gap-2 text-[#019DFB]"
          >
            <FaHeadset /> Request call
          </Link>
        </div>
      ) : (
        <div className={`lg:flex flex-col items-start hidden`}>
          <h1 className="font-bold text-lg mb-4">Connect:</h1>

          <Link
            to={`https://api.whatsapp.com/send?phone=+2010098089862as`}
            className="flex flex-row items-center gap-2 text-[#19C34A] mb-3"
          >
            <BsWhatsapp /> +201009808
          </Link>
          <Link
            to={`tel:+201009808986ew2a`}
            className="flex flex-row items-center gap-2 text-[#83818A]"
          >
            <BsFillTelephoneFill /> +201009808
          </Link>
        </div>
      )}

      {/* Display < lg */}
      <div
        className={`${
          DevPage ? "hidden" : "lg:hidden flex"
        } flex-row justify-evenly items-center gap-3 bg-white border border-[#ddd] rounded-md p-4`}
      >
        <div className="flex flex-row items-center justify-center gap-3 p-4 border border-[#019DFB] rounded-lg w-[50%] text-[#019DFB] cursor-pointer">
          <FaHeadset /> Request call
        </div>
        <Link
          to={`tel:+201009808986ew2a`}
          className="flex flex-row items-center justify-center gap-2 text-[#FB6B01] p-4 border border-[#FB6B01] rounded-lg w-[50%]"
        >
          <BsFillTelephoneFill /> Call Now
        </Link>
      </div>

      {/* Stick one */}
      <div className="fixed bottom-0 left-0 h-[65px] bg-white w-full lg:hidden flex flex-row justify-around">
        <div className="flex flex-col items-center justify-center gap-2 text-[#019DFB] cursor-pointer">
          <FaHeadset /> <span className="text-xs">Request call</span>
        </div>
        <Link
          to={`tel:+201009808986ew2a`}
          className="flex relative flex-col items-center justify-center gap-2 text-[#FB6B01]"
        >
          <span className="animate-[ping_2s_infinite] absolute inline-flex h-full w-full rounded-lg bg-[#FB6B01] opacity-75"></span>
          <BsFillTelephoneFill /> <span className="text-xs">Call Now</span>
        </Link>
        <Link
          to={`https://api.whatsapp.com/send?phone=+2010098089862as`}
          className="flex flex-col items-center justify-center gap-2 text-[#19C34A]"
        >
          <BsWhatsapp /> <span className="text-xs">Whatsapp</span>
        </Link>
      </div>
    </div>
  );
};

export default Connect;
