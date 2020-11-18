import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from '../../styles/Animations';

export const Nav = styled.nav`
  align-items: center;
  background: #000;
  border-top: 1px solid #0e0e0e;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
  width: 100vw;
  height: 6vh;
  z-index: 1000;
`;
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #fff;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100vw;

  &[aria-current] {
    color: #cddc39;

    &:after {
      ${fadeIn({ time: "0.5s" })};
      content: "·";
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
