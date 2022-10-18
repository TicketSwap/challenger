import React from 'react'
import { Global, css } from '@emotion/react'
import { globalStyles, fontWeight } from '@ticketswap/solar'

const styles = css`
  @font-face {
    font-family: 'Proxima Nova';
    src: url('fonts/ProximaNova-RegularWeb.woff2') format('woff2'),
      url('fonts/ProximaNova-RegularWeb.woff') format('woff');
    font-weight: ${fontWeight.regular};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('fonts/ProximaNova-SemiboldWeb.woff2') format('woff2'),
      url('fonts/ProximaNova-SemiboldWeb.woff') format('woff');
    font-weight: ${fontWeight.semiBold};
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Proxima Nova';
    src: url('fonts/ProximaNova-BoldWeb.woff2') format('woff2'),
      url('fonts/ProximaNova-BoldWeb.woff') format('woff');
    font-weight: ${fontWeight.bold};
    font-style: normal;
    font-display: swap;
  }
`

const BaseStyles = () => {
  return <Global styles={[globalStyles, styles]} />
}

export default BaseStyles
