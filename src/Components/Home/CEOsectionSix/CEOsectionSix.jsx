import React from 'react';
import ceo from '../../../assets/banner/ceo.jpg'


const CEOsectionSix = () => {
    return (
        <div className='grid sm:grid-cols-1 sm:gap-4  md:grid-cols-2 gap-5 my-20'>
            <div>
                <img className='h-[500px] w-[80%]' src={ceo} alt="" />
            </div>
            <div>
                <h1 className="text-4xl text-red ">CEO</h1>
                <p className=' '>At Qubic Business Solutions, we provide call answering service that serves as a resource for all your business communication needs.</p>
                <h1 className="text-4xl text-red p-2 pt-5">Message</h1>
                <p className=''>Welcome to Qubic Business Solutions website. QBS is an exciting, fast growing IT & BPO company with friendly atmosphere. At QBS, we aim not only to become Pakistan`s leading company,</p>
                <h1 className="text-4xl text-red p-2 pt-5">Vision & Mission</h1>
                <p className=''>Foundation of our business is on highest degree of ethics, integrity and dedication. Which enables us to be consistent with our commitment with our clients. Our vision is to be the employer.</p>


            </div>
        </div>
    );
};

export default CEOsectionSix;