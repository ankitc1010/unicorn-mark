import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import '../assets/scss/main.scss'

import logo from '../assets/img/logo.png'
import speed from '../assets/img/speed.png'
import scalable from '../assets/img/scalable.png'
import stable from '../assets/img/stable.png'
import team1 from '../assets/img/team1.png'
import team2 from '../assets/img/team3.png'

import styled from 'styled-components'

import Nav from '../components/Nav'
import Team from '../components/Team'

class IndexPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />

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
                        <p className="card__price-only">To</p>
                        <p className="card__price-value">
                          Build Investment Branding Documents
                        </p>
                      </div>
                      <Link
                        to="/investment/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Read More!</a>
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
                        Machine Learning POCs
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
                        <p className="card__price-only">To</p>
                        <p className="card__price-value">
                          Build Machine Learning Prototypes
                        </p>
                      </div>
                      <Link
                        to="/machinelearning/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Read More!</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        Digital Content Marketing
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Digital Content Marketing is a set of social and digital
                        activities which ensures you are relevant and discussed
                        in the digital community with minimal budgets
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To</p>
                        <p className="card__price-value">
                          Do Digital Content Marketing
                        </p>
                      </div>
                      <Link
                        to="/marketing/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Read More!</a>
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
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        Product and Customer Research
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Product and Customer Research is a study that ensures
                        you get maximum customer revenue with minimum developers
                        and salespersons through comparative ROI evaluation
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">To</p>
                        <p className="card__price-value">
                          Do Product and Customer Research
                        </p>
                      </div>
                      <Link
                        to="/research/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Read More!</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--5">&nbsp;</div>
                    <h4 className="card__heading">
                      <span className="card__heading-span card__heading-span--3">
                        Bots and E-commerce Platform
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        Bots and E-commerce Platform provides automation and
                        optimization technology to seamlessly integrate business
                        operations for efficiency
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">For</p>
                        <p className="card__price-value">
                          Bots and E-commerce Platform
                        </p>
                      </div>
                      <Link
                        to="/website/"
                        activeStyle={{
                          color: 'red',
                        }}
                      >
                        <a className="btn btn--white">Read More!</a>
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
          </section>

          <section className="section-book">
            <div className="row">
              <div className="book">
                <div className="book__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">Start booking now</h2>
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full name"
                        id="name"
                        required
                      />
                      <label for="name" className="form__label">
                        Full name
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        type="email"
                        className="form__input"
                        placeholder="Email address"
                        id="email"
                        required
                      />
                      <label for="email" className="form__label">
                        Email address
                      </label>
                    </div>

                    <div className="form__group u-margin-bottom-medium">
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="small"
                          name="size"
                        />
                        <label for="small" className="form__radio-label">
                          <span className="form__radio-button" />
                          Small tour group
                        </label>
                      </div>

                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="large"
                          name="size"
                        />
                        <label for="large" className="form__radio-label">
                          <span className="form__radio-button" />
                          Large tour group
                        </label>
                      </div>
                    </div>

                    <div className="form__group">
                      <button className="btn btn--green">
                        Next step &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section> */}
        </main>

        <footer className="footer">
          <div className="footer__logo-box">
            <picture className="footer__logo">
              <source
                srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                media="(max-width: 37.5em)"
              />
              <img
                srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x"
                alt="Full logo"
                src="img/logo-green-2x.png"
              />
            </picture>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Carrers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Privacy policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by{' '}
                <a href="#" className="footer__link">
                  UnicornMark
                </a>{' '}
                for his online course . Copyright &copy; by Unicorn Mark.
              </p>
            </div>
          </div>
        </footer>

        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img
                src="img/nat-8.jpg"
                alt="Tour photo"
                className="popup__img"
              />
              <img
                src="img/nat-9.jpg"
                alt="Tour photo"
                className="popup__img"
              />
            </div>
            <div className="popup__right">
              <a href="#section-tours" className="popup__close">
                &times;
              </a>
              <h2 className="heading-secondary u-margin-bottom-small">
                Start booking now
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read these terms before booking
              </h3>
              <p className="popup__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                sed risus pretium quam. Aliquam sem et tortor consequat id.
                Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
                neque egestas congue. Placerat orci nulla pellentesque dignissim
                enim sit. Vitae semper quis lectus nulla at volutpat diam ut
                venenatis. Malesuada pellentesque elit eget gravida cum sociis
                natoque penatibus et. Proin fermentum leo vel orci porta non
                pulvinar neque laoreet. Gravida neque convallis a cras semper.
                Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
                libero justo laoreet sit. Amet massa vitae tortor condimentum
                lacinia quis vel eros donec. Sit amet facilisis magna etiam.
                Imperdiet sed euismod nisi porta.
              </p>
              <a href="#" className="btn btn--green">
                Book now
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default IndexPage
