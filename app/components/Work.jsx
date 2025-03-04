import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg">My Portfolio</h4>
      <h2 className="text-center text-5xl">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit culpa,
        sapiente neque illum modi reiciendis repudiandae dignissimos.
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 my-10">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative hover:-translate-y-1 duration-500 hover:shadow-xl cursor-pointer"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 hover:bottom-7">
              <div>
                <h2 className="font-semibold"> {project.title} </h2>
                <p className="text-sm text-gray-700"> {project.description}</p>
              </div>
              <div className="border rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition ">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500"
        href="">
        Show More{" "}
        <Image src={assets.right_arrow_bold} alt="righ arrow" className="w-4" />
      </a>
    </div>
  );
};

export default Work;
