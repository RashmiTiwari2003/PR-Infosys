import React from "react";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const Location = () => {
  return (
    <div className="flex flex-col justify-between gap-3 bg-slate-100 mt-4 px-6 pt-10 pb-14">
      <h1
        className={`flex text-xl sm:text-2xl md:text-3xl justify-center font-semibold mb-4 mt-6 ${merriweather.className}`}
      >
        Map
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2156264407895!2d88.35094597530045!3d22.571037279492813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770adab406df%3A0x322328dd7f966682!2sP%20R%20Infosys!5e0!3m2!1sen!2sin!4v1714668968044!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
