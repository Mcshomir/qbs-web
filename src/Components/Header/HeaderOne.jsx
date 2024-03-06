import React from 'react';
import { FaPhoneSquareAlt, FaFacebook, FaInstagramSquare, FaViber } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";


const HeaderOne = () => {
    return (
        <div className='bg-red-500 text-white hidden sm:hidden md:hidden  lg:block'>
            <div className='flex justify-between px-20 py-3'>
                <div>

                    <div className='flex gap-5'>
                        <div className='flex'>
                            <h4 className=''><HiMailOpen /></h4>  <h4> qbs.sulutions@gmail.com</h4>
                        </div>
                        <div className='flex'>
                            <h4><FaPhoneSquareAlt /></h4> <h4> 01915205801</h4>
                        </div>
                    </div>

                </div>
                <div className='flex gap-4 '>
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaViber />

                </div>
            </div>
        </div>
    );
};

export default HeaderOne;