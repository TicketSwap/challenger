import { TicketSwap } from '@ticketswap/solar/icons'
import styled from '@emotion/styled'
import {
  space,
  color,
  H1,
  shadow,
} from '@ticketswap/solar'

const Wrapper = styled.div`
  text-align: center;
  padding: ${space[16]} 0;
  margin-bottom: ${space[32]};
  color: ${color.lightForeground};
  background-color: ${color.earth};
  box-shadow: ${shadow.strong};
`

const Title = styled(H1)`
  color: ${color.lightForeground};
`

const Cover = () => (
  <Wrapper>
    <TicketSwap size={64} />
    <Title>TicketSwap Challenger</Title>
  </Wrapper>
)

export default Cover
