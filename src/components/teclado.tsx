import { Tecla } from "./tecla";

export function Teclado() {
  return (
    <div className="w-full h-2/5 bg-gray-200">
      <div className="grid h-full grid-cols-4 gap-1 p-1 grid-flow-row">
        <Tecla numero={"7"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"8"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"9"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"C"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"4"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"5"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"6"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"<"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"1"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"2"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"3"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"Enter"} altura={"row-span-2"} largura={"col-span-1"} />
        <Tecla numero={"-"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={"0"} altura={"row-span-1"} largura={"col-span-1"} />
        <Tecla numero={","} altura={"row-span-1"} largura={"col-span-1"} />
      </div>
    </div>
  );
}
