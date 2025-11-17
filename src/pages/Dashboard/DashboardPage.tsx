import React from "react";
import { Container, Card, Title, ButtonGroup, ActionButton } from "./Dashboard.styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>Dashboard</Title>

        <ButtonGroup>
          <ActionButton variant="primary">Profile</ActionButton>
          <ActionButton variant="secondary">Logout</ActionButton>
        </ButtonGroup>
      </Card>
    </Container>
  );
};

export default Dashboard;
