interface Props {
  codigo: number;
  produto: string;
  qtde: number;
}
export function ItemHistor(props: Props) {
  return (
    // <td className="px-4 w-full flex flex-row justify-between odd:bg-white even:bg-slate-200">
    <div className="px-4 w-full grid grid-cols-5 odd:bg-white even:bg-slate-200">
      <p className="col-span-1">{props.codigo} - </p>
      <p className="col-span-3">{props.produto}</p>
      <p className="col-span-1">{props.qtde}</p>
    </div>
  );
}
