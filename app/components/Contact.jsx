import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
      <h4 className="text-center mb-2 text-lg">Connect with Me</h4>
      <h2 className="text-center text-5xl">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit culpa,
        sapiente neque illum modi reiciendis repudiandae dignissimos.
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[.5px] border-gray-300 rounded-md bg-white"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[.5px] border-gray-300 rounded-md bg-white"
            type="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[.5px] border-gray-300 rounded-md bg-white mb-6"
          rows="6"
          placeholder="Enter Your Message"
          required></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
          type="submit">
          Submit Now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
