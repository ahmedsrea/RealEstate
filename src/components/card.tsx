import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
interface ShowProps {
  title: string;
  dev_by: string;
  price: number;
  image: string;
  slug: string;
}

const ShowProp: React.FC<ShowProps> = ({
  title,
  dev_by,
  price,
  image,
  slug,
}) => {
  const f = new Intl.NumberFormat("en-EG");
  return (
    <Link to={`/${slug}`}>
      <div className="h-[260px] md:w-[575px] lg:w-full w-full mx-auto rounded-lg overflow-hidden text-white relative flex group">
        <div className="absolute left-0 top-0 z-10 w-full h-full flex justify-center items-center backdrop-brightness-75"></div>
        <div className="z-10 w-[90%] flex flex-row justify-between absolute top-3 left-4">
          <p className="flex gap-1 md:text-base text-sm">
            <IoHome color="#B6B7B8" /> 0 Units
          </p>
          <p className="md:text-base text-sm">
            From<strong>{f.format(price)}</strong> EGP
          </p>
        </div>
        <div className="z-10 absolute bottom-2 left-4 w-[90%] flex flex-col justify-between">
          <h2 className="font-bold md:text-2xl text-lg">{title}</h2>
          <p className="font-light text-sm">{dev_by}</p>
        </div>
        <img
          src={image}
          alt=""
          className="absolute top-0 left-0 w-full h-full group-hover:scale-110 group-hover:transition-transform scale-100 transition-all duration-1000 group-hover:duration-1000"
        />
      </div>
    </Link>
  );
};

export default ShowProp;
