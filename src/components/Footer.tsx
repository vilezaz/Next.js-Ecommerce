import React from "react";
import { BiSolidCopyright } from "react-icons/bi";

const fetchCreatedDate = (): number => {
  const date = 2025;
  return date;
};

const fetchCurrentDate = (): number => {
  const date = new Date();
  return date.getFullYear();
};

const checkForYears = (): number | string => {
  const createdDate = fetchCreatedDate();
  const currentDate = fetchCurrentDate();

  if (createdDate === currentDate) {
    return createdDate;
  } else {
    return `${createdDate}-${currentDate}`;
  }
};

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-gray-400 flex items-center justify-between py-8 px-10">
      <div className="flex items-center  space-x-6 md:flex-row flex-col">
        <div className="flex items-center justify-between space-x-1.5">
          <BiSolidCopyright />
          <div>{checkForYears()}</div>
        </div>
        <p>All rights reserved</p>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row space-x-1.5">
        <span>Created by</span>
        <a
          className="text-blue-500 hover:underline font-bold"
          href="github.com/aitezazdev"
          target="_blank">
          Aitezaz.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
