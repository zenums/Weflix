import { ComponentPropsWithoutRef } from "react";

type CardCompanyProps = {
    title?: string;
    logo: string;
} & ComponentPropsWithoutRef<'div'>;

export default function cardCompany({title, logo}: CardCompanyProps) {
  return (
    <div className="card-company">
        <img src={logo} alt={title}/>
    </div>
  )
}