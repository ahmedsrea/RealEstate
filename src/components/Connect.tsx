import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const Connect = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-lg mb-4">Connect:</h1>

      <Link
        to={`https://api.whatsapp.com/send?phone=+2010098089862as`}
        className="flex flex-row items-center gap-2 text-[#19C34A] mb-3"
      >
        <BsWhatsapp /> +201009808986555
      </Link>
      <Link
        to={`tel:+201009808986ew2a`}
        className="flex flex-row items-center gap-2 text-[#83818A]"
      >
        <BsFillTelephoneFill /> +2010098089868746
      </Link>
    </div>
  );
};

export default Connect;
