interface Props2 {
  valor: string;
  label: string;
  largura: string;
  customStyle?: string;
  fontSize?: string;
}

export function ItemVisor(props: Props2) {
  const defaultStyle = "flex-col";

  return (
    <div
      className={`${
        props.largura
      } px-2 py-1 rounded bg-white h-full overflow-hidden whitespace-nowrap flex ${
        props.customStyle ? props.customStyle : defaultStyle
      }`}
    >
      <label className="text-lg">{props.label}</label>
      <p
        className={`font-bold ${props.fontSize ? props.fontSize : "text-2xl"}`}
      >
        {props.valor}
      </p>
    </div>
  );
}
