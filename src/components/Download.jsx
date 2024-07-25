import React from "react";


const Download = ({url}) => {
    async function handleDownload(){
        try{
            
            const response = await fetch(url);
            
            const blob = await response.blob();
            console.log(blob);

            const imageUrl =  window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = imageUrl;
            link.download= 'image';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(imageUrl);

        }catch(error){
            console.log(error);
        }
    }
    return (
    <div className="mt-3">
      <button onClick={handleDownload} className="border-solid border-2 py-2.5  px-4 rounded-lg text-center duration-150 bg-slate-800 text-slate-100 hover:bg-gray-600 active:bg-gray-900">
        Download
      </button>
      <button className="border-solid border-2 py-2.5  px-4 rounded-lg text-center ml-2 hover:bg-gray-100">
        ✂️ Share
      </button>
    </div>
  );
};

export default Download;
