import React, { Component } from 'react'
import styled from 'styled-components'

import bookbyslot from './img/clients/bookbyslot.png'
import looksart from './img/clients/looksart.png'
import luvstay from './img/clients/luvstay2.png'
import navavarn from './img/clients/navavarn.jpg'
import openapp from './img/clients/openapp.png'
import tourstud from './img/clients/tourstud.png'
import unboxx from './img/clients/unboxx.png'
import saral from './img/clients/saral.jpg'
import koushik from './img/clients/koushik.png'
import nutriplate from './img/clients/nutriplate.jpg'
import microsoft from './img/clients/microsoft.png'
import careercafe from './img/clients/careercafe.webp'

const Clients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 0 1rem;
  img {
    margin: auto auto;
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
        <img src={microsoft} />
        <img src={bookbyslot} style={{ background: 'grey' }} />
        <img src={looksart} />
        <img src={luvstay} />
        <img src={navavarn} style={{ width: '80%' }} />
        <img src={openapp} style={{ width: '80%' }} />
        <img src={saral} style={{ width: '80%' }} />
        <img src={nutriplate} style={{ width: '70%' }} />
        <img src={careercafe} />
        <img src={tourstud} />
        <img src={unboxx} style={{ width: '60%' }} />
        <img src={koushik} />
      </Clients>
    )
  }
}

export default ClientSection
