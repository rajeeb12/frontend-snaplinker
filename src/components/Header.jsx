import img1 from "../assets/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white h-24 w-full md:static md:text-sm ">
      <div className="custom-screen flex justify-between items-center mx-auto">
        <div className="flex items-center justify-between py-2 md:py-5 md:block">
          <a className="flex items-center ml-8">
            <img src={img1} alt="logo" className="w-16 h-16" />
            <a className="font-bold text-2xl p-2">SnapLinker</a>
          </a>
        </div>
        <div className="flex items-center gap-3 mr-4">
          <Link to="/" className="text-xl">
            Homepage
          </Link>
          <Link
            to="/generator"
            className="text-lg bg-slate-800 pointer-events-auto rounded-lg border-solid flex py-2 px-4 text-center cursor-pointer bg-slate-800 text-slate-100 gap-2 hover:bg-gray-600 active:bg-gray-900 duration-150"
          >
            Generator
          </Link>
          <a className="text-xl">Stats</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
