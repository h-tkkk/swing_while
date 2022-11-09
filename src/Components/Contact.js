import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
    render() {
    return (
      <section id="resume">
        <Fade right duration={1300} cascade>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>내 연습장 회원권</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                  <div className="twelve columns">
                    <div key="2">
                      <p className="info">
                            내가 보유한 회원권을 카드 형태로 간편하게 관리
                      </p>
                      <img src="/images/3.png"/>
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

export default Contact;
