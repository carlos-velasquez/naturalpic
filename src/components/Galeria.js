import "../assets/css/galeria.css";

import Card from 'react-bootstrap/Card';


import Heart from "./Heart";
import { useEffect, useState } from "react";


export default function Home() {

  const [info, setInfo] = useState([])
  const fotos = () => {
    fetch('/fotos.json')
      .then(response => response.json())
      .then(data => {
        setInfo(data.photos.map(info => info.src.original))
      });
  }
  useEffect(() => {
    fotos()
  }, [])

  return (
    <div className="galeria grid-columns-4 p-3">
      {
        info.map(original => {
          return <div> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" key={original} src={original} alt="foto" className="foto" />

          </Card>

          </div>
        })
      }
      <Heart />
    </div>
  );
}
