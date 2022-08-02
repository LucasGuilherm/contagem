interface Props {
  numero: String;
  largura: number;
  altura: number;
}

export function Tecla(props: Props) {
  return (
    <div
      className={`overflow-hidden bg-white rounded flex justify-center content-center flex-col text-center col-span-${props.largura} row-span-${props.altura}`}
    >
      <button className="h-full w-full text-4xl font-bold">
        {props.numero}
      </button>
    </div>
  );
}
