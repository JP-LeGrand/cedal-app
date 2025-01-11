import React from 'react';
import About from '../components/about';
import CauseSection from '../components/CauseSection';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/Navbar';
import Scrollbar from '../components/scrollbar';
import Service from '../components/Service';
import CtaSection from '../components/ctaSection';
import EventSection from '../components/EventSection';
import Logo from '/public/images/cedal/CedalLogo.png'
import vimg from '/public/images/volunteer-home.jpg'
import PartnerSection from '../components/PartnerSection';

const HomePage = (props) => {

    return (
        <div>
            <Navbar Logo={Logo} />
            <Hero />
            <Service Fclass={'wpo-features-section-s2'} vclassClass={'v1'}/>
            <About/>
            <CauseSection/>
            <CtaSection vImg={vimg} cTitle={'Lets Chenge The World With Humanity'}/>
            <EventSection/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default HomePage;


