import { List, ListChecks, ListDashes } from "phosphor-react";
import { useState } from "react";
import { ItemHistor } from "./components/itemHistorico";
import { Teclado } from "./components/teclado";
import { Visor } from "./components/visor";

const listaC = [
  { codigo: 1234, produto: "goiabada", qtde: 1 },
  { codigo: 1234, produto: "goiabada", qtde: 4 },
  { codigo: 1234, produto: "goiabada", qtde: 3 },
  { codigo: 1234, produto: "goiabada", qtde: 6 },
  { codigo: 1234, produto: "goiabada", qtde: 8 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
  { codigo: 1234, produto: "goiabada", qtde: 9 },
];

function App() {
  const [lista, setLista] = useState(listaC);
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <div className="h-screen flex flex-col content-center items-center select-none">
      <div className="flex flex-row justify-between w-full py-2 px-3 items-center text-3xl border-b-2">
        <List />
        <h1>Inclusões</h1>
        <div onClick={handleStatus}>
          <ListDashes />
        </div>
      </div>
      <p>Historico</p>
      <div className="flex-1 w-full items-center mt-0 overflow-scroll">
        {lista.map((item) => {
          return (
            <ItemHistor
              codigo={item.codigo}
              produto={item.produto}
              qtde={item.qtde}
            />
          );
        })}
      </div>
      {/* {status ? "Ativado" : "Desativado"} */}
      <Visor />
      {status ? "" : <Teclado />}
    </div>
  );
}

export default App;
