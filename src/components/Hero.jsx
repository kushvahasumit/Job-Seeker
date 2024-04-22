import React from 'react'
import './Hero.css'

export default function Hero() {
    return (
      <div className="">
        <h1 className="font-bold text-4xl text-center  pt-[40px] ">
          Find your next top-tier IT job.
        </h1>
        <h1 className="font-bold text-medium text-center  pt-[35px]">
          Do you{" "}
          <mark style={{ backgroundColor: "rgba(0, 34, 255, 0.308)" }}>
            belong to the top 2%
          </mark>
          of Software Engineers, Product Managers, or Data Scientists?
        </h1>
        <h1 className="font-bold text-medium text-center pt-3">
          Allow the best Indian{" "}
          <mark style={{ backgroundColor: "rgba(0, 34, 255, 0.308)" }}>
            IT companies to compete for your services.
          </mark>
        </h1>

        <div className="pt-[40px] flex justify-center ">
          <button
            type="button"
            className="border-2 rounded-lg border-indigo-600 font-bold w-24 h-10 hover:border-t-4 hover:bg-indigo-600 hover:text-white"
          >
            Join Now
          </button>
        </div>
        <div className="text-center">
          <small>100% Free. Easy to Join</small>
        </div>
      </div>
    );
}
