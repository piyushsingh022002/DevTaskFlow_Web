import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const AboutPage: React.FC = () => (
  <Container>
    <h1>About DevTaskFlow</h1>
    <p>This is a demo project to manage tasks and workflows. The dashboard demonstrates protected routes and simple auth flows.</p>
  </Container>
);

export default AboutPage;
