import React, { useState } from "react";
import Preview from "./Preview";
import getText from "./getText";
import getImg from "../../RacerClone/getImg";
import { data } from "../../RacerClone/getImg";
import {
  CarWay,
  CarWayContainer,
  Container,
  Img,
  InputDiv,
  TextContainer,
  TimerDiv,
  Wpm,
  Wrapper,
} from "./style";
import Speed from "./Speed";

const Race = () => {
  const [texts, setTexts] = useState(getText());
  const [userInput, setuserInput] = useState("");
  const [sec, setSec] = useState(0);
  const [symbols, setSymbols] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const onUserInputChange = (target) => {
    const val = target.value;
    setuserInput(val);
  };

  return (
    <Wrapper>
      <Container>
        <h1>Practice Racetrack</h1>
        <p>
          You are in a <b>single-player</b> race. <span>Click here</span> if
          you'd like some competition.
        </p>
        <TimerDiv>
          <h3>The race is on! Type the text below:</h3>
          <p>Symbols : {symbols}</p>
          <p>1:15</p>
        </TimerDiv>
        <CarWayContainer>
          <CarWay>
            <Img
              src="https://data.typeracer.com/public/images/avatars/basic-blue.svg"
              alt=""
            />
          </CarWay>
          <Wpm>
            <Speed sec={sec} symbols={symbols} />
          </Wpm>
        </CarWayContainer>
        <TextContainer>
          <Preview text={texts} userInput={userInput} />
          <InputDiv>
            <input
              type="text"
              value={userInput}
              placeholder="Type the above text here when the race begins"
              onChange={({ target }) => onUserInputChange(target)}
            />
          </InputDiv>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

export default Race;
