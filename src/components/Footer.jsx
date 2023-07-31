import React from 'react'
// Imported Icons =====>
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


export default function Footer() {
    return (

        <div className="footer pb-[1rem] pl-[2rem] pr-[4rem]  bg-blueColor gap-0 grid grid-rows-2 m-auto items-center justify-center">
            <div>
                <div className="lodoDiv">
                    <h1 className="logo text-2xl font-bold text-white pb-[1rem] text-center">

                        Coursify
                    </h1>
                </div>

                <p className="text-white pb-[6px] opacity-70 leading-7 ">
                    We always make our seekers and companies find the best jobs
                    and employers find the best candidates. Are you a top 2% Software Engineer, Product Manager or Data Scientist?
                    Let leading Indian technology companies compete to hire you.
                </p>
            </div>

            <div className="grid grid-cols-4 gap-3 text-center">
                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                        Company
                    </span>
                    <div className="grid gap-3">
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            About Us
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Features
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            News
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            FAQ
                        </li>
                    </div>
                </div>

                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                        Resources
                    </span>
                    <div className="grid gap-3">
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Account
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Support Center
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Feedback
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Contact Us
                        </li>
                    </div>
                </div>

                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
                        Support
                    </span>
                    <div className="grid gap-3">
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Events
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Promo
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Req Demo
                        </li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">
                            Careers
                        </li>
                    </div>
                </div>

                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold  text-white">
                        Contact Info
                    </span>
                    <div>
                        <small className="text-[14px] text-white">
                            coursify32@gmail.com
                        </small>
                        <div className="icons flex gap-2 py-[1rem] justify-center">
                            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
                            <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
                            <AiOutlineTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
                        </div>
                        <div className="icons flex gap-0 py-[5px] justify-center text-white " >
                            <CiLocationOn className="text-[25px] icon" />
                            <h1>Sector2, Indira Nagar, South West Delhi, India</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-[15px] text-white text-center pt-10 '>Coursify 2023. Terms & Condition</h1>
            </div>
        </div>

    )
}
