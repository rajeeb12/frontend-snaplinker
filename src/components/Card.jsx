import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Generator from "./Generator";
import Download from "./Download";

const Card = ({id, url, downloadUrl}) => {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        })
        .catch((err) => console.error("Failed to copy: ", err));
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-3xl text-gray-800">
          Your Short Url and Qr Code
        </h1>
      </div>
      <div className="w-9/12 mt-4 flex justify-center items-center border border-sky-950 rounded-md shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
        <img
          className="w-96 h-96 mt-3 mb-10 rounded"
          src={url}
          alt="ai generated qr code"
        />
      </div>
      {/* copy clipboard */}
      <div className="mt-4 grid grid-cols-8 gap-2 w-full max-w-[23rem]">
        <label htmlFor="npm-install" className="sr-only">
          Label
        </label>
        <input
          ref={inputRef}
          id="npm-install"
          type="text"
          className="col-span-6 bg-slate-100 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={id}
          placeholder="Short Url"
          disabled
          readOnly
        />
        <button
          onClick={handleCopy}
          className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
        >
          {!copied ? (
            <span id="default-message">Copy</span>
          ) : (
            <span id="success-message" className="inline-flex items-center">
              <svg
                className="w-3 h-3 text-white me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              Copied!
            </span>
          )}
        </button>
      </div>
      <Download url={downloadUrl} />
    </div>
  );
};

export default Card;
