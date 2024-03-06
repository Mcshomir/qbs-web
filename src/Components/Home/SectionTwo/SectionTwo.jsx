import React from 'react';
import imgOne from '../../../assets/img-1.avif'
import imgTwo from '../../../assets/img-2.avif'
import imgThree from '../../../assets/img-3.avif'
import imgFour from '../../../assets/img-4.avif'
import imgFive from '../../../assets/img-5.avif'
import imgSix from '../../../assets/img-6.avif'

const SectionTwo = () => {
    return (
        <div className='my-20 '>
            <div className='text-center'>
                <h1 className='text-2xl'>EXPLORE OUR <span className='text-red-500'>SERVICES</span></h1> <br></br>
                <p className=' flex place-items-center '>The benefits of outsourcing include the advantages of reduced costs and increased efficiency, as well as the ability to predict business results and support strategic planning. At Qubic Business Solutions, we are focused on providing the best Business .</p>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                <div className="card w-96 shadow-lg glass ">
                    <figure><img src={imgOne} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">DISPATCH CENTER SERVICES</h2>
                        <p>Qubic Business Solutions offers WORLD CLASS uninterrupted 24/7 inbound and outbound call center and contact center services to different Taxi, Limousine, Home Delivery, Wear Houses, And Emergency Services.</p>

                    </div>
                </div>
                <div className="card w-96 shadow-lg glass ">
                    <figure><img src={imgTwo} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">TELE-MARKETING SALES SERVICES</h2>
                        <p>Qubic Business Solutions offers Tele-Marketing services to businesses from all around the world to given them an opportunity to boost their sales to maximum pottential through our highly trained professional staff.</p>

                    </div>
                </div>
                <div className="card w-96 shadow-lg glass ">
                    <figure><img src={imgThree} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">LIVE 24/7 WEB CHAT SUPPORT</h2>
                        <p>Qubic Business Solutions offers world class 24/7 Live Chat Support on behalf of your business, on your own website to provide full fledge customer and technical support to your customers. Nowadays, People prefer getting support.</p>

                    </div>
                </div>
                <div className="card w-96 shadow-lg glass ">
                    <figure><img src={imgFour} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">AVIATION SOLUTIONS</h2>
                        <p>qubic Business offers wide range of Technical Operational Commercial consultancy services, regulatory compliance support and hands on airworthiness and maintenance management and advice, all to the highest standards. Being more than a consultancy,s..</p>

                    </div>
                </div>
                <div className="card w-96 shadow-lg glass ">
                    <figure><img src={imgOne} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">SOFTWARE & APP SOLUTIONS</h2>
                        <p>Qubic Business Solutions offers top of the line Software and App development solutions. You can have any kind of Desktop, Web, Android and iOS applications developed through as at a very reasonable cost.</p>

                    </div>
                </div>
                <div className="card w-96 shadow-lg glass ">
                    <figure><img src={imgOne} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            S.E.O SOLUTIONS</h2>
                        <p>Qubic Business Solutions knows what you actually need to compete in market. That is why QBS offers the best Search Engine Optimization services to its client so that they can rank top in their business specialization on search engines to avail the maximum opportunity to</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo; 