import "./pegi.css";

type Props = {
  children: string;
};

export default function Pegi({children }: Props) {
  return <span className={`pegi`}>{children}</span>;
}
