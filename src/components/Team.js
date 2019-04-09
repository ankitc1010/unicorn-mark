import React, { Component } from 'react'
import styled from 'styled-components'

import aashay from './img/aashay.jpg'
import aman from './img/aman.png'
import ankit from './img/ankit.jpg'
import goswami from './img/goswami.jpg'
import prateek from './img/prateek.jpg'
import vinay from './img/Vinay.jpg'
import shalabh from './img/shalabh.jpg'

const Team = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 0 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
const TeamMember = styled.div`
  display: flex;
  background: rgba(256, 256, 256, 0.9);
  padding: 1rem;
  border-radius: 4px;
  img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    @media (max-width: 800px) {
      width: 8rem;
      height: 8rem;
    }
  }
  > div:last-child {
    margin: 0rem 1rem 0rem 1rem;
    h4 {
      font-size: 2rem;
      line-height: 2.2rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0.5rem 0;
    }
    > p:nth-child(2) {
      font-weight: bold;
      font-size: 1.7rem;
    }
    > p:last-child {
      font-size: 1.2rem;
    }
  }
`

class TeamSection extends Component {
  render() {
    return (
      <Team>
        <TeamMember>
          <div>
            <img src={aman} />
          </div>
          <div>
            <h4>Aman Alok</h4>
            <p>Managing Partner and CEO</p>
            <p>
              Worked with 25+ Startups over 2 years of professional experience
            </p>
            <p>Alumnus of BIT, Bangalore</p>
          </div>
        </TeamMember>
        <TeamMember>
          <div>
            <img src={goswami} />
          </div>
          <div>
            <h4>Saurav Goswami</h4>
            <p>Investor and Director</p>
            <p>
              Worked with 20+ MNCs such as Microsoft and 10+ startups such as
              Flipkart over 6 years of professional experience
            </p>
            <p>Alumnus of IIM, Lucknow and BITS, Pilani</p>
          </div>
        </TeamMember>
        <TeamMember>
          <div>
            <img src={aashay} />
          </div>
          <div>
            <h4>Aashay Sachdeva</h4>
            <p>Partner, Machine Learning</p>
            <p>
              Worked with 5+ companies over 1 year of professional experience
            </p>
            <p>Alumnus of VIT, Vellore</p>
          </div>
        </TeamMember>
        <TeamMember>
          <div>
            <img src={vinay} />
          </div>
          <div>
            <h4>Vinay Jugati</h4>
            <p>Partner, Strategy</p>
            <p>
              Worked with 5+ Startups over 2 years of professional experience
            </p>
            <p>Alumnus of RVCE, Bangalore</p>
          </div>
        </TeamMember>
        <TeamMember>
          <div>
            <img src={shalabh} />
          </div>
          <div>
            <h4>Shalabh Garg</h4>
            <p>Partner, Marketing and growth</p>
            <p>
              2 years of professional experience
            </p>
            <p>Alumnus of AIT, Bangalore</p>
          </div>
        </TeamMember>
        <TeamMember>
          <div>
            <img src={prateek} />
          </div>
          <div>
            <h4>Prateek Rathore</h4>
            <p>Partner, Content & Design</p>
            <p>
              Worked with 20+ Startups over 2 years of professional experience
            </p>
            <p>Alumnus of DSCE, Bangalore</p>
          </div>
        </TeamMember>
      </Team>
    )
  }
}

export default TeamSection
