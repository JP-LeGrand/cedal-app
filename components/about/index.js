import React from 'react'
import Link from  'next/link'
import abimg from '/public/images/about.jpg'
import shape from '/public/images/ab-shape-2.png'
import Image from 'next/image'


const About = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt=""/>
                                <div className="wpo-ab-shape-1">
                                    <div className="s-s1"></div>
                                    <div className="s-s2"></div>
                                </div>
                                <div className="wpo-ab-shape-2"><Image src={shape} alt=""/></div>
                                <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>R0</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>About Us</span>
                            <h2>Transforming Lives: One Hand at a Time</h2>
                            <p>The center for empowerment, development, and advocacy LeGrand  (CEDAL) is a non-profit organization based in Johannesburg,
                             South Africa. It was established in 2004 with the primary aim to empower disadvantaged and vulnerable young people to gain power and extent in order to influence their own situation. </p>
                            <ul>
                                <li>CEDAL encourages vulnerable youth to study and not to miss out on opportunities to flourish. In our mentorship program, we impart learning skills that focus on practical solutions.</li>
                                <li>We facilitate the connection between young learners with a volunteer mentor who contributes to the strengthening of their capacities.</li>
                                <li>CEDAL networks with other stakeholders that are active in empowering young people. In that way,
                                 we are contributing to our great mission of contributing to the human-centered development process aimed at paying attention to the interests of vulnerable youth.</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/about">More About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;