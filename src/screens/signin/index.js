import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import { AuthContext } from '../../context/authContext';

import { styles } from './styles';
import { Message } from '../../components';

const SigninScreen = () => {
	const navigation = useNavigation();

	const [_, setAuth] = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isFormComplete, setIsFormComplete] = useState(true);

	const onSignin = () => {
		if (!email || !password) {
			return setIsFormComplete(false);
		}
		setAuth({
			isLoggedIn: true,
		});
	};

	const onNavigate = () => {
		setEmail('');
		setPassword('');
		setIsFormComplete(true);
		navigation.navigate('Signup');
	};

	return (
		<View style={styles.container}>
			<Text h3 style={styles.header}>
				Signin for Tracker
			</Text>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				label="Email"
				onChangeText={setEmail}
				value={email}
			/>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				label="Password"
				onChangeText={setPassword}
				value={password}
				secureTextEntry
			/>
			<Button title="Signin" onPress={onSignin} />
			<Button
				title="Don't have an account? Signup instead."
				type="clear"
				onPress={onNavigate}
			/>
			{!isFormComplete && (
				<Message
					text="Please enter a valid email and password."
					type="danger"
				/>
			)}
		</View>
	);
};

export default SigninScreen;
