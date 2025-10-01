import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import { API_URL } from "../config";

const clp = (n) => n.toLocaleString("es-CL");

export default function Pizza() {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
  const fetchPizza = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await res.json();
    setPizza(data);
  };
  fetchPizza();
}, []);


  if (!pizza) return <p className="text-center mt-4">Cargando...</p>;

  return (
    <main>
      <Container className="my-4">
        <Card className="shadow-sm">
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <h5>Precio: ${clp(pizza.price)}</h5>
            <p>{pizza.desc}</p>
            <ul>
              {pizza.ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Añadir</button>
          </Card.Body>
        </Card>
      </Container>
    </main>
  );
}
