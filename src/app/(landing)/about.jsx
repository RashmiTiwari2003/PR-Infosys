import React from "react";
import Image from "next/image";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const About = () => {
  return (
    <div className="relative flex md:flex-row flex-col justify-around items-center px-4 py-2 min-h-[80vh]">
      {/* <img
        src="./images/bg-about.jpg"
        alt="bg-about"
        className="brightness-50 -z-10 absolute opacity-65 w-full h-full object-cover"
      /> */}
      <Image
        alt="background Image"
        width={1080}
        height={605}
        src={"/images/bg-about.jpg"}
        className="brightness-50 -z-10 absolute opacity-65 w-full h-full object-cover"
      />
      <div className="flex flex-col justify-center">
        <h1
          className={`mb-5 font-semibold text-xl md:text-2xl lg:text-3xl text-black ${merriweather.className}`}
        >
          Welcome to P.R. Infosys
        </h1>
        <h1 className="max-w-[500px] text-black text-md md:text-lg lg:text-xl animated">
          PR Infosys is your ultimate destination for top-quality electronics
          and expert services. From the latest gadgets to personalized
          solutions, we've got you covered. Discover innovation and reliability
          with us – your trusted partner in the world of technology.
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <img
          className="shadow-2xl rounded-3xl w-52 md:w-96 h-52 md:h-96"
          src="./images/main.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
