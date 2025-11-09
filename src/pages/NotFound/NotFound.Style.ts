import styled, { keyframes } from 'styled-components';

// 🎨 Color palette
const colors = {
  background: '#f9fafb',
  textPrimary: '#111827',
  textSecondary: '#6b7280',
  accent: '#2563eb',
  accentHover: '#1d4ed8',
};

// ✨ Subtle fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 🔹 Full-page wrapper
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.background};
  padding: 1rem;
`;

// 🔹 Centered content box
export const Content = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

// 🔹 Large "404" number
export const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  color: ${colors.accent};
  margin: 0;
  letter-spacing: -4px;

  @media (max-width: 600px) {
    font-size: 6rem;
  }
`;

// 🔹 Title message
export const Message = styled.h2`
  font-size: 2rem;
  color: ${colors.textPrimary};
  margin: 1rem 0;
`;

// 🔹 Description
export const Description = styled.p`
  font-size: 1rem;
  color: ${colors.textSecondary};
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
`;

// 🔹 “Go Home” button
export const HomeButton = styled.button`
  background-color: ${colors.accent};
  color: white;
  border: none;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: ${colors.accentHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
