import styled from "styled-components";

const Roledice = ({  roledice ,currentRoll }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roledice}>
        <img src={`dice_${currentRoll}.png`} alt="wrong image" />
      </div>
      <p> Click on to Roll the dice </p>
    </DiceContainer>
  );
};

export default Roledice;
const DiceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .dice {
    cursor: pointer;
  }
`;
