import { Link, useLocation } from "react-router-dom";
import { TbSmartHome } from "react-icons/tb";
import { GrBlog } from "react-icons/gr";

export default function Sidebar() {
  const inactiveLink =
    "flex flex-row items-center gap-1 text-base pl-2 py-2 rounded-md w-[230px] mb-1";
  const activeLink =
    inactiveLink + " font-semibold bg-[#F3F4F8] text-[#23272E]";
  const location = useLocation();

  return (
    <div className="w-fit min-h-screen pt-5 px-6 bg-white">
      <h4 className="text-sm uppercase text-[#8B909A] pl-2 mb-3">main menu</h4>
      <ul className="text-[#8B909A]">
        <li>
          <Link
            to={""}
            className={
              location.pathname === "/dashboard" ? activeLink : inactiveLink
            }
          >
            <TbSmartHome size="18" className="mb-[2px]" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={"products"}
            className={
              location.pathname === "/dashboard/products"
                ? activeLink
                : inactiveLink
            }
          >
            <TbSmartHome size="18" className="mb-[2px]" />
            Products
          </Link>
        </li>
        <li>
          <Link
            to={"add-product"}
            className={
              location.pathname === "/dashboard/add-product"
                ? activeLink
                : inactiveLink
            }
          >
            <TbSmartHome size="18" className="mb-[2px]" />
            Add Product
          </Link>
        </li>
        <li>
          <Link
            to={"blogs"}
            className={
              location.pathname === "/dashboard/blogs"
                ? activeLink
                : inactiveLink
            }
          >
            <GrBlog size="18" className="mb-[2px]" />
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to={"add-blog"}
            className={
              location.pathname === "/dashboard/add-blog"
                ? activeLink
                : inactiveLink
            }
          >
            <GrBlog size="18" className="mb-[2px]" />
            Add Blog
          </Link>
        </li>
        <li>
          <Link
            to={"developers"}
            className={
              location.pathname === "/dashboard/developers"
                ? activeLink
                : inactiveLink
            }
          >
            <GrBlog size="18" className="mb-[2px]" />
            Developers
          </Link>
        </li>
        <li>
          <Link
            to={"add-dev"}
            className={
              location.pathname === "/dashboard/add-dev"
                ? activeLink
                : inactiveLink
            }
          >
            <GrBlog size="18" className="mb-[2px]" />
            Add Developer
          </Link>
        </li>
        <li>
          <Link
            to={"users"}
            className={
              location.pathname === "/dashboard/users"
                ? activeLink
                : inactiveLink
            }
          >
            <GrBlog size="18" className="mb-[2px]" />
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
