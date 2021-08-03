import React from "react";
import './LoginScreen.css'

function LoginScreen() {
	return (
		<div className="login_screen">
			<div className="login_screen_background">
                <img className="login_screen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button className="login_screen_button">Sign In</button>
            </div>
		</div>
	);
}

export default LoginScreen;
