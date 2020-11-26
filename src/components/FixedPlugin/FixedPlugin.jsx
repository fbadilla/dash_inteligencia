/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Toggle from "react-toggle";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown open",
      bg_checked: false,
      bgImage: this.props.bgImage
    };
  }
  handleClick = () => {
    this.props.handleFixedClick();
  };
  
  onChangeClick = () => {
    this.props.handleHasImage(!this.state.bg_checked);
    this.setState({ bg_checked: !this.state.bg_checked });
  };
  render() {
    return (
      <div className="fixed-plugin">
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-filter fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">Call Center Activos</li>
            <li className="button-container" onClick={this.handleClick}>
              <div className="">
                <Link to= "/admin/araya"
                      activeClassName="active"
                  className="btn btn-info btn-block btn-fill"
                >
                  Rodrigo de Araya
                </Link>
              </div>
            </li>
            <li className="button-container" onClick={this.handleClick}>
              <div className="">
              <Link to= "/admin/matta"
                      activeClassName="active"
                  className="btn btn-info btn-block btn-fill"
                >
                  Matta
                </Link>
              </div>
            </li>
            <li className="button-container" onClick={this.handleClick}>
            <Link to= "/admin/ucentral"
                      activeClassName="active"
                  className="btn btn-info btn-block btn-fill"
                >
                Ucentral
              </Link>
            </li>
            <li className="button-container" onClick={this.handleClick}>
              <div className="">
              <Link to= "/admin/ubo"
                      activeClassName="active"
                  className="btn btn-info btn-block btn-fill"
                >
                  UBO
                </Link>
              </div>
            </li>
            <li className="button-container" onClick={this.handleClick}>
              <div className="">
              <Link to= "/admin/zanartu"
                      activeClassName="active"
                  className="btn btn-info btn-block btn-fill"
                >
                  Zañartu
                </Link>
              </div>
            </li>
            <li className="button-container" onClick={this.handleClick}>
              <div className="">
              <Link to= "/admin/dashboard"
                      activeClassName="active"
                  className="btn btn-success btn-block btn-fill"
                >
                  Dashboard General
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
