import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../network/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Box, Container, Typography, Button } from '@mui/material';
import { authContext } from '../../store/AuthContext';

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().min(3).max(32).required(),
	})
	.required();

function LoginFeatures() {
	const [verified] = useState('');
	const [email, setEmail] = useState('zeynabma@code.edu.az');
	const [password, setPassword] = useState('123');
	const { setCurrentUser } = useContext(authContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();
	const userLogin = () => {
		let user = {
			email,
			password,
			response: verified,
		};

		api
			.add('/users/login', user)
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res));
				setCurrentUser(JSON.parse(localStorage.getItem('user')));
	
				navigate('confirmcode', { state: { userId: res._id } });
			})
			.catch((err) => {
				console.log('Err', err);
				alert('Email or password invalid!');
			});
	};

	const onSubmit = (data) => {
		userLogin();
		console.log(data);
	};
	const emailHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordHandler = (event) => {
		setPassword(event.target.value);
	};

	return (
		<>
			{/* <button onClick={() => userLogin()}>Login</button> */}
			<Container component="main" maxWidth="xs">
				<form method="POST" className="form" onSubmit={handleSubmit(onSubmit)}>
					<Box
						sx={{
							marginTop: 8,
							display: 'flex',
							flexDirection: 'column',
							gap: '10px',
							width: '100%',
						}}
					>
						<Typography component="h1" variant="h5" textAlign={'center'} color="primary">
							Login
						</Typography>
						<TextField
							autoFocus
							margin="normal"
							autoComplete="email"
							label="email"
							variant="outlined"
							fullWidth
							{...register('email')}
							error={!!errors?.email}
							helperText={errors?.email ? errors.email.message : null}
							onChange={emailHandler}
						/>
						<TextField
							autoFocus
							margin="normal"
							autoComplete="password"
							label="password"
							variant="outlined"
							fullWidth
							{...register('password')}
							error={!!errors?.password}
							helperText={errors?.password ? errors.password.message : null}
							onChange={passwordHandler}
						/>

						<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, p: 2 }}>
							Submit
						</Button>
					</Box>
				</form>
			</Container>
		</>
	);
}

export default LoginFeatures;
