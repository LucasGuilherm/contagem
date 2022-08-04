import { List, ListChecks, ListDashes } from "phosphor-react";
import { useEffect, useState } from "react";
import { ItemHistor } from "./components/itemHistorico";
import { Teclado } from "./components/teclado";
import { Visor } from "./components/visor";

import { listaProdutos } from "./components/produtos";
import { v4 } from "uuid";

export interface Produto {
  codigo: number;
  produto: String;
  qtde: number;
  unidade: String;
  preco: number;
}

export function App() {
  const [lista, setLista] = useState(listaProdutos);
  const [listaContagem, setListaContagem] = useState<Produto[]>([]);
  const [status, setStatus] = useState(false);
  const [comando, setComando] = useState("");
  const [comandoQtde, setComandoQtde] = useState("");
  const [item, setItem] = useState({
    codigo: 0,
    produto: "",
    qtde: 0,
    unidade: "",
    preco: 0,
  });

  const handleStatus = () => {
    status ? setStatus(false) : setStatus(true);
  };

  const handleComando = (key: string) => {
    switch (key) {
      case "Enter":
        item.codigo > 0 ? insereItem() : searchItem(comando);
        break;
      case "C":
        limpaVisor();
        break;
      case "<":
        item.codigo > 0
          ? setComandoQtde(comandoQtde.slice(0, -1))
          : setComando(comando.slice(0, -1));
        break;
      case ",":
        item.codigo > 0 ? setComandoQtde(comandoQtde + ".") : "";
        break;
      case "-":
        item.codigo > 0 && comandoQtde === "" ? setComandoQtde(key) : "";
        break;

      default:
        if (item.codigo > 0) {
          setComandoQtde(comandoQtde + key);
          break;
        }
        setComando(comando + key);
    }
  };

  const searchItem = (codigoSearch: String) => {
    const itemFiltrado = lista.filter((item) => {
      return item.codigo.toString() === codigoSearch;
    });

    if (!itemFiltrado[0]) {
      alert(`Produto ${codigoSearch} Não encontrado!`);
      limpaVisor();
    } else {
      setItem(itemFiltrado[0]);
    }
  };

  const insereItem = () => {
    let itemTemp = item;

    itemTemp.qtde = Number(comandoQtde);

    setListaContagem((listaContagem) => [...listaContagem, itemTemp]);

    limpaVisor();
  };

  const limpaVisor = () => {
    setComando("");
    setComandoQtde("");
    setItem({
      codigo: 0,
      produto: "",
      qtde: 0,
      unidade: "",
      preco: 0,
    });
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
        {listaContagem.map((item) => {
          return (
            <ItemHistor
              key={v4()}
              codigo={item.codigo}
              produto={item.produto}
              qtde={item.qtde}
            />
          );
        })}
      </div>
      {/* {status ? "Ativado" : "Desativado"} */}

      {status ? (
        ""
      ) : (
        <Visor
          comandoDisplay={comando}
          produto={item}
          quantidade={comandoQtde}
        />
      )}
      {status ? "" : <Teclado handleComando={handleComando} />}
    </div>
  );
}

export default App;
