import styled from 'styled-components';

export const RegisterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%);
`;

export const RegisterBox = styled.div`
	width: 420px;
	background: #fff;
	padding: 2.5rem;
	border-radius: 12px;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: translateY(-2px);
	}
`;

export const Title = styled.h2`
	text-align: center;
	margin-bottom: 2rem;
	color: #1e293b;
	font-weight: 600;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	font-size: 0.9rem;
	color: #334155;
	margin-bottom: 0.4rem;
`;

export const Input = styled.input`
	padding: 0.8rem 1rem;
	border: 1px solid #cbd5e1;
	border-radius: 6px;
	font-size: 0.95rem;
	transition: border-color 0.2s ease-in-out;

	&:focus {
		border-color: #3b82f6;
		outline: none;
	}
`;

export const Button = styled.button`
	padding: 0.8rem;
	background: #10b981;
	color: white;
	border: none;
	border-radius: 6px;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: background 0.2s ease-in-out;

	&:hover {
		background: #059669;
	}
`;

export const ErrorText = styled.p`
	color: #ef4444;
	font-size: 0.9rem;
	text-align: center;
	margin: -0.5rem 0 0.5rem;
`;
