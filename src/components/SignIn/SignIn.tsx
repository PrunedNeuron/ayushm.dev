import { Button, Page, Spacer } from "@zeit-ui/react";
import ChevronRight from "@zeit-ui/react-icons/chevronRight";
import Key from "@zeit-ui/react-icons/key";
import User from "@zeit-ui/react-icons/user";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../lib/constants";
import { FormContainer, PasswordInput, UsernameInput } from "./Styles";
import { SignInText } from "./Styles";

const SignIn: React.FC = (): JSX.Element => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [signedIn, setSignedIn] = useState(false);
	const [buttonStatus, setButtonStatus] = useState("success");

	const router = useRouter();

	useEffect(() => {
		const signedInUser = localStorage.getItem("user");
		if (signedInUser) {
			const foundUser = JSON.parse(JSON.stringify(signedInUser));

			setSignedIn(true);
			setUsername(foundUser.username);
		}
	}, []);

	const usernameInputHandler = (event) => {
		setUsername(event.target.value);
		// console.log(e.target.value);
	};

	const passwordInputHandler = (event) => {
		setPassword(event.target.value);
		// console.log(e.target.value);
	};

	const signInHandler = async (event) => {
		event.preventDefault();
		return await axios({
			method: "POST",
			url: `${BASE_URL}/iconrequests/auth`,
			data: {
				username: username,
				password: password
			}
		})
			.then((response) => response.data)
			.then((response) => {
				setSignedIn(response.status === "SUCCESS");
				if (response.status === "SUCCESS") {
					localStorage.setItem("user", response);
				} else {
					if (buttonStatus !== "error") {
						setButtonStatus("error");
					}
				}
			})
			.catch((error) => {
				console.log(error.message);
				setSignedIn(false);
			});
	};

	if (signedIn === true) {
		router.push("/dashboard");
	}

	return (
		<Page dotBackdrop render="effect-seo" size="small">
			<FormContainer>
				<SignInText>Sign In</SignInText>
				<UsernameInput
					clearable
					icon={<User />}
					placeholder="  Username"
					value={username}
					onChange={usernameInputHandler}
				/>
				<Spacer y={0.5} />
				<PasswordInput
					icon={<Key />}
					placeholder="Password"
					value={password}
					onChange={passwordInputHandler}
				/>
				<Spacer y={0.5} />
				<Button
					type="success"
					iconRight={<ChevronRight />}
					onClick={signInHandler}
					shadow
					auto
				>
					Sign in
				</Button>
			</FormContainer>
		</Page>
	);
};

export default SignIn;
