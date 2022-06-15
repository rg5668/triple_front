import styled from 'styled-components'
import IntroBest from 'components/IntroBest'
import IntroContent from 'components/IntroContent'
import IntroCount from 'components/IntroCount'

const Container = styled.section`
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
`

const Inner = styled.div`
  margin: 0 auto;
  position: relative;

  @media (min-width: 1200px) {
    width: 1040px;
    height: auto;
  }
`

const Intro = ({}) => {
  return (
    <Container>
      <Inner>
        <IntroContent />
        <IntroCount />
        <IntroBest />
      </Inner>
    </Container>
  )
}

export default Intro
