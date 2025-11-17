import React from "react";
import { Container, Card, Title, ButtonGroup, ActionButton } from "./Home.styles";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {

    const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <Title>Welcome Abroad</Title>

        <ButtonGroup>
          <ActionButton variant="primary" onClick={() => navigate("/login")}>Login</ActionButton>
          <ActionButton variant="secondary" onClick={() => navigate("/register")}>Register</ActionButton>
        </ButtonGroup>
      </Card>
    </Container>
  );
};

export default Home;
