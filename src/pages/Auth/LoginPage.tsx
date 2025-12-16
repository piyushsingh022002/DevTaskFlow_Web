import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
	LoginContainer,
	LoginBox,
	Title,
	Form,
	InputGroup,
	Label,
	Input,
	Button,
	ErrorText,
} from "./LoginPage.styles";
import { AuthContext } from "../../context/AuthContext";
import ROUTE_PATHS from "../../routes/RoutePaths";
import type { LoginCredentials } from "../../types/auth.types";

const LoginPage: React.FC = () => {
	const auth = useContext(AuthContext);
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);

	if (!auth) return null; // context not available yet

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		if (!email || !password) {
			setError("Please fill in all fields.");
			return;
		}

		const credentials: LoginCredentials = { email, password };

		try {
			setSubmitting(true);
			const res = await auth.login(credentials);
			if (res && res.user) navigate(ROUTE_PATHS.DASHBOARD);
			} catch (err: unknown) {
				const message = err instanceof Error ? err.message : String(err);
				setError(message || "Failed to login. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<LoginContainer>
			<LoginBox>
				<Title>Welcome back</Title>
				<Form onSubmit={handleSubmit}>
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
							placeholder="Your password"
						/>
					</InputGroup>

					{error && <ErrorText>{error}</ErrorText>}

					<Button type="submit" disabled={submitting}>
						{submitting ? "Signing in..." : "Sign In"}
					</Button>
				</Form>

				<p style={{ textAlign: "center", marginTop: "1rem" }}>
					Don't have an account? <Link to={ROUTE_PATHS.REGISTER}>Register</Link>
				</p>
			</LoginBox>
		</LoginContainer>
	);
};

export default LoginPage;
