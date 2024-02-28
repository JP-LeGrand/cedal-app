import React, { Component } from "react";
import Link from "next/link";
import MobileMenu from "../../components/MobileMenu";
import Image from "next/image";

export default class Header extends Component {
  state = {
    isSearchShow: false,
  };

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow,
    });
  };

  render() {
    const { isSearchShow } = this.state;

    const SubmitHandler = (e) => {
      e.preventDefault();
    };

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };
    return (
      <header id="header" className={this.props.topbarNone}>
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link
                      onClick={ClickHandler}
                      className="navbar-brand"
                      href="/home"
                    >
                      <Image src={this.props.Logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} href="/">
                          Home
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} href="/about">
                          About
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/cause">Causes</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/cause-single/Bright-Minds"
                            >
                              Bright Minds
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/cause-single/Empower-Her"
                            >
                              Empower Her
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/cause-single/Healthy-Future"
                            >
                              Healthy Future
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/event">Events</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="/service/Academic-Support">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/service/Academic-Support"
                            >
                              Academic Support
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/service/Training-in-good-people-skills"
                            >
                              Training in good people skills
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/service/Adolescent-health-awareness"
                            >
                              Adolescent health awareness
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/service/Women-Equality"
                            >
                              Gender Equality
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} href="/volunteer">
                              Volunteer
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right">
                    <div className="close-form">
                      <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        href="/donate"
                      >
                        Donate Now
                      </Link>
                    </div>
                    <div className="header-search-form-wrapper">
                      <div className="cart-search-contact">
                        <button
                          onClick={this.searchHandler}
                          className="search-toggle-btn"
                        >
                          <i
                            className={`${
                              isSearchShow ? "ti-close" : "ti-search"
                            }`}
                          ></i>
                        </button>
                        <div
                          className={`header-search-form ${
                            isSearchShow ? "header-search-content-toggle" : ""
                          }`}
                        >
                          <form onSubmit={SubmitHandler}>
                            <div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search here..."
                              />
                              <button type="submit">
                                <i className="fi flaticon-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
