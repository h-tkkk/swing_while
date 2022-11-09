import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {

    return (
      <header id="home">
        <img src="/images/swing_while_main.jpg"/>

        <div id="rowBanner">
          <div className="banner-text">
            <Fade top id="bannerTextRow">
              <h1 className="responsive-headline">
                <span>Swing</span> <span id="while">While</span>
              </h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>골프예약을 조금 더 쉽게</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="https://www.flaticon.com/free-icons/ios" className="app-store">
                  <img src="/images/app_store.png" width="80px"/>
                </a>
                <a href="https://www.flaticon.com/free-icons/ios" className="play-store">
                  <img src="/images/playstore.png" width="80px"/>
                </a>
                {/* <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>GoogleStore
                </a> */}
              </ul>
            </Fade>
          </div>
        </div>
        
      </header>
    );
  }
}

export default Header;
