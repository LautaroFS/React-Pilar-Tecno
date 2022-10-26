import React, {useEffect} from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Card from '../Card/Card.js'
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';

const Dashboard = () => {

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(appActions.setPageTitle("TABLERO"))
	},[])

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