import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="flex items-center gap-2 mx-auto w-max">
          <Image src={assets.mail_icon} alt="" className="w-6 mx-auto mb-2" />
          anas.laribi95@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6">
        <p>@2025 Anas Laribi. All Rights Reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="#" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
