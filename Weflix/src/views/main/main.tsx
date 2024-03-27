import LeftNav from "../../components/navBar/leftNav";
import './main.css'
type Props = {
    children: React.ReactNode;
}

export default function main({children}: Props) {
  return (
    <main>
      <LeftNav />
      <div className="main-views">
        {children}
      </div> 
    </main>
  )
}