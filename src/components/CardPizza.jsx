import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

export default function CardPizza({ id, name, price, ingredients, img }) {
  const { add } = useCart();
  const clp = (n) => n.toLocaleString("es-CL");

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={img} alt={name} style={{ objectFit: "cover", height: 180 }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>

        <div className="mb-2">
          <span className="fw-semibold">Ingredientes:</span>
          <ul className="mb-0 ps-3">
            {ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
        </div>

        <h6 className="mt-auto mb-3">Precio: ${clp(price)}</h6>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" className="w-50">Ver más</Button>
          <Button
            variant="primary"
            className="w-50"
            onClick={() => add({ id, name, price, img })}
          >
            Añadir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
