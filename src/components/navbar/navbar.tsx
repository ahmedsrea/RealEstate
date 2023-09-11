import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  return (
    <div className="xl:bg-[#F5F7F9] bg-white w-full h-[65px] sticky top-0 left-0 z-20">
      <div className="xl:max-w-[1400px] w-full mx-auto flex flex-row items-center lg:justify-between py-[14px] px-[15px]">
        <div className="flex flex-row items-center lg:w-auto w-full">
          <MobileMenu />
          <Logo />
          <Search />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
