import React from 'react'
import Link from 'next/link'
import Causes from '../../api/cause'
import Image from 'next/image'

const CauseSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <div className={`wpo-campaign-area section-padding R{props.CmClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Our Causes</span>
                            <h2>Empowering Youth, Building Futures</h2>
                            <p>Explore our impactful causes aimed at empowering disadvantaged youth and creating opportunities for a brighter tomorrow. Join us in supporting these initiatives and making a difference in the lives of young individuals in Johannesburg.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-campaign-wrap">
                    <div className="row">
                    {Causes.slice(0, 3).map((Cause, citem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={citem}>
                            <div className="wpo-campaign-single">
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <Image src={Cause.cImg} alt=""/>
                                        <span className="thumb">{Cause.thumb}</span>
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/[slug]" as={`/cause-single/${Cause.slug}`}>{Cause.cTitle}</Link></h2>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar" style={{width: `R{Cause.process}%`}}>
                                                            <div className="progress-value"><span>{Cause.process}</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li><span>Goal:</span> R{Cause.Goal}</li>
                                                <li><span>Raised:</span> R{Cause.Raised}</li>
                                            </ul>
                                            <div className="campaign-btn">
                                                <ul>
                                                    <li>
                                                        <span><Link onClick={ClickHandler} href="/cause-single/[slug]" as={`/cause-single/R{Cause.slug}`}>{Cause.authorName}</Link></span>
                                                    </li>
                                                    <li><Link onClick={ClickHandler} className="e-btn" href="/donate">Donate Now</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CauseSection;