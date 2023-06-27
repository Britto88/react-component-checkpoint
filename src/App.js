import React from "react";
import { Container, Card } from "react-bootstrap";
import product from "./product";
import Name from "./component/Name";
import Price from "./component/Price";
import Description from "./component/Description";
import Image from "./component/Image";

const firstName = "Oluwaseyi"; // Replace with your own first name

const App = () => {
  return (
    <>
      <div>
        <Container>
        <Card.Title>
            <Name name="Cars" />
            </Card.Title>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./component/image/" />
            <Card.Body>
              <Card.Text>
                <Price price="" />
                <Description description={product.description} />
                <Image image={product.image} />
              </Card.Text>
            </Card.Body>
            </Card>
            <p>Hello, {firstName ? firstName : "there"}!</p>
            {firstName && <img src={"9e8d9674-2433-4fa7-8fb2-4fdac6abaaf8.webp"} alt="Benz" />}
        </Container>

      </div>
      
    </>
    
  );
};

export default App;