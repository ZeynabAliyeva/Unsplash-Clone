import { createContext, useState } from 'react';

export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [loginStatus, setloginStatus] = useState(false);
	const [fetch, setFetch] = useState(false);
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));

	let value = {
		loginStatus,
		setloginStatus,
		currentUser,
		setCurrentUser,
		fetch,
		setFetch,
	};
	console.log(currentUser);
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
