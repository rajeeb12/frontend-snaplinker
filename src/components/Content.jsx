import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="custom-screen pt-24 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <Link to="/generator" className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Generate your next AI QR{" "}
          </Link>
          <a className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Code in seconds
          </a>
          <p className="text-lg py-4">
            QRGPT makes it simple for you to generate cool looking AI QR codes
            in seconds, completely for free.
          </p>
          <div className="flex justify-center gap-3 font-medium text-sm">
            <button className="border-solid border-2 py-2.5  px-4 rounded-lg text-center duration-150 bg-slate-800 text-slate-100 hover:bg-gray-600 active:bg-gray-900">Generate your Qr Code and Short URL</button>
            <button className="border border-2 py-2.5 px-4 text-center rounded-lg text-slate-700 duration-150 hover:bg-gray-50 ">Learn More</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 grid-col-2 gap-4 pt-10">
          <img className="w-72 h-72 rounded" src={img1} alt="image1" />
          <img className="w-72 h-72 rounded" src={img2} alt="image2" />
          <img className="w-72 h-72 rounded" src={img3} alt="image3" />
          <img className="w-72 h-72 rounded" src={img4} alt="image4" />
          <img className="w-72 h-72 rounded" src={img5} alt="image5" />
          <img className="w-72 h-72 rounded" src={img6} alt="image6" />
        </div>
      </div>
    </div>
  );
};

export default Content;
