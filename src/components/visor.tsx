import { ItemVisor } from "./itemVisor";

export function Visor() {
  return (
    <div className="bg-gray-200 h-auto w-full grid gap-1 p-1 grid-cols-4 grid-rows-3 grid-flow-row">
      <ItemVisor altura={1} largura={2} label="Código" valor="1234" />
      <ItemVisor altura={1} largura={1} label="Un" valor="UN" />
      <ItemVisor altura={1} largura={1} label="Preço" valor="2,99" />
      <ItemVisor altura={1} largura={4} label="Produto" valor="Leite" />
      <ItemVisor altura={1} largura={2} label="Qtde" valor="10" />
      <ItemVisor altura={1} largura={2} label="Qtde Ant" valor="3" />
    </div>
  );
}
