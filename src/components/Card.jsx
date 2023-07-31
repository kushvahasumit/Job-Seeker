import React from "react";

const Data = [
    {
        id: 1,
        title: "speedier submission of candidates",
        time: "2x",
    },

    {
        id: 2,
        title: "client pleasure, meeting consumer expectations",
        time: "100%",
    },

    {
        id: 3,
        title: "additional candidate placements",
        time: "50%",
    },
];

export default function Card() {
    return (
        <div>
            <div className=" flex gap-10 justify-center flex-wrap items-center py-10">
                {Data.map(({ id, image, title, time }) => {
                    return (
                        <div
                            key={id}
                            className="  w-[250px] p-[20px] rounded-[10px] text-align:center   shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
                        >
                            <span className=" justify-between items-center text-center gap-2 ">

                                <h1 className=" items-center font-bold text-3xl text-grayIsh gap-1  ">
                                    {time}
                                </h1>
                                <h1 className="text-[16px] font-semibold text-grayIsh ">
                                    {title}
                                </h1>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
