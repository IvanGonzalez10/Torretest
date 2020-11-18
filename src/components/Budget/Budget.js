import React, { useState } from "react";
import { peticion } from "../ServerCom/ServerCom";
import { Div, H1, Button, Input } from './styles';


export const Budget = () => {
  const [entrada, setEntrada] = useState("");
  return (
    <Div>
      <H1>How much is you Budget?</H1>
      <Input></Input>
      <H1>Skills you are looking for</H1>
      <Input
        value={entrada}
        onChange={(event) => {
          setEntrada(event.target.value);
        }}
      ></Input>
      <Button
        onClick={(event) => {
          event.preventDefault();
          peticion(entrada);
        }}
      >
        Add skill
      </Button>
    </Div>
  );
};
