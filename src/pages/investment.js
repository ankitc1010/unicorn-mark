import React, { Component } from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import image from '../assets/img/investment.png'

import '../assets/scss/main.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import { Wrapper, Page, Card } from '../components/styled/PageRelated'
import { ContactButton } from '../components/Contact'

const WebsitePage = () => (
  <Wrapper>
    <Nav />
    <Helmet
      title="Investment Branding and Strategy"
      meta={[
        {
          name: 'description',
          content:
            'Investment Branding is a set of professional documents which articulates a well-researched business opportunity and a rational plan towards the achievement of scale.',
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
        <h1>Investment Branding</h1>
        <p>
          Investment Branding is a set of professional documents which
          articulates a well-researched business opportunity and a rational plan
          towards the achievement of scale.
        </p>
        <img src={image} />
        <p>
          These documents form the bedrock of a validated and stable business
          strategy, demonstrate diligence and improve terms of negotiation with
          investors.
        </p>
        <p>
          <ol>
            <li>
              Market Size and Accessibility - Addressable and Addressed Market
            </li>
            <li>Analysis of Competitors and Benchmark KPI Identification</li>
            <li>
              Product Roadmap and Service Design with Customer
              Research/Validation
            </li>
            <li>Core Branding and Comparative Value Proposition Design</li>
            <li>
              Customer Prioritization, Acquisition Cost and Sales Pitch
              Prioritization
            </li>
            <li>
              Organization Structure and Administrative Plan for Sustainable
              Growth
            </li>
            <li>Present Team, Talent Acquisition Plan and Salary Costs</li>
            <li>
              Cash Flow Plan with Income Statement and Balance Sheet Forecasting
            </li>
            <li>Funding Requirement and Planned Expenditure with ROI</li>
            <li>
              Company Valuation, KPI Tracking Mechanisms and Risk Mitigation
              Plan
            </li>
          </ol>
        </p>
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
                <p>Investment Branding 101</p>
                <p>What and Why of Investment Branding</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Actionable Market Sizing </p>
                <p>Opportunity assessment vs Plan of action for sales</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2> Case Studies</h2>
          <div>
            <div>
              <span>1</span>
              <div>
                <p>Sales pitch and customer prioritization</p>
                <p>A B2B software startup</p>
              </div>
            </div>
            <div>
              <span>2</span>
              <div>
                <p>Investment evaluation</p>
                <p> A retail software startup</p>
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
