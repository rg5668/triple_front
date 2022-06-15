import styled from 'styled-components'
import Count from 'functions/Count'

const CountDiv = styled.div`
  margin-left: 623px;
  padding-top: 150px;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(0%);
    }
    50% {
      opacity: 0;
      transform: translateY(5%);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  animation: fadeInUp 700ms ease-in-out 100ms;
`

const CountFontStyle = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  font-family: sans-serif;
`

const IntroCount = ({}) => {
  const userCount = Count(700)
  const reviewCount = Count(101)
  const scheduleCount = Count(650)

  return (
    <CountDiv>
      <CountFontStyle>
        <strong>
          <span id="user">{userCount}</span>만 명
        </strong>
        의 여행자
      </CountFontStyle>

      <CountFontStyle>
        <strong>
          <span id="review">{reviewCount}</span>만 개
        </strong>
        의 여행 리뷰
      </CountFontStyle>

      <CountFontStyle>
        <strong>
          <span id="schedule">{scheduleCount}</span>만 개
        </strong>
        의 여행 일정
      </CountFontStyle>
    </CountDiv>
  )
}

export default IntroCount
