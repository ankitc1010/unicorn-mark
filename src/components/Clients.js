import React, { Component } from 'react'
import styled from 'styled-components'

import bookbyslot from './img/clients/bookbyslot.png'
import looksart from './img/clients/looksart.png'
import luvstay from './img/clients/luvstay.png'
import navavarn from './img/clients/navavarn.jpg'
import openapp from './img/clients/openapp.png'
import solarchs from './img/clients/solarchs.png'
import tourstud from './img/clients/tourstud.png'
import unboxx from './img/clients/unboxx.png'

const Clients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 0 1rem;
  img {
    width: 100%;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

class ClientSection extends Component {
  render() {
    return (
      <Clients>
        <img src={bookbyslot} />
        <img src={looksart} />
        <img src={luvstay} />
        <img src={navavarn} />
        <img src={openapp} />
        <img src={solarchs} />
        <img src={tourstud} />
        <img src={unboxx} />
      </Clients>
    )
  }
}

export default ClientSection
