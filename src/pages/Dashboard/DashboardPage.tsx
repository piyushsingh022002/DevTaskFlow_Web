import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../context/AuthContext';

const Title = styled.h1`
	margin: 0 0 1rem 0;
`;

const DashboardPage: React.FC = () => {
	const { logout } = useAuthContext();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<div>
			<Title>Welcome to your Dashboard</Title>
			<p>This is a simple dashboard area.</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default DashboardPage;
