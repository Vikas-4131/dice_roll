import styled from 'styled-components'

 export const Button = styled.button`
  padding: 10px 18px;

  color: white;

  background-color: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    color: #000000;
    transition: 0.3s background ease in;
  }

`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover {
    cursor: pointer;
    background-color: black;
    border: 1px solid transparent;
    color: white;
    /* transition: 0.3s background ease in; */
  }
`;