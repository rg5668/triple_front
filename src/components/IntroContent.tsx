import styled from 'styled-components'
import { Trip_Logo_IMG } from 'constants/images'

const TripLogo = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
  }

  box-sizing: border-box;
  background-image: url(${Trip_Logo_IMG});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: var(--color-gray700);

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(0%);
    }
    5% {
      opacity: 0;
      transform: translateY(5%);
    }
    to {
      opacity: 1;
    }
  }
  animation-name: fadeInUp;

  animation-duration: 700ms;
`

const IntroContent = ({}) => {
  return <TripLogo>2019년 2월 기준</TripLogo>
}

export default IntroContent
