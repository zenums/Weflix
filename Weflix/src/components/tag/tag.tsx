import "./tag.css";

type Variant = "primary" | "secondary";
type Props = {
  variant: Variant;
  children: string;
};

export default function Tag({ variant, children }: Props) {
  let variantClass = "default";

  switch (variant) {
    case "primary":
      variantClass = "primary";
      break;
    case "secondary":
      variantClass = "secondary";
      break;
  }

  return <span className={`tag ${variantClass}`}>{children}</span>;
}
