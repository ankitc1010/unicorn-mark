import React, { Component } from 'react'
import styled from 'styled-components'

import image from '../assets/img/marketing.png'

import Nav from '../components/Nav'

import { Page, Card } from '../components/styled/PageRelated'

const WebsitePage = () => (
  <div>
    <Nav />
    <Page>
      <div className="main">
        <h1>Digital Branding and Content Marketing</h1>
        <p>
          Since its founding, BCG has grown at an extraordinary rate without
          diminishing the unique qualities that make people want to work for—and
          with—the firm. It’s an exceptional feat, and it’s due in no small part
          to our values.
        </p>
        <img src={image} />
        <p>
          A strong culture anchored in a clear set of values is essential to
          building a global organization capable of making a real difference.
          Generations of partners have kept BCG’s values alive and made them
          part of the firm’s common language through writing, storytelling, and
          mentoring. But it wasn’t until 1990 that John Clarkeson, CEO at the
          time, helped draft a formal statement describing each of these values
          and why each one matters. Succeeding CEOs have reevaluated and
          reaffirmed what BCG stands for, maintaining an impressive continuity.
          These values will continue to underpin everything the firm does to
          maintain its leading position in the marketplace and remain such a
          rewarding, inspiring place to work.
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
