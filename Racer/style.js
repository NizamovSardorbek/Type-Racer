import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  border-radius: 10px;
  width: 1200px;
  padding: 20px;
  background-color: gray;

  @media (max-width: 1250px) {
    width: 1000px;
  }

  @media (max-width: 1060px) {
    width: 900px;
  }

  @media (max-width: 960px) {
    width: 800px;
  }

  h1 {
    font-weight: 600;
    font-size: 25px;
  }

  p {
    margin: 10px 0;
    span {
      color: #40619e;
      cursor: pointer;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: #40619e;
  }
`;

export const TimerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: 600;
    color: #fff;
  }
`;

export const CarWayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;

export const CarWay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130%;
  border-bottom: 3px dashed yellow;
`;

export const Img = styled.img`
  width: 8%;
  transform: translateX(${({ move }) => (move ? `${move * 11.6}%` : "")});
`;

export const Wpm = styled.div`
  text-align: center;
  width: 150px;
  font-weight: 600;
  color: #fff;
`;

export const Finish = styled.div`
  display: ${({ blok }) => (blok ? blok : "")};
  h1 {
    color: #fff;
    text-align: center;
    margin: 20px 0;
  }
`;

export const YourScore = styled.div`
  margin: 10px auto;
  padding: 20px;
  width: 50%;
  background-color: #fff;
  border-radius: 10px;
  font-weight: 600;

  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    td {
      padding: 5px;
    }
  }
`;

export const TextContainer = styled.div`
  user-select: none;
  display: ${({ non }) => (non ? non : "")};
  span {
    color: black;
    font-size: 20px;
  }

  width: 100%;
  margin: 50px 0 20px 0;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f6fbff;
  -webkit-box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  -moz-box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
`;

export const InputDiv = styled.div`
  width: 100%;
  p {
    font-size: 20px;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    margin: 30px 0;
    padding: 0 10px;
    font-size: 20px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin: 10px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 20px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #00bcf6;
  -webkit-box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  -moz-box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  box-shadow: -1px 1px 5px 8px rgba(46, 137, 206, 0.2);
  :active {
    transform: scale(0.8);
    transition: all 0.3s linear;
  }
`;
