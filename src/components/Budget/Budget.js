import React, { useState } from "react";
import { peticion } from "../ServerCom/ServerCom";
import { Div, H1, Button, Input, Label } from "./styles";
import { Calculator } from "../Calculator/Calculator";

export const Budget = () => {
  const [habilidad, setHabilidad] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [habLista, setHabLista] = useState([]);
  const [resta, setResta] = useState("");

  return (
    <Div>
      {resta && <Label> {Calculator(habLista, presupuesto)} </Label>}
      <H1>How much is your Budget?</H1>
      <Input
        placeholder="Ex: 1000"
        value={presupuesto}
        onChange={(event) => {
          setPresupuesto(event.target.value);
          setResta(event.target.value);
        }}
      ></Input>
      <H1>Skills you are looking for</H1>
      <Input
        placeholder="Ex: React"
        value={habilidad}
        onChange={(event) => {
          setHabilidad(event.target.value);
        }}
      ></Input>
      {habLista.length > 0 && (
        <div>
          {habLista.map((e, i) => {
            return <div key={i}>{e}</div>;
          })}
        </div>
      )}
      <Button
        onClick={(event) => {
          event.preventDefault();
          let lista = habLista;
          lista.push(habilidad);
          setHabilidad("");
          setHabLista(lista);
        }}
      >
        Add skill
      </Button>
      <Button onClick={(event) => {
          event.preventDefault();
          peticion(habLista);
        }}>Search</Button>
    </Div>
  );
};
