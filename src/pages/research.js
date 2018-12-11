import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../assets/img/branding.png'

import Nav from '../components/Nav'

import { Page, Card } from '../components/styled/PageRelated'

const WebsitePage = () => (
  <div>
    <Nav />
    <Page>
      <div className="main">
        <h1>Product and Customer Research</h1>
        <p>
          Why Market Research is necessary for your company? Let UnicornMark
          reflect the answer for you.
        </p>
        <img src={image} />
        <p>
          In a world where the intrinsic motive and mechanism to make a purchase
          decision comes from the two factors, primarily:
          <ul>
            <li>
              Customers buy products/services which they have already bought
              (Habit)
            </li>
            <li>
              Customers buy products/services which others buy, more likely
              (Conformity)
            </li>
          </ul>
        </p>
        <p>
          “The Brands are on average, two-thirds the size of their next largest
          competitor” in terms of market share which reflects that there are
          hardly 500 brands in a segment which get to have a market share higher
          than a zero. How does this inequality get balanced, especially for the
          new entrants?
        </p>
        <p>
          Well, it is next to impossible to bridge the gaps especially with a
          branding strategy which can’t be termed targeted, effective and
          measurable. In an already competitive environment which is highly
          biased, a branding and marketing strategy without an understanding of
          the market is an expensive suicide.
        </p>
        <p>
          Whereas, going to market with a market research - product and
          customer, is bound to manifest a pathway which is above the intrinsic
          qualities of the product and focuses on favouring favorability,
          contagion and addiction.
        </p>
        <p>
          In today’s world, everyday living is a very customised experience in
          itself where the biggest companies of this world have reached wherever
          they are by understanding their customers and communicating at every
          step, accordingly.
        </p>
        <p>
          The only way to have a working marketing model objectively capturing
          market share for you, you have to know beforehand what the customer
          wants to buy & hear from you. Yes, both. It is not just the presence
          of a great product built upon good market research but the
          implantation of great dialogues, perpetually.
        </p>
        <p>
          To disrupt the above mentioned harsh reality, the only option left is
          to know why, who, how and when with respect to your customers and
          communication.
        </p>
      </div>
      <div className="side">
        <Card>
          <h2> Case Studies</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Case study one</p>
                <p>Small Description</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Case study two</p>
                <p>Small Description</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2> Past Work</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Past work one</p>
                <p>Small Description</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Past work two</p>
                <p>Small Description</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  </div>
)

export default WebsitePage
