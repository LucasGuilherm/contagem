interface Props2 {
  valor: string;
  label: string;
  largura: string;
}

export function ItemVisor(props: Props2) {
  return (
    <div className={`p-2 rounded bg-white flex flex-col ${props.largura}`}>
      <label className="text-lg">{props.label}</label>
      <p className="font-bold text-2xl">{props.valor}</p>
    </div>
  );
}
