import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(180deg, #f6f8fb 0%, #ffffff 100%);
`;

export const Card = styled.div`
  padding: 2.25rem 2.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(20, 30, 60, 0.08);
  text-align: center;
  min-width: 320px;
  max-width: 720px;
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.04);

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 1.6rem;
    color: #0f172a;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.98rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 3.5rem;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 0.56rem 0.9rem;
    border-radius: 8px;
    border: 1px solid transparent;
    background: #0ea5e9; /* sky-500 */
    color: white;
    font-weight: 600;
    transition: transform 120ms ease, box-shadow 120ms ease, background 120ms ease;
    box-shadow: 0 6px 18px rgba(14, 165, 233, 0.12);
    border: none;
  }

  /* only apply hover and transform when the button is not disabled */
  button:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(14, 165, 233, 0.14);
  }

  /* disabled state styling */
  button:disabled {
    background: #e6eef2; /* light muted */
    color: #94a3b8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.9;
    border: 1px solid rgba(15, 23, 42, 0.03);
    pointer-events: none;
  }

  button:nth-child(2) {
    background: transparent;
    color: #0f172a;
    border: 1px solid rgba(15, 23, 42, 0.06);
    box-shadow: none;
  }

  button:nth-child(3) {
    background: #06b6d4; /* teal-400 */
    box-shadow: 0 6px 18px rgba(6, 182, 212, 0.08);
  }
`;

export default {
  Container,
  Card,
  Buttons,
};
