import axios from "axios";
import { useState } from "react";
import Card from "./Card";

export default function Generator() {
  const [url, setUrl] = new useState();
  const [prompt, setPrompt] = new useState();
  const [shortid, setShortid] = useState();
  const [imageurl, setImageurl] = useState();
  const [downloadUrl, setDownloadUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [outterLoading, setOutterLoading] = useState(false);

  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      url: url,
      prompt: prompt,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://api-slio-rajeebs-projects.vercel.app/api/generate",
        data
      );
      console.log(response);

      setLoading(false);
      setOutterLoading(false);
      setShortid(response.data.id);
      setImageurl(response.data.imageUrl);
      setDownloadUrl(response.data.downloadUrl);
    } catch (error) {
      console.log(error);
    }
  }
  function handleButton1() {
    setOutterLoading(true);
    setLoading(true);
    setPrompt("A city view with clouds");
  }
  function handleButton2() {
    setOutterLoading(true);
    setLoading(true);
    setPrompt("A beautiful glaicer");
  }
  function handleButton3() {
    setOutterLoading(true)
    setLoading(true);
    setPrompt("A forest overlooking a mountain");
  }
  function handleButton4() {
    setOutterLoading(true);
    setLoading(true);
    setPrompt("A saharan desert");
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-10">
        <div className="col-span-1">
          <div className="relative">
            <h1 className="absolute left-0 font-bold text-3xl mb-5 text-gray-800">
              Generate Short Url and Qr Code
            </h1>
          </div>
          <form className="flex flex-col max-w-6xl" onSubmit={handleForm}>
            <div className="flex flex-col gap-2 mt-16 ">
              <div className="relative">
                <label className="left-0 mt-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800 ">
                  URL
                </label>
              </div>
              <input
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Enter url"
                required
                onChange={(e) => setUrl(e.target.value)}
              />
              <div className="relative">
                <span className="absolute left-0 mt-4 font-semibold text-gray-800">
                  Prompt
                </span>
              </div>
              <textarea
                value={prompt}
                className="h-24 mt-10 flex min-h-[80px] w-full rounded-md bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                placeholder="A city view clouds"
                spellCheck="false"
                aria-invalid="true"
                onChange={(e) => setPrompt(e.target.value)}
                required
              ></textarea>
              <div className="relative">
                <span className="absolute left-0">
                  This is what the image in your QR code will look like.
                </span>
                <br></br>
                <span className="absolute left-0 mt-4 font-medium">
                  Prompt Suggestions
                </span>
              </div>
              <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-3 text-center text-gray-500 text-sm">
                <button
                  className="border p-2 rounded-2xl cursor-pointer hover:bg-gray-100 transition"
                  onClick={handleButton1}
                >
                  A city view with clouds
                </button>
                <button
                  className="border p-2 rounded-2xl cursor-pointer hover:bg-gray-100 transition"
                  onClick={handleButton2}
                >
                  A beautiful glacier
                </button>
                <button
                  className="border p-2 rounded-2xl cursor-pointer hover:bg-gray-100 transition"
                  onClick={handleButton3}
                >
                  A forest overlooking a mountain
                </button>
                <button
                  className="border p-2 rounded-2xl cursor-pointer hover:bg-gray-100 transition"
                  onClick={handleButton4}
                >
                  A saharan desert
                </button>
              </div>
              <div className="text-center">
                <button className="w-60 mt-6 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Generate
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Whole card */}
        <Card id={shortid} url={imageurl} downloadUrl={downloadUrl} />
      </div>
    </div>
  );
}
