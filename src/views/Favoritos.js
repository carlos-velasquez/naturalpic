import { useContext } from "react";
import MyContext from "../my_context";

export default function Favoritos() {
  const { endPoint} = useContext(MyContext)
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       
      </div>
    </div>
  );
}
