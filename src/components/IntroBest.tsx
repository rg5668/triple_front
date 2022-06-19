import styled from 'styled-components'
import { Google_Logo_IMG } from 'constants/images'
import { Apple_Logo_IMG } from 'constants/images'

const BestAwardDiv = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;

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
  animation-delay: 300ms;
  animation-duration: 700ms;
`

const GoogleLogo = styled.div`
  @media (min-width: 1200px) {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
  }
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${Google_Logo_IMG});
  background-position: left top;
  background-repeat: no-repeat;
  color: var(--color-gray800);
  font-weight: bold;
`

const AppleLogo = styled.div`
  @media (min-width: 1200px) {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
  }
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${Apple_Logo_IMG});
  background-position: left top;
  background-repeat: no-repeat;
  color: var(--color-gray800);
  font-weight: bold;
`

const IntroBest = ({}) => {
  return (
    <BestAwardDiv>
      <GoogleLogo>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </GoogleLogo>

      <AppleLogo>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AppleLogo>
    </BestAwardDiv>
  )
}

export default IntroBest
