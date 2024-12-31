import React from "react";
import { projects } from "./../data/index";
import { PinContainer } from "./ui/3d-pin";

function RecentProjects() {
  return (
    <div className="py-20 " id="projects">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-purple"> Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10 text-white">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[22rem] sm:max-h-[16rem] mt-16 flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link} className=" sm:h-[16rem] lg:h-[26rem]">
              <div className=" relative flex flex-col items-start justify-center sm:w-96 w-[80vw] overflow-hidden mb-2">
                  <div className=" w-full h-full  lg:rounded-3xl ">
                      {/*<img src="/bg.png" alt="bg-img"/>*/}
                      <img
                          src={img}
                          alt={title}
                          className="z-10 bottom-0"
                      />
                  </div>
                {/*  <img*/}
                {/*    src={img}*/}
                {/*    alt={title}*/}
                {/*    className="z-10  bottom-0"*/}
                {/*/>*/}
                  <div className="mt-4 relative flex flex-col">
                      <h1 className=" text-white font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                          {title}
                      </h1>
                      <p className=" text-white lg:text-md lg:font-normal font-light text-sm line-clamp-2">
                          {des}
                      </p>
                  </div>
                  <div className="flex items-center justify-between mt-7 ">
                      <div className="flex items-center">
                          {iconLists.map((icon, index) => (
                              <div key={icon}
                                   className="border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                           style={{transform:`translateX(-${5*index*2}px)`}}>
                             <img src={icon} alt={icon} className="p-2"/>
                           </div>
                   ))}
                       </div>
                </div>
              </div>
            </PinContainer>
            {/* {title} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
