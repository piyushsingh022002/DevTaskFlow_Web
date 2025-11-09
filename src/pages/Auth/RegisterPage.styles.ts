import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%);
`;

export const RegisterBox = styled.div`
  width: 360px;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(2,6,23,0.06);
  transition: transform 0.18s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Title = styled.h2`
  text-align: left;
  margin: 0 0 1rem 0;
  color: #0f172a;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 0.35rem;
`;

export const Input = styled.input`
  padding: 0.7rem 0.9rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    border-color: #06b6d4;
    box-shadow: 0 0 0 3px rgba(6,182,212,0.08);
  }
`;

export const Button = styled.button`
  padding: 0.8rem;
  background: #06b6d4;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.16s ease-in-out, transform 0.12s ease;

  &:hover {
    background: #0891b2;
    transform: translateY(-1px);
  }
`;

export default {
  RegisterContainer,
  RegisterBox,
  Title,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
};
