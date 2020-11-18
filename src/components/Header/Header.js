import React from "react";
import { Img, Div } from "./styles";
import { Link } from "@reach/router";

export const Header = () => {
  return (
    <Div>
      <Link to="/">
        <Img
          src="https://torre-media.s3-us-west-2.amazonaws.com/subtorres/teletrabajo/torre.png"
          alt="logo"
        />
      </Link>
    </Div>
  );
};
