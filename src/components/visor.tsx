import { Produto } from "../App";
import { ItemVisor } from "./itemVisor";

export function Visor(props: {
  comandoDisplay: String;
  produto?: Produto;
  quantidade: String;
}) {
  return (
    <div className="bg-gray-200 overflow-hidden rounded-t w-full grid gap-1 p-1 grid-cols-4 grid-rows-3 grid-flow-row">
      <ItemVisor
        largura={"col-span-2"}
        label="Código"
        valor={props.comandoDisplay}
      />
      <ItemVisor
        largura={"col-span-1"}
        label="Un"
        valor={props.produto?.unidade.toString()}
      />
      <ItemVisor
        largura={"col-span-1"}
        label="Preço"
        valor={props.produto?.preco.toString()}
      />
      <ItemVisor
        largura={"col-span-4"}
        label="Produto"
        valor={props.produto?.produto}
      />
      <ItemVisor
        customStyle={"flex-col  justify-between"}
        fontSize={"text-3xl"}
        largura={"col-span-1"}
        label="Qtde Ant"
        valor={props.produto?.qtde.toString()}
      />
      <ItemVisor
        customStyle={"flex-row  justify-between"}
        fontSize={"text-4xl"}
        largura={"col-span-3"}
        label="Qtde"
        valor={props.quantidade}
      />
    </div>
  );
}
