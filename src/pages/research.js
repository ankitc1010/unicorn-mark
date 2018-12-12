import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import image from '../assets/img/branding.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Wrapper, Page, Card } from '../components/styled/PageRelated'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Helmet
      title="Product and Customer Research"
      meta={[
        {
          name: 'description',
          content:
            'Product and Customer Research is a study that ensures you get maximum customer revenue with minimum developers and salespersons through comparative ROI evaluation',
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
        <h1>Product and Customer Research</h1>
        <p>
          Product and Customer Research is a study that ensures you get maximum
          customer revenue with minimum developers and salespersons through
          comparative ROI evaluation
        </p>
        <img src={image} />
        <p>
          These studies identify actions for immediate improvement in R&D
          effectiveness and sales conversion rates with measurable results.
        </p>
        <p>
          <ol>
            <li> Product R&D Roadmap</li>
            <li>Sales and Distribution Roadmap</li>
            <li>Customer Communications Strategy</li>
          </ol>
        </p>
      </div>
      <div className="side">
        <Card>
          <h2> Read More</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Sales Segment and Pitch Prioritization (Coming Soon)</p>
                <p>Adoption rate based segmentation and communication</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Product Strategy Roadmap (Coming Soon)</p>
                <p> R&D Planning with intelligence</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2>Case Studies</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Digital Presence Audit </p>
                <p> An industrial design firm</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Competitor Digital Spend and Content Analysis</p>
                <p>A packaged wheat manufacturer</p>
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
