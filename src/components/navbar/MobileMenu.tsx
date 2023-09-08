import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="xl:hidden mr-2">
      <div onClick={() => setOpenMenu((value) => !value)}>
        <AiOutlineMenu className="text-[35px] text-[#019DFB] cursor-pointer" />
      </div>

      {openMenu && (
        <div
          className={`flex flex-col items-start p-6 text-[#2D3436] gap-[21px] font-medium text-base absolute top-[65px] left-0 bg-[#F2F2F2] w-[100vw] z-20 openMenu`}
        >
          <Link to="compounds" className="hover:text-[#019DFB]">
            Egypt's Compounds
          </Link>
          <Link to="blog" className="hover:text-[#019DFB]">
            Blog
          </Link>
          <Link to="for-sale" className="hover:text-[#019DFB]">
            Properties for sale
          </Link>
          <Link to="" className="hover:text-[#019DFB]">
            Developers
          </Link>
          <Link to="" className="bg-[#019DFB] text-white py-1 px-4 rounded-md">
            Join us
          </Link>
          <Link
            to=""
            className="font-bold font-serif text-[#FB6B01] hover:opacity-50"
          >
            العربية
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
