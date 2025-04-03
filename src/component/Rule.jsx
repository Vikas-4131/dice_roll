import styled from "styled-components";

const Rule = () => {
  return (
    <RulesConatiner>
        <h2>How to play the game</h2>
        <div className="text">
            <p>select any number</p>
            <p>click on dice image</p>
            <p>after click on dice image you will get random number and checck that number is equal to selected number or not</p>
            <p>if you choose wrong number two marks will be deducted from your score</p>
        </div>
      
    </RulesConatiner>
  )
}

export default Rule

const RulesConatiner = styled.div`
max-width: 800px;
margin: 0 auto;

background-color: #FBF1F1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
    
    `;

