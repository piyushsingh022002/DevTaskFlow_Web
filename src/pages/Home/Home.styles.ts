import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.background};
  padding: 20px;
  color: ${props => props.theme.text};
  
`;

export const Card = styled.div`
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(14px);
  padding: 40px 50px;
  border-radius: 16px;
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.h1`
  color:${props => props.theme.text};
  font-size: 32px;
  letter-spacing: 1px;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 14px;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const ActionButton = styled.button<{ variant: "primary" | "secondary" }>`
  flex: 1;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: 0.25s;

  ${(props) =>
    props.variant === "primary" &&
    `
      background: ${props.theme.primary};
      color: ${props.theme.text};

      &:hover {
        opacity: 0.8;
      }
    `}

  ${(props) =>
    props.variant === "secondary" &&
    `
       background: ${props.theme.secondary};
      color: ${props.theme.text};

      &:hover {
        opacity: 0.8;
      }
    `}
`;
