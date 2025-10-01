import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CardPizza from "../components/CardPizza";
// import { API_URL } from "../config";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
  const fetchPizzas = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas");
    const data = await res.json();
    setPizzas(data);
  };
  fetchPizzas();
}, []);

  return (
    <main>
      <Container className="my-4">
        <Row className="g-3">
          {pizzas.map((pz) => (
            <Col key={pz.id} xs={12} md={6} lg={4}>
              <CardPizza
                id={pz.id}
                name={pz.name}
                price={pz.price}
                ingredients={pz.ingredients}
                img={pz.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
