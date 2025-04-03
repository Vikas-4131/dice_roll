import React from "react";
import Rule from "./Rule";
import Totalscore from "./Totalscore";
import NumberSelect from "./NumberSelect";
import styled from "styled-components";
import Roledice from "./Roledice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentRoll, setCurrentRoll] = useState(1);
  const [error, seterror] = useState();
  const [showRules, setshowRules] = useState(false);

  const generaterandomnumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roledice = () => {
    if (!selected) {
      seterror("Please select a number");
      return;
    }

    // seterror(""); yah pe hum error ko handle kar rahe the taki agr user nahi select kare the toh error nahi diya jayega

    const randomnumber = generaterandomnumber(1, 7);
    setCurrentRoll((prev) => randomnumber);

    if (randomnumber === selected) {
      setscore((prev) => prev + randomnumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setSelected(undefined);
  };
  const resetscore = () => {
    setscore(0);
  };
  return (
    <MainConatiner>
      <div className="Topsection">
        {" "}
        <Totalscore score={score} />
        <NumberSelect
          error={error}
          seterror={seterror}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Roledice currentRoll={currentRoll} roledice={roledice} />

      <div className="btns">
        <OutlineButton onClick={resetscore}>Reset</OutlineButton>
        <Button onClick={() => setshowRules((prev) => !prev)}>Show rule</Button>
      </div>

      {showRules && <Rule />}
    </MainConatiner>
  );
};

const MainConatiner = styled.main`
  padding-top: 70px;
  padding: 0 20px;
  .Topsection {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 600px;
  }

  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;

export default Gameplay;
