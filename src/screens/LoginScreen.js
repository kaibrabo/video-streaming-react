import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
	return (
		<div className="login_screen">
			<div className="login_screen_background">
				<img
					className="login_screen_logo"
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
				/>
				<button className="login_screen_button">Sign In</button>
				<div className="login_screen_gradient" />
				<div className="login_screen_body">
					<>
						<h1>Unlimited films , TV programs and more.</h1>
                        <h2>Watch anywhere. Cancel at anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login_screen_input">
                            <form action="">
                                <input type="email"
                                placeholder="Email Address" />
                                <button className="login_screen_get_started">GET STARTED</button>
                            </form>
                        </div>
					</>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
