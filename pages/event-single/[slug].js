import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Events from '../../api/event'
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import EventTabs from './alltab'
import EventSidebar from './sidebar'
import Footer from '../../components/footer';
import Logo from '/public/images/cedal/CedalLogo.png'
import Image from 'next/image';



const TeamSinglePage = (props) => {
    const router = useRouter()

    const eventDetails = Events.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar2 Logo={Logo} />
            <PageTitle pageTitle={eventDetails?.eTitle} pagesub={'Case Single'} />
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-event-item">
                                <div className="wpo-event-img">
                                    <Image src={eventDetails?.eImg} alt=""/>
                                </div>
                                <div className="wpo-event-details-text">
                                    <h2>{eventDetails?.subTitle}</h2>
                                    <p>{eventDetails?.dec}</p>
                                </div>
                                <EventTabs />
                            </div>
                        </div>
                        <EventSidebar/>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
