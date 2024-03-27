import { NavLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function Link({ to, children }: LinkProps) {
  return (
    <NavLink to={to} activeClassName="active">
      {children}
    </NavLink>
  );
}
