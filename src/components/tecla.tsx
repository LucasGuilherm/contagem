interface Props {
  numero: String;
  largura: String;
  altura: String;
  action: Function;
}

export function Tecla(props: Props) {
  const enterInput = () => {
    props.action(props.numero);
  };

  return (
    <div
      className={`overflow-hidden bg-white rounded flex justify-center content-center flex-col text-center ${props.largura} ${props.altura}`}
      onClick={enterInput}
    >
      <button className="h-full w-full text-4xl font-bold">
        {props.numero}
      </button>
    </div>
  );
}
