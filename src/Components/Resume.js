import React, { Component } from "react";
import Slide from "react-reveal";
import { Fade } from "react-reveal";

class Resume extends Component {

  render() {

    return (
      <section id="resume">
        <Fade left duration={1300} cascade>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>간편 회원권 검색</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div key="1">
                    <p className="info">
                        전화번호 인증만으로 간편하게 스윙와일 제휴 전국 연습장에서 내 회원권을 검색해서 가져오기
                    </p>
                  </div>
                </div>
                    <img src="/images/4.png"/>
              </div>
            </div>
          </div>
        </Fade>

        <Slide right duration={1300} cascade>
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
                    </div>
                  </div>
                  <img src="/images/3.png"/>
                </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300} cascade>
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
                      </div>
                    </div>
                    <img src="/images/6.png"/>
                  </div>
              </div>
            </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
