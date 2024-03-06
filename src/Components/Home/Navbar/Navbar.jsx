import React from 'react';
import img1 from '../../../assets/banner/img-1.avif'
import img2 from '../../../assets/banner/img-2.avif'
import img3 from '../../../assets/banner/img-3.avif'
import img5 from '../../../assets/banner/img-5.avif'

const Navbar = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img5} className="w-full sm:w-[100%]" />

                    <div >
                        <p className="absolute top-2/4 left-[20%] text-center text-2xl italic text-red-500 w-2/4   bg-opacity-80">DHAKA'S LANDIN IT AND BPO SOLUTIONS PROVIDER WITH A TEAM OF HEIGHLY TRANIED <br /> PROFETIONALS <br /> <span className='btn bg-red-500 text-white'> Call us Now</span>  </p>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full sm:w-[100%]" />

                    <div>
                        <p className="absolute top-2/4 left-[20%] text-center text-2xl text-red-500 w-2/4">DHAKA'S LANDIN IT AND BPO SOLUTIONS PROVIDER WITH A TEAM OF HEIGHLY TRANIED <br /> PROFETIONALS <br /> <span className='btn bg-red-500 text-white'> Call us Now</span>  </p>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full sm:w-[100%]" />
                    <div>
                        <p className="absolute top-2/4 left-[20%] text-center text-2xl text-red-500 w-2/4">DHAKA'S LANDIN IT AND BPO SOLUTIONS PROVIDER WITH A TEAM OF HEIGHLY TRANIED <br /> PROFETIONALS <br /> <span className='btn bg-red-500 text-white'> Call us Now</span>  </p>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img1} className="w-full sm:w-[100%]" />
                    <div>
                        <p className="absolute top-2/4 sm:text-white left-[20%] text-center text-2xl text-red-500 w-2/4">DHAKA'S LANDIN IT AND BPO SOLUTIONS PROVIDER WITH A TEAM OF HEIGHLY TRANIED <br /> PROFETIONALS <br /> <span className='btn bg-red-500 text-white'> Call us Now</span>  </p>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;