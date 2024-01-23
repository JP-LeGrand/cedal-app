import React from "react";
import Link from 'next/link'
import Clients from './client'
import Image from 'next/image'

import hero1 from '/public/images/slider/right-img2.png'
import hero2 from '/public/images/slider/s.png'
import hero3 from '/public/images/slider/right-img.png'




const Hero =() => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span>Empowering Lives, Transforming Futures</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Join Us in Creating a World Where Every Individual Thrives</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We are on a mission to empower lives and transform futures through innovative programs that leave a lasting impact.</p>
                            </div>
                            <div className="btns">
                                <Link href="/about" className="btn theme-btn-s2">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <Image src={hero1} alt=""/>
                                    </div>
                                    <div className="wpo-happy-client">
                                        <Clients/>
                                    </div>
                                </div>
                                <div className="right-item">
                                    <div className="wpo-total-project">
                                        <div className="wpo-total-project-wrap">
                                            <div className="wpo-total-project-icon">
                                                <i className="fi flaticon-salary"></i>
                                            </div>
                                            <div className="wpo-total-project-text">
                                                <h3>252+</h3>
                                                <p>Total Projects</p>
                                            </div>
                                        </div>
                                        <div className="project-shape">
                                            <Image src={hero2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="r-img">
                                        <Image src={hero3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;
