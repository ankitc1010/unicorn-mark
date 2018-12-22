import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import image from '../assets/img/website.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Wrapper, Page, Card } from '../components/styled/PageRelated'
import { ContactButton } from '../components/Contact'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Helmet
      title="E-Commerce Store, Webapps & Mobile Apps"
      meta={[
        {
          name: 'description',
          content:
            'E-Commerce Store, Webapps & MobileApps are ways to have a global marketplace for branding, marketing and one-click sales setup for all kinds of business offerings.',
        },
        {
          name: 'keywords',
          content:
            'marketing, strategy consulting, consulting, web development, development, branding, machine learning, pocs',
        },
      ]}
    />
    <Page>
      <div className="main">
        <h1>E-Commerce Store, Webapps & Mobile Apps</h1>
        <p>
          E-Commerce Store, Webapps & MobileApps are ways to have a global
          marketplace for branding, marketing and one-click sales setup for all
          kinds of business offerings.
        </p>
        <img src={image} />

        <p>
          <ContactButton />
        </p>
      </div>
      <div className="side">
        <Card>
          <h2> Read More</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>E-Commerce Stores(Coming Soon)</p>
                <p>Setting up E-Commerce stores.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Page>
    <Footer />
  </Wrapper>
)

export default WebsitePage
