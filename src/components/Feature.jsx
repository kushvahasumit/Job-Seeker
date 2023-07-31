import React from 'react'
import feature1 from '../images/s1.png'
import feature2 from '../images/s2.png'
import feature3 from '../images/s3.png'



export default function Feature() {
    return (
        <div>


            <div className="container py-5">
                <div className="row featurette justify-content-center align-items-center rounded-3">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1 text-indigo-600 text-3xl fw-bold">Sit back and watch <span
                            className="text-body-secondary">as companies compete to hire you. </span></h2>
                        <p className="lead fw-semibold pt-[10px] text-slate-400">We expedite your profile to recruiting managers.
                            ‍ Within days, you will receive many interview requests with upfront compensation offers.</p>

                        <div className='pt-[30px] flex  '>
                            <button type="button" className="border-2  rounded-lg border-indigo-600 font-bold w-24 h-10 hover:border-t-4 hover:bg-indigo-600 hover:text-white"><p>Check Now </p></button>
                        </div>
                    </div>
                    <div className="col-md-5 ">
                        <img src={feature1} alt="img" />
                    </div>
                </div>

            </div>

            <div className="container py-5">

                <div className="row featurette justify-content-center align-items-center rounded-3" >
                    <div className="col-md-6 order-md-2 ">
                        <h2 className="featurette-heading fw-normal lh-1  text-indigo-600 text-3xl fw-bold">Transparency in Salary<span className="text-body-secondary"> and Role</span></h2>
                        <p className="lead fw-semibold pt-[10px] text-slate-400">Companies' interview requests provide income and role specifics upfront, before you decide whether to accept or decline them.</p>

                        <div className='pt-[30px] flex  '>
                            <button type="button" className="border-2  rounded-lg border-indigo-600 font-bold w-24 h-10 hover:border-t-4 hover:bg-indigo-600 hover:text-white"><p>Check Now </p></button>
                        </div>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={feature2} alt="" />
                    </div>
                </div>

            </div>

            <div className="container py-5">
                <div className="row featurette justify-content-center align-items-center rounded-3">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1  text-indigo-600 text-3xl fw-bold">A passionate  <span
                            className="text-body-secondary">talent advocate </span></h2>
                        <p className="lead fw-semibold pt-[10px] text-slate-400">Your Talent Advocate will assist you throughout the process. From improving your profile to offering interview tips to negotiating offers!</p>
                        <div className='pt-[30px] flex  '>
                            <button type="button" className="border-2  rounded-lg border-indigo-600 font-bold w-24 h-10 hover:border-t-4 hover:bg-indigo-600 hover:text-white"><p>Check Now </p></button>
                        </div>
                    </div>
                    <div className="col-md-5 ">

                        <img src={feature3} alt="img" />
                    </div>
                </div>

            </div>


        </div>
    )
}
