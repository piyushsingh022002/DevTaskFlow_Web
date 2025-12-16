import React, { useContext } from "react";
import { Container, Card, Title, ButtonGroup, ActionButton } from "./Home.styles";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Home: React.FC = () => {

    const navigate = useNavigate();
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log("Current theme:", theme);

  return (
    <Container className={theme}>
      <Card>
        <Title>Welcome Abroad</Title>

        <ButtonGroup>
          <ActionButton variant="primary" onClick={() => navigate("/login")}>Login</ActionButton>
          <ActionButton variant="secondary" onClick={() => navigate("/register")}>Register</ActionButton>
          <ActionButton variant="primary" onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </ActionButton>
        </ButtonGroup>
      </Card>
    </Container>
  );
};

export default Home;
