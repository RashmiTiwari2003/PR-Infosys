import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex bg-white px-3 md:px-14 py-4 h-full">
      <div className="flex flex-row items-center gap-3 w-full">
        {/* <img
          src="./images/logo.png"
          alt="logo"
          className="rounded-sm w-10 md:w-16 h-10 md:h-16"
        /> */}
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          height={50}
          width={50}
          className="rounded-sm w-10 md:w-16 h-10 md:h-16"
        />
        <h1 className="font-semibold text-black text-nowrap md:text-xl">
          P.R Infosys
        </h1>
        <div className="flex flex-row gap-4 ml-auto">
          <a href="#home" className="text-black text-nowrap text-sm md:text-lg">
            Home
          </a>
          <a
            href="#products"
            className="text-black text-nowrap text-sm md:text-lg"
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-black text-nowrap text-sm md:text-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
