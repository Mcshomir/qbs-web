import React from 'react';
import { FaPhoneSquareAlt, FaFacebook, FaInstagramSquare, FaViber } from "react-icons/fa";
const WorkSection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid sm:p-8 sm:m-6 sm:grid-cols-1 md:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Want to <span className='text-red-500'>work</span> with us?</h1>
                        <p className="py-6">Human asset that we have is our real pride, Which keeps our wheel of success running. Qubic Business Solutions comprises of a highly qualified and professional team having experience of decades. If you wish to join the team of Pakistan`s fastest growing IT & BPO company then here`s the chance. Fill up the required details below, attach your CV and click on Submit. Good Luck!.</p>
                        <div className='flex gap-4 text-red-500 text-2xl'>
                            <FaFacebook />
                            <FaInstagramSquare />
                            <FaViber />

                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="Name" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkSection;