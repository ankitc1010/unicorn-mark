import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Footer from './Footer'

const ContactButtonStyles = styled.div`
  text-decoration: none;
  padding: 2rem 7rem;
  background: #345664;
  color: white;
  font-weight: bold;
  border-radius: 6rem;
  width: max-content;
`

const ContactButton = () => (
  <Link to="/contact">
    <ContactButtonStyles>Contact Us</ContactButtonStyles>
  </Link>
)

const Contact = () => (
  <>
    <section className="section-book" id="contact">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form
              action="https://formspree.io/amanalok@unicornmark.com"
              method="POST"
              className="form"
            >
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Contact Us</h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  name="Name"
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
                  name="Email"
                  required
                />
                <label for="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <button className="btn btn--green">Submit &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default Contact
export { ContactButton }
