import styled from "styled-components";
import { Button } from "../styled/Button";

const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./dices 1.png" alt="" />
      </div>
      <div className="content">
        <h1>Roll the Dice</h1>
        <Button onClick={toggle}>Game Begins!</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;
