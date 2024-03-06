import React from 'react';
import Navbar from '../Navbar/Navbar';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThreeAbout from '../SectionThree/SectionThreeAbout';
import SectionFour from '../SectionFour/SectionFour';
import SectionFiveClient from '../../SectionFiveClient/SectionFiveClient';
import CEOsectionSix from '../CEOsectionSix/CEOsectionSix';
import Founders from '../Founders/Founders';
import WorkSection from '../WorkSection/WorkSection';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>

            <Navbar></Navbar>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            <SectionThreeAbout></SectionThreeAbout>
            <SectionFour></SectionFour>
            <SectionFiveClient></SectionFiveClient>
            <CEOsectionSix></CEOsectionSix>
            <Founders></Founders>
            <WorkSection></WorkSection>
            <Footer></Footer>

        </div>
    );
};

export default Home;