import styled from "styled-components";
import { useState } from "react";

const NumberSelect = ({ error, seterror, selected, setSelected }) => {
  const arraynumber = [1, 2, 3, 4, 5, 6];

  //   console.log(selected);

  const numberselectorhandler = (item) => {
    setSelected(item);
    seterror("");
  };
  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arraynumber.map((item, index) => (
          <Box
            isSelected={item === selected}
            key={index}
            onClick={() => numberselectorhandler(item)}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Selected Number: {selected}</p>
    </NumberContainer>
  );
};

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-content: center;
  font-size: 24px;
  font-weight: 700;
  /* cursor: pointer; */
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

export default NumberSelect;
