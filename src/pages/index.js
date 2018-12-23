import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Wrapper } from '../components/styled/PageRelated'

import '../assets/scss/main.scss'

import logo from '../assets/img/logo.png'
import speed from '../assets/img/speed.png'
import scalable from '../assets/img/scalable.png'
import stable from '../assets/img/stable.png'
import team1 from '../assets/img/team1.png'
import bi from '../assets/img/bi.jpg'
import team2 from '../assets/img/team3.png'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Clients from '../components/Clients'

class IndexPage extends React.Component {
  componentDidMount() {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (let registration of registrations) {
        registration.unregister()
      }
    })
  }
  render() {
    return (
      <Wrapper>
        <Nav home />
        <Helmet
          title="Unicorn Mark"
          meta={[
            {
              name: 'description',
              content: 'Brand and marketing science, for Sales and ROI',
            },
            {
              name: 'keywords',
              content:
                'marketing, strategy consulting, consulting, web development, development, branding, machine learning, pocs',
            },
          ]}
        />
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">
                <img src={logo} />
              </span>
              <span className="heading-primary--sub">
                Brand and Marketing Science, for Sales and ROI
              </span>
            </h1>

            <a href="#section-tours" className="btn btn--white btn--animated">
              Tell me more
            </a>
          </div>
        </header>

        <main>
          <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Our Offerings</h2>
            </div>

            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--1">
                        Investment Branding
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Investment Branding is a set of professional documents
                        which articulates a well-researched business opportunity
                        and a rational plan towards the achievement of scale
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To build</p>
                        <p className="card__price-value">
                          Investment Branding Documents
                        </p>
                      </div>
                      <Link
                        to="/investment/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Tell me more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--2">
                        Machine Learning POC
                        <span style={{ textTransform: 'lowercase' }}>s</span>
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Machine Learning Proof-of-Concepts are custom-built
                        prototype applications which demonstrate and measure the
                        scope of automation and AI for your business
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To build</p>
                        <p className="card__price-value">
                          Machine Learning Prototypes
                        </p>
                      </div>
                      <Link
                        to="/machinelearning/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Tell me more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4
                      className="card__heading"
                      style={{ fontSize: '2.1rem' }}
                    >
                      <span className="card__heading-span card__heading-span--3">
                        Digital Content Marketing
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Digital Content Marketing is a set of social and digital
                        activities which ensures sustained relevance in the
                        digital community with minimal budgets
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To do</p>
                        <p className="card__price-value">
                          Digital Content Marketing
                        </p>
                      </div>
                      <Link
                        to="/marketing/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Tell me more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--4">&nbsp;</div>
                    <h4
                      className="card__heading"
                      style={{ fontSize: '2.1rem' }}
                    >
                      <span className="card__heading-span card__heading-span--3">
                        Product and Customer Research
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Product and Customer Research is a set of processes that
                        ensures maximum customer revenue with minimum developers
                        and salespersons through evaluation of ROI impact
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To do</p>
                        <p className="card__price-value">
                          Product and Customer Research
                        </p>
                      </div>
                      <Link
                        to="/research/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Tell me more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--5">&nbsp;</div>
                    <h4
                      className="card__heading"
                      style={{ fontSize: '2.1rem' }}
                    >
                      <span className="card__heading-span card__heading-span--3">
                        Business Intelligence & Bot Based Process Automation
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        BI Tools and Bots provide automation and optimization
                        technology to seamlessly integrate business operations
                        for efficiency
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To build</p>
                        <p className="card__price-value">
                          Business Intelligence & Bot Based Process Automation
                        </p>
                      </div>
                      <Link
                        to="/biandbots/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Tell me more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--6">&nbsp;</div>
                    <h4
                      className="card__heading"
                      style={{ fontSize: '2.1rem' }}
                    >
                      <span className="card__heading-span card__heading-span--3">
                        E-Commerce Store, Webapps & Mobile Apps
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        E-Commerce Store, Webapps & MobileApps are ways to have
                        a global marketplace for branding, marketing and
                        one-click sales setup for all kinds of business
                        offerings.
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To do</p>
                        <p className="card__price-value">
                          E-Commerce Store, Webapps & Mobile Apps
                        </p>
                      </div>
                      <Link
                        to="/websites/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Tell me more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn btn--green">
                Discover all tours
              </a>
            </div> */}
          </section>

          <section className="section-features" id="section-features">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary" style={{ color: 'white' }}>
                Our Team
              </h2>
            </div>
            <Team />
          </section>

          <section className="section-tours" id="clients">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Clients</h2>
            </div>
            <Clients />
          </section>

          {/* <section className="section-stories">
            <div className="bg-video">
              <video className="bg-video__content" autoplay muted loop>
                <source src="img/video.mp4" type="video/mp4" />
                <source src="img/video.webm" type="video/webm" />
                Your browser is not supported!
              </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>

            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src="img/nat-8.jpg"
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">Mary Smith</figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img
                    src="img/nat-9.jpg"
                    alt="Person on a tour"
                    className="story__img"
                  />
                  <figcaption className="story__caption">
                    Jack Wilson
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    WOW! My life is completely different now
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui. Aperiam, ipsum sapiente aspernatur libero repellat quis
                    consequatur ducimus quam nisi exercitationem omnis earum
                    qui.
                  </p>
                </div>
              </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
              <a href="#" className="btn-text">
                Read all stories &rarr;
              </a>
            </div>
          </section>*/}
        </main>
        <Footer />
      </Wrapper>
    )
  }
}

export default IndexPage
