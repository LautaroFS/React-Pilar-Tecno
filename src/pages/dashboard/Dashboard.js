import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Card from '../Card/Card.js'

const Dashboard = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper sx={{ p: 2 }}>
					<Card/>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Dashboard;