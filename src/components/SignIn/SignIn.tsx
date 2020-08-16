import React, { useState, useEffect } from "react";
import { Page, Spacer, Button } from "@zeit-ui/react";
import { FormContainer, UsernameInput, PasswordInput } from "./Styles";
import User from "@zeit-ui/react-icons/user";
import Key from "@zeit-ui/react-icons/key";
import { SignInText } from "./Styles";
import ChevronRight from "@zeit-ui/react-icons/chevronRight";
import { BASE_URL } from "../../lib/constants";
import axios from "axios";
import { useRouter } from "next/router";

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

	const usernameInputHandler = (e) => {
		setUsername(e.target.value);
		// console.log(e.target.value);
	};

	const passwordInputHandler = (e) => {
		setPassword(e.target.value);
		// console.log(e.target.value);
	};

	const signInHandler = async (e) => {
		e.preventDefault();
		const serverResponse = await axios({
			method: "POST",
			url: `${BASE_URL}/iconrequests/auth`,
			data: {
				username: username,
				password: password
			}
		})
			.then((response) => response.data)
			.then((response) => {
				setSignedIn(response.status == "SUCCESS");
				if (response.status == "SUCCESS") {
					localStorage.setItem("user", response);
				} else {
					if (buttonStatus !== "error") setButtonStatus("error");
				}
			})
			.catch((error) => {
				console.log(error.message);
				setSignedIn(false);
			});

		return serverResponse;
	};

	if (signedIn === true) router.push("/dashboard");

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
