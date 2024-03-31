import { ComponentPropsWithRef, ReactNode } from "react";
import "./button.css";

type VariantType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary";
type Size = "small" | "medium" | "large";

type ButtonProps = {
  variant: VariantType;
  size: Size;
  color?: string;
  children: ReactNode;
} & ComponentPropsWithRef<"button">;

export default function Button({
  variant = "primary",
  children,
  size,
  color,
  ...rest
}: ButtonProps) {
  let variantClass: string = "";
  let sizeClass: string = "";

  switch (variant) {
    case "primary":
      variantClass = "primary";
      break;
    case "secondary":
      variantClass = "secondary";
      break;
    case "tertiary":
      variantClass = "tertiary";
      break;
    case "quaternary":
      variantClass = "quaternary";
      break;
    case "quinary":
      variantClass = "quinary";
      break;
  }

  switch (size) {
    case "small":
      sizeClass = "small";
      break;
    case "medium":
      sizeClass = "medium";
      break;
    case "large":
      sizeClass = "large";
      break;
  }

  return (
    <button
      className={`button ${variantClass} ${sizeClass} ${color}`}
      {...rest}
    >
      {children}
    </button>
  );
}
