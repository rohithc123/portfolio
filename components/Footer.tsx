"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/BorderMagic";
import { socialMedia } from "@/data";
const Footer = () => {
  return (
    <footer className="w-full mb-[40px] lg:mb-5 pb-10 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-white">
          Excited to bring my skills and dedication to{" "}
          <span className="text-purple">you</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:rohithc.eec.cseb@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-white md:text-base text-sm md:font-nornal font-light">
          Copyright © 2025 Rohith C
        </p>
        <div className="mt-2 flex items-center gap-3 md:gap-3 lg:gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt="logo" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
