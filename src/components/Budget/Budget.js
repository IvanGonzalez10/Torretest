import React, { useState } from "react";
import { peticion } from "../ServerCom/ServerCom";
import { Div, H1, Button, Input, Label } from "./styles";
import { Calculator } from "../Calculator/Calculator";

export const Budget = () => {
  const [habilidad, setHabilidad] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [habLista, setHabLista] = useState([]);
  const [resta, setResta] = useState("");
  const [candidato, setCandidato] = useState(null);
  const [loading, setLoading] = useState(false);

  const vistaUno = (
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
        disabled={!presupuesto}
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
      <Button
        disabled={!habLista.length > 0}
        onClick={async (event) => {
          event.preventDefault();
          /* peticion(habLista); */
          setLoading(true);
          const resultado = await peticion(habLista);
          console.log(resultado);
          setCandidato(resultado);
          setLoading(false);
        }}
      >
        Search
      </Button>
    </Div>
  );

  const vistaDos = candidato ?  (
    <Div>
      <img src={candidato.results[0].picture} alt="picture" />
      <h1>{candidato.results[0].name}</h1>
    </Div>
  ) : <Div>
    
  </Div>;

  const spinner = <Div>Loading...</Div>;

  return loading ? spinner : candidato ? vistaDos : vistaUno;
};
