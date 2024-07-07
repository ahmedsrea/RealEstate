import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="xl:flex flex-row items-center text-[#2D3436] gap-[21px] font-medium text-base hidden ">
      <Link to="compounds" className="hover:text-[#019DFB]">
        Egypt's Compounds
      </Link>
      <Link to="blog" className="hover:text-[#019DFB]">
        Blog
      </Link>
      <Link to="for-sale" className="hover:text-[#019DFB]">
        Properties for sale
      </Link>
      <Link to="developers" className="hover:text-[#019DFB]">
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
  );
};

export default Menu;
