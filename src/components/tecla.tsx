interface Props {
  numero: String;
  largura: string;
  altura: string;
}

export function Tecla(props: Props) {
  return (
    <div
      className={`overflow-hidden bg-white rounded flex justify-center content-center flex-col text-center ${props.largura} ${props.altura}`}
    >
      <button className="h-full w-full text-4xl font-bold">
        {props.numero}
      </button>
    </div>
  );
}
