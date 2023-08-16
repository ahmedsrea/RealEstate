import { Link } from "react-router-dom";
import Icon from "/assests/logo.png";

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
        <img id="img" src={Icon} alt="Logo" className="lg:hidden img-clip" />
      </Link>
    </div>
  );
};

export default Logo;
