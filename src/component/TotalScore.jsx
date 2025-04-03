import styled from "styled-components"

const Totalscore = ({score}) => {
  return (
    <ScoreContainer>
      <div>
    <h1>{score}</h1>
    <p>Your Score</p>
  </div>
    </ScoreContainer>
  )
}

export default Totalscore

const ScoreContainer = styled.div`

max-width: 200px;
text-align: center;
/* background-color: red; */
h1{
    font-size: 100px;
    line-height: 100px;
}
p{
    font-size: 24px;
    font-weight: 500;
}

`;