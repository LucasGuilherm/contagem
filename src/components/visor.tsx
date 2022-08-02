import { ItemVisor } from "./itemVisor";

export function Visor() {
  return (
    <div className="bg-gray-200 overflow-hidden rounded-t w-full grid gap-1 p-1 grid-cols-4 grid-rows-3 grid-flow-row">
      <ItemVisor largura={"col-span-2"} label="Código" valor="1234" />
      <ItemVisor largura={"col-span-1"} label="Un" valor="UN" />
      <ItemVisor largura={"col-span-1"} label="Preço" valor="2,99" />
      <ItemVisor
        largura={"col-span-4"}
        label="Produto"
        valor="Leite Condensado"
      />
      <ItemVisor
        customStyle={"flex-row  justify-between"}
        fontSize={"text-4xl"}
        largura={"col-span-2"}
        label="Qtde Ant"
        valor="3"
      />
      <ItemVisor
        customStyle={"flex-row  justify-between"}
        fontSize={"text-4xl"}
        largura={"col-span-2"}
        label="Qtde"
        valor="10"
      />
    </div>
  );
}
