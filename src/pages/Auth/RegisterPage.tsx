import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import ROUTE_PATHS from '../../routes/RoutePaths';
import {
	RegisterContainer,
	RegisterBox,
	Title,
	Form,
	InputGroup,
	Label,
	Input,
	Button,
} from './RegisterPage.styles';

const RegisterPage: React.FC = () => {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();
		// For demo purposes we immediately log the user in after "register"
		login();
		navigate(ROUTE_PATHS.DASHBOARD_MAIN);
	};

	return (
			<RegisterContainer>
				<RegisterBox>
					<Title>Create account</Title>
					<Form onSubmit={handleRegister}>
						<InputGroup>
							<Label>Username</Label>
							<Input type="text" required />
						</InputGroup>

						<InputGroup>
							<Label>Password</Label>
							<Input type="password" required />
						</InputGroup>

						<Button type="submit">Register</Button>
					</Form>
				</RegisterBox>
			</RegisterContainer>
	);
};

export default RegisterPage;
