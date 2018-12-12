import React from 'react'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'
import Nav from '../components/Nav'
import { Wrapper } from '../components/styled/PageRelated'
import '../assets/scss/main.scss'

const ContactPage = () => (
  <Wrapper>
    <Helmet
      title="Contact Us"
      meta={[
        {
          name: 'description',
          content: 'Contact Us page for Unicorn Mark',
        },
        {
          name: 'keywords',
          content:
            'marketing, strategy consulting, consulting, web development, development, branding, machine learning, pocs',
        },
      ]}
    />
    <Nav />
    <Contact />
  </Wrapper>
)

export default ContactPage
