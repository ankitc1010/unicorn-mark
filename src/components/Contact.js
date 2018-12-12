import React from 'react'

import Footer from './Footer'

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
                    Option 1
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
                    Option 2
                  </label>
                </div>
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
