import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<div className="signup_screen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} placeholder="Email" type="email" />
				<input
					ref={passwordRef}
					placeholder="Password"
					type="password"
				></input>
				<button type="submit" onClick={signIn}>
					Sign In
				</button>

				<h4>
					New to Netflix? <a onClick={register}>Sign up now.</a>
				</h4>
			</form>
		</div>
	);
}

export default SignUpScreen;
