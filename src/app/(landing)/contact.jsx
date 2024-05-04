import contactData from "@/data/contact-data";
import React from "react";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-4 bg-slate-700 py-4"
    >
      <h1 className={`text-white text-xl ${merriweather.className}`}>
        Thank You For Visiting
      </h1>
      <div className="flex flex-row justify-around my-4 w-full text-white">
        {contactData.map((contact, ind) => (
          <a
            href={contact.link}
            key={ind}
            className="flex flex-row items-center gap-2"
          >
            <img src={contact.img} alt="Contact" />
            <p>{contact.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
