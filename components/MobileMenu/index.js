import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  { id: 31, title: "About", link: "/about" },
  {
    id: 2,
    title: "Cause",
    link: "/cause",
    submenu: [
        {
            id: 21,
            title: 'Bright Minds',
            link: '/cause-single/Bright-Minds'
        },
        {
            id: 22,
            title: 'Empower Her',
            link: '/cause-single/Empower-Her'
        },
        {
            id: 23,
            title: 'Healthy Future',
            link: '/cause-single/Healthy-Future'
        }
    ]
  },
  {
    id: 4,
    title: "Event",
    link: "/event",
  },

  {
    id: 33,
    title: "Services",
    link: "/service/Academic-Support",
    submenu: [
        {
            id: 31,
            title: 'Academic Support',
            link: '/service/Academic-Support'
        },
        {
            id: 32,
            title: 'Training in good people skills',
            link: '/service/Training-in-good-people-skills'
        },
        {
            id: 33,
            title: 'Adolescent health awareness',
            link: '/service/Adolescent-health-awareness'
        },
        {
            id: 34,
            title: 'Gender Equality',
            link: '/service/Women-Equality'
        }
    ]
  },
  {
    id: 7,
    title: "Volunteer",
    link: "/volunteer",
  },
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="menu-close">
            <div className="clox" onClick={this.menuHandler}>
              <i className="ti-close"></i>
            </div>
          </div>

          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link onClick={ClickHandler} href={item.link}>
                      {item.title}
                    </Link>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpen}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  href={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <button type="button" className="navbar-toggler open-btn">
            <span className="icon-bar first-angle"></span>
            <span className="icon-bar middle-angle"></span>
            <span className="icon-bar last-angle"></span>
          </button>
        </div>
      </div>
    );
  }
}
