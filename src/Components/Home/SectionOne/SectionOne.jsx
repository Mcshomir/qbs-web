import React from 'react';
import imgOne from '../../../assets/banner/img-4.avif'
import imgTwo from '../../../assets/banner/img-6.avif'
import { SlCallIn } from "react-icons/sl";


const SectionOne = () => {
    return (
        <div className='grid sm: grid-cols-1 md:grid-cols-2 m-10'>
            <div className='relative'>
                <img className='w-3/4 h-[388px]' src={imgOne} alt="" />
                <img className='w-4/6 h-[388px] hidden md:block absolute top-44 left-44' src={imgTwo} alt="" />

            </div>
            <div className='p-5'>
                <p className='text-2xl text-center p-5'>Experience Top Notch <span className='text-red-500'> Call Answering </span> <br />
                    Service with <span className='text-red-500'> Qubic Business</span></p>

                <p>
                    Qubic Business Solutions, we provide call answering service that serves as a resource for all your business communication needs. The entire team of our virtual agents is knowledgeable and highly trained, meeting all the market standards. Due to our stringent quality control steps, we can guarantee you that every caller of yours gets nothing less than exceptional treatment which will positively impact your business growth. <br /> <br />

                    Our digital assistants are simply at the heart of a fantastic customer care service. Being equipped with state of the art systems and with experienced professionals onboard we are able to offer first-rate telephone call answering service. Qubic Business Solutions provides you with viable solutions to cater to the following needs of your clientele:
                </p>
                <div className='w-96 sm:ml-4 bg-gray-200 shadow-lg rounded-lg text-center p-3 md:ml-24'>
                    <p>  <span className='flex justify-center text-2xl text-red-500'>
                        <SlCallIn />
                    </span>

                        <span>Inbound and outbound call service. Communication with your customers over any kind of network. Assist you gain more business opportunities.</span></p>
                </div>


            </div>
        </div>
    );
};

export default SectionOne;