import { Button, Grid, TextField } from '@mui/material';

import { Title } from '../../components/Title';

export const Login = () => {
	return (
		<Grid container>
			<Grid item>
				<Title variant="h1" align="center" color="#000">
					Login!
				</Title>
			</Grid>

			<Grid item>
				<TextField>dsds</TextField>
			</Grid>

			<Grid item>
				<TextField>dsds</TextField>
			</Grid>

			<Grid item>
				<Button></Button>
			</Grid>
		</Grid>
	);
};
