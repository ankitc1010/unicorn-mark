import React from 'react'

import Contact from '../components/Contact'
import Nav from '../components/Nav'
import { Wrapper } from '../components/styled/PageRelated'
import '../assets/scss/main.scss'

const ContactPage = () => (
  <Wrapper>
    <Nav />
    <Contact />
  </Wrapper>
)

export default ContactPage
