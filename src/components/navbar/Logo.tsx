import { Link } from "react-router-dom";
import Icon from "/assests/logo.png";
import MobileIcon from "/assests/mobile-logo.png";

const Logo = () => {
  return (
    <div className="flex">
      <Link to="/" className="w-auto relative">
        <img
          id="img"
          src={Icon}
          alt="Logo"
          className="lg:flex hidden lg:w-[230px] h-[30px]"
        />
        <img id="img" src={MobileIcon} alt="Logo" className="lg:hidden ml-1" />
      </Link>
    </div>
  );
};

export default Logo;
