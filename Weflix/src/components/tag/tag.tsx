import "./tag.css";
import { ComponentPropsWithRef } from "react";

type Variant = "primary" | "secondary";
type Props = {
  variant: Variant;
  children: string;
} & ComponentPropsWithRef<'span'>;

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
