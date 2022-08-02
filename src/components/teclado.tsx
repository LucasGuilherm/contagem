import { Tecla } from "./tecla";

export function Teclado() {
  return (
    <div className="w-full h-2/5 bg-gray-200">
      <div className="grid h-full grid-cols-4 gap-1 p-1 grid-flow-row">
        <Tecla numero={"7"} altura={1} largura={1} />
        <Tecla numero={"8"} altura={1} largura={1} />
        <Tecla numero={"9"} altura={1} largura={1} />
        <Tecla numero={"C"} altura={1} largura={1} />
        <Tecla numero={"4"} altura={1} largura={1} />
        <Tecla numero={"5"} altura={1} largura={1} />
        <Tecla numero={"6"} altura={1} largura={1} />
        <Tecla numero={"<"} altura={1} largura={1} />
        <Tecla numero={"1"} altura={1} largura={1} />
        <Tecla numero={"2"} altura={1} largura={1} />
        <Tecla numero={"3"} altura={1} largura={1} />
        <Tecla numero={"Enter"} altura={2} largura={1} />
        <Tecla numero={"-"} altura={1} largura={1} />
        <Tecla numero={"0"} altura={1} largura={1} />
        <Tecla numero={","} altura={1} largura={1} />
      </div>
    </div>
  );
}
