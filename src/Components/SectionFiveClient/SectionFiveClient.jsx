import React from 'react';
import brandImage from '../../assets/barand-logo/brand-1.png'
import brandImageTwo from '../../assets/barand-logo/brand-2.png'
import brandImageThree from '../../assets/barand-logo/brand-3.png'
const SectionFiveClient = () => {
    return (
        <div className='my-20'>


            <div>
                <div className='text-center '>
                    <h1 className="text-4xl">SOME OF OUR <span className='text-red-500'>CLIENTS</span></h1>
                    <p>Please Note That We Don`t Publish Our Client`s Names Unless And Untill We Get Permission To Do So From Their Side...</p>
                </div>

                <div>
                    <div className="carousel w-full my-10">
                        <div id="item1" className="carousel-item w-full">
                            <img src={brandImage} className="w-[300px] flex mx-auto" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src={brandImageTwo} className="w-[300px] flex mx-auto" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src={brandImageThree} className="w-[300px] flex mx-auto" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src={brandImage} className="w-[300px] flex mx-auto" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default SectionFiveClient;