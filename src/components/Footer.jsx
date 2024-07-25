import React from "react";
import git from "../assets/github.png";

const Footer = () => {
  return (
    <div className="custom-screen pt-16">
      <div className="mt-10 py-10 border-t items-center justify-between flex">
        <p className="text-gray-600">
          Created By
          <a href=""> Rajeeb Bhowmick.</a>
        </p>
        <a
          href="https://github.com/rajeeb12"
          className="bg-slate-800 pointer-events-auto rounded-lg border-solid flex py-2 px-4 text-center cursor-pointer bg-slate-800 text-slate-100 gap-2 hover:bg-gray-600 active:bg-gray-900 duration-150"
        >
          <img src={git} alt="github-image" className="w-8 h-8" />
          <span className="text-slate-100 mt-1">Github</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
