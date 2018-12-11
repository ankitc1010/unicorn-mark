import styled from 'styled-components'

const Card = styled.div`
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 1rem;
  border: 1px solid grey;
  padding: 1rem;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 5px -1px rgba(0, 0, 0, 0.75);
  h2 {
    font-size: 4rem;
  }
  > div {
    > div {
      display: flex;
      font-size: 1.5rem;
      margin: 1rem 0;
      span {
        padding: 0.5rem;
        background: grey;
        color: white;
        border-radius: 4px;
      }
      > div {
        margin-left: 5px;
        p:first-child {
          font-size: 1.8rem;
          font-weight: bold;
        }
      }
    }
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 3rem;
    }
  }
`
const Page = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  .main {
    flex-grow: 2;
    width: 70%;
    margin: 0 auto;
    p {
      font-size: 2.4rem;
      line-height: 3.3rem;
      margin: 2rem 0;
    }
    h1 {
      font-size: 6rem;
      line-height: 7.2rem;
      margin-top: 5rem;
    }
    img {
      width: 80%;
      margin: 0 auto;
    }
  }
  .side {
    flex-grow: 1;
  }
  @media (max-width: 700px) {
    display: block !important;
    width: 98% !important;
    .main {
      width: 90%;
      h1 {
        font-size: 4rem;
        line-height: 5rem;
      }
      p {
        font-size: 2rem;
        line-height: 2.5rem;
      }
      img {
        width: 100%;
      }
    }
  }
`

export { Page, Card }
