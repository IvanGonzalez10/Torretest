import React, {useState} from 'react';
import {peticion} from '../ServerCom/ServerCom';

export const Budget = () => {
  const [entrada, setEntrada] = useState("");
  return (
    <div>
      <input value={entrada} onChange={(event) => {setEntrada(event.target.value)}}></input>
      <button onClick={(event) => { event.preventDefault(); peticion(entrada)}}>Click</button>
    </div>
  );
}
