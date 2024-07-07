import { Link } from "react-router-dom";
import Connect from "../../components/Connect";
import SecondPart from "./SecondPart";

interface BlogProps {
  images: string;
  title: string;
  price: number;
  status: string;
  del_date: number;
  dev_by: string;
  createdAt: Date;
  markdown: String;
  sanitizedHtml: string;
}

const AboutBlog: React.FC<BlogProps> = ({
  images,
  title,
  price,
  status,
  del_date,
  dev_by,
  createdAt,
  markdown,
  sanitizedHtml,
}) => {
  const f = new Intl.NumberFormat("en-EG");
  return (
    <div className="lg:max-w-[925px] w-full bg-[#EDF0F4] mt-7">
      {/* Start First Part */}
      <div>
        <img src={images} alt="" className="w-full h-[350px]" />
        <div className="p-4">
          <h1 className="my-3 font-bold text-[22px]">{title}</h1>
          <h2 className="text-[#fb0b01] font-light">
            From <span className="font-bold">{f.format(price)}</span> EGP
          </h2>
          <div className="mt-4 mb-10 w-full flex flex-col ">
            <div className="flex flex-row">
              <h3 className="text-[#83818A]">
                <span className="font-bold text-[#6F818A] mr-1">Status</span>{" "}
                {status}
              </h3>
              <h3 className="text-[#83818A] ml-5">
                <span className="font-bold text-[#6F818A] mr-1">
                  Delivery Date
                </span>{" "}
                {del_date}
              </h3>
            </div>
            <h3 className="mt-2">
              <span className="font-bold text-[#6F818A] mr-1">
                Developed by:
              </span>{" "}
              <Link
                to={`/developers/${dev_by}`}
                className="text-[#019DFC] hover:text-[#0266a4]"
              >
                {dev_by}
              </Link>
            </h3>
          </div>
          <Connect />
        </div>
      </div>
      {/* End First Part */}
      {/* Start Second Part */}
      <SecondPart
        markdown={markdown}
        createdAt={createdAt}
        sanitizedHtml={sanitizedHtml}
      />
    </div>
  );
};

export default AboutBlog;
