import styled from 'styled-components'
import IntroBest from 'components/IntroBest'
import IntroContent from 'components/IntroContent'
import IntroCount from 'components/IntroCount'

const Container = styled.section`
  position: relative;
  overflow: hidden;
`

const Inner = styled.div`
  margin: 0 auto;
  position: relative;

  @media (min-width: 1200px) {
    width: 1040px;
    height: 100vh;
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
