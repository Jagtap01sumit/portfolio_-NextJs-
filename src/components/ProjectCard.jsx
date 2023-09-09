import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function ProjectCard({ imgUrl, title, description,gitUrl, preViewUrl}) {
  return (
    <div>
      <div
        className="h-52  rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500   ">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white" />
          </Link>
          <Link
            href={preViewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE]  absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] mt-2 py-6 px-4">
        <h5 className="text-xl font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] ">{description}</p>
      </div>
    </div>
  );
}
