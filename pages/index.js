import React from 'react'
import Container from '~/components/Container'
import Cover from '~/components/Cover'
import Footer from '~/components/Footer'
import {
  Collapsible,
  color,
  fontSize,
  fontWeight,
  space,
} from '@ticketswap/solar'
import styled from '@emotion/styled'

const StyledCollapsible = styled(Collapsible)`
  color: ${color.space};

  & + & {
    margin-top: ${space[8]};
  }
`

const List = styled.ul`
  list-style: disc;
  margin-left: ${space[16]};
`

const Description = styled.p`
  font-size: ${fontSize[18]};
  font-weight: ${fontWeight.semiBold};
  margin-bottom: ${space[16]};
`

const SubTitle = styled.h3`
  margin-top: ${space[32]};
  margin-bottom: ${space[16]};
`

const Home = () => (
  <>
    <Cover />

    <Container>
      <Description>
        Welcome to the TicketSwap challenger. The goal of this challenger is to
        finish the todo list stated below ☑️
      </Description>

      <StyledCollapsible buttonLabel="Todo list">
        <List>
          <li>
            Oh ohh, guess we didn't think about mobile styling 😳 Can you make
            it pretty?
          </li>
          <li>
            Ouch, it looks like we have some errors popping up in the console 😖
            Could you solve them for us?
          </li>
          <li>
            You can see that there is a popular events widget on this page,
            unfortunately we couldn't get server-side rendering to work 🤔 Can
            you?
          </li>
          <li>
            As you can see there are also event pages. These pages are a bit
            simple right now, could you add some more data to that page? Also
            please make sure that server-side render works there.
          </li>
          <li>
            We couldn't find the time to make a search page anymore, but it
            would definitely make the challenger better. We want to be able to
            search all the events that are in the mocked data set trough a
            graphql query. Design-wise it's up to you (hint: check our design
            system).
          </li>
          <li>
            At the moment the navigation is a nightmare, can you make sure that
            everything connects to each other correctly?
          </li>
        </List>
      </StyledCollapsible>

      <StyledCollapsible buttonLabel="References">
        <List>
          <li>
            We are using our own component library in this project, if you want
            to check it out go to{' '}
            <a href="https://github.com/TicketSwap/solar">Github Solar</a> or{' '}
            <a href="https://ticketswap.github.io/solar">Storybook Solar</a>
          </li>
          <li>
            The React framework we use for this challenger is{' '}
            <a href="https://nextjs.org/docs">Next.js</a>
          </li>
          <li>
            For CSS we use the css-in-js package called{' '}
            <a href="https://emotion.sh/docs/introduction">Emotion</a>
          </li>
          <li>
            We use GraphQL to get our data and the client that is able to read
            that data is{' '}
            <a href="https://www.apollographql.com/docs/react/">Apollo</a>
          </li>
          <li>
            The local API server is also from Apollo, see the docs for the{' '}
            <a href="https://www.apollographql.com/docs/apollo-server/">
              server
            </a>
          </li>
        </List>
      </StyledCollapsible>
    </Container>

    <Footer />
  </>
)

export default Home
