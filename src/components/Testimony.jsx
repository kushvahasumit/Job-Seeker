import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineAmazon } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";


export default function Testimony() {
    return (

        <div className="mb-[4rem] mt-[3rem] m-5 ">
            <h1 className="text-textColor text-[25px] py-[1rem] pb-[2rem] font-bold w-[400px] block">
                A more satisfying love story than Twilight.
            </h1>

            <div className="grid gap-[4rem] grid-cols-3 items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dbd1f7] h-[40px] w-[40px] flex items-center justify-center">
                            <AiOutlineGoogle className='w-[70%]' />
                        </div>
                        <div className='grid'>
                            <span className="font-semiBold text-textColor text-[18px] ">
                                Rohit Singh
                            </span>
                            <span className="font-sm text-textColor text-[10px] ">
                                Sr. Software Engineer
                            </span>
                        </div>
                    </div>

                    <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        In comparison to other employment portals, what stuck out for me was that, in addition to giving genuinely fantastic prospects, Coursify also assisted me in talks with the firms.
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
                            <AiOutlineAmazon className="w-[70%]" />

                        </div>
                        <div className='grid'>
                            <span className="font-semiBold text-textColor text-[18px] ">
                                Anushka Sethi
                            </span>
                            <span className="font-sm text-textColor text-[10px] ">
                                SDE 2
                            </span>
                        </div>
                    </div>

                    <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        Coursify was able to make the procedure really simple. They were able to book interviews with the best companies in the field and ensured that the entire process ran well.
                    </p>
                </div>

                <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]  shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
                            <BsPaypal className="w-[70%]" />

                        </div>
                        <div className='grid'>
                            <span className="font-semiBold text-textColor text-[18px] ">
                                Yogesh Kumar
                            </span>
                            <span className="font-sm text-textColor text-[10px] ">
                                Sr. iOS Engineer
                            </span>
                        </div>
                    </div>

                    <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
                        When I was looking for fresh prospects, a friend of mine told me about Coursify. The team was really helpful, professional, and efficient in all aspects.

                    </p>
                </div>
            </div>

            <div className="card mt-[3rem] flex-row justify-between  p-[5rem] rounded-[10px]">
                <div>
                    <h1 className="text-blueColor text-[30px] font-bold">
                        Ready to switch a career
                    </h1>
                    <h2 className="text-textColor text-[25px] font-bold">
                        Let's get started!
                    </h2>
                </div>
                <div>
                    <button className="border-[2px] rounded-[10px] py-[4px]  px-[50px] text-[18px] font-semibold text-blueColor hover:bg-blueColor border-blueColor hover:text-white">
                        Get Started
                    </button>
                </div>
            </div>
        </div>

    )
}
