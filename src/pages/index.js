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
              <span className="heading-primary--main">UnicornMark</span>
              <span className="heading-primary--sub">branding simplified</span>
            </h1>

            <a href="#section-tours" className="btn btn--white btn--animated">
              Offerings
            </a>
          </div>
        </header>

        <main>
          {/* <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world" />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass" />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Meet nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Find your way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>

              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart" />
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Live a healthier life
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam, ipsum sapiente aspernatur.
                  </p>
                </div>
              </div>
            </div>
          </section>  */}

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
                        <li>Brand Identity</li>
                        <li>Sentiment Analysis Report</li>
                        <li>Peer Group Analysis</li>
                        <li>Brand Keyword/Phrases</li>
                        <li>Digital Marketing Blueprint</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">For</p>
                        <p className="card__price-value">Investment Branding</p>
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
                        POC Development
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>7 day tours</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">For</p>
                        <p className="card__price-value">POC Development</p>
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
                        Digital Marketing
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">For</p>
                        <p className="card__price-value">Digital Marketing</p>
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
                        Product Research
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">For</p>
                        <p className="card__price-value">Product Research</p>
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
                        Websites and Webstores
                      </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tours</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">For</p>
                        <p className="card__price-value">
                          Websites and Webstores
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

          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">Our Team</h2>
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
