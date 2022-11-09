import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    return (
      <section id="resume">
        <Fade left duration={1300} cascade>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>모바일 타석 예약</span>
              </h1>
            </div>

            <div className="nine columns main-col">
                <div className="row item">
                    <div className="twelve columns">
                      <div key="3">
                        <p className="info">
                            실시간으로 연습장 타석 현황을 조회하고 간편하게 앱으로 타석 배정
                        </p>
                        <img src="/images/6.png"/>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </Fade>
      </section>
    );
  }
}

export default About;
