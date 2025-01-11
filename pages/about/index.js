import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/cedal/CedalLogo.png'
import Service from '../../components/Service';
import About from '../../components/about';
import FunFact from '../../components/FunFact';
import CauseSection from '../../components/CauseSection';
import PartnerSection from '../../components/PartnerSection';


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            {/* <VideoSec/> */}
            <Service Fclass={'wpo-features-section-s2'}/>
            <About/>
            <FunFact/>
            <CauseSection/>
            <PartnerSection tNone={'title-none'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
