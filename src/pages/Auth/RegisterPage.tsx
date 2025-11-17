import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	RegisterContainer,
	RegisterBox,
	Title,
	Form,
	InputGroup,
	Label,
	Input,
	Button,
	ErrorText,
} from "./RegisterPage.styles";
import { AuthContext } from "../../context/AuthContext";
import ROUTE_PATHS from "../../routes/RoutePaths";
import type { RegisterData } from "../../types/auth.types";

const RegisterPage: React.FC = () => {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);

	if (!auth) return null;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		if (!name || !email || !password) {
			setError("Please fill in all fields.");
			return;
		}

		const data: RegisterData = { name, email, password };

		try {
			setSubmitting(true);
			await auth.register(data);
			navigate(ROUTE_PATHS.DASHBOARD);
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : String(err);
			setError(message || "Registration failed. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<RegisterContainer>
			<RegisterBox>
				<Title>Create account</Title>
				<Form onSubmit={handleSubmit}>
					<InputGroup>
						<Label htmlFor="name">Name</Label>
						<Input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Your full name"
						/>
					</InputGroup>

					<InputGroup>
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
						/>
					</InputGroup>

					<InputGroup>
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Choose a password"
						/>
					</InputGroup>

					{error && <ErrorText>{error}</ErrorText>}

					<Button type="submit" disabled={submitting}>
						{submitting ? "Creating account..." : "Register"}
					</Button>
				</Form>

				<p style={{ textAlign: "center", marginTop: "1rem" }}>
					Already have an account? <Link to={ROUTE_PATHS.LOGIN}>Sign in</Link>
				</p>
			</RegisterBox>
		</RegisterContainer>
	);
};

export default RegisterPage;
