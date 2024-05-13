import React from 'react'
import Search from './Search'

// Imported Icons ======>
import { BiTimeFive } from "react-icons/bi";

// Imported Images=========>
import logo1 from "../images/logo1.webp"
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import { Link } from 'react-router-dom';



const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "We are seeking a motivated Junior Developer to join our dynamic team. In this role, you will work closely with senior developers to design, develop, and maintain.",
    company: "Novac Linus Co.",
  },

  {
    id: 2,
    image: logo2,
    title: "UI Designer",
    time: "14Hrs",
    location: "Manchester",
    desc: "We are seeking a motivated Junior Developer to join our dynamic team. In this role, you will work closely with senior developers to design, develop, and maintain.",
    company: "Liquid Accessments",
  },

  {
    id: 3,
    image: logo3,
    title: "Software Engg.",
    time: "10Hrs",
    location: "Austria",
    desc: "We are seeking a motivated Junior Developer to join our dynamic team. In this role, you will work closely with senior developers to design, develop, and maintain.",
    company: "Web Tech Agency",
  },
  {
    id: 3,
    image: logo3,
    title: "Android Developer",
    time: "18Hrs",
    location: "US",
    desc: "We are seeking a motivated Junior Developer to join our dynamic team. In this role, you will work closely with senior developers to design, develop, and maintain.",
    company: "Us Fintech",
  },
];


export default function Jobs() {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-16">
                {Data.map(({ id, image, title, time, location, desc, company }) => {
                    return (
                      <div
                        key={id}
                        className="group group/item singleJob w-[250px] p-[20px] rounded-[10px] text-align:center hover:bg-indigo-600 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
                      >
                        <span className="flex justify-between items-center gap-2 ">
                          <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                            {title}
                          </h1>
                          <span className="flex items-center text-[#ccc] gap-1">
                            <BiTimeFive />
                            {time}
                          </span>
                        </span>

                        <h6 className="text-[#ccc] ">{location}</h6>

                        <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                          {desc}
                        </p>

                        <div className="company flex items-center gap-2">
                          <img
                            src={image}
                            alt="Company Logo"
                            className="w-[10%]"
                          />
                          <span className="text-[14px] py-[1rem] block group-hover:text-white">
                            {company}
                          </span>
                        </div>

                        <Link to="/thankyou">
                          <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover:bg-white group-hover/item:text-textColor group-hover:text-textColor">
                          Apply Now
                        </button>
                        </Link>
                        
                      </div>
                    );
                })}
            </div>
        </div>
    )
}
