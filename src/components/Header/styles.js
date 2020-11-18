import styled from "styled-components";

export const Div = styled.div`
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const Img = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  right: 85%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0px;
  background-color: #cddc39;
  & div {
    width: 20px;
    height: 4px;
    background-color: black;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
  }
`;
