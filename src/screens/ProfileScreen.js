import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
	const user = useSelector(selectUser);
	return (
		<div className="profile_screen">
			<Nav />

			<div className="profile_screen_body">
				<h1>Edit Profile</h1>

				<div className="profile_screen_info">
					<img
						src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
						alt="profile_avatar"
					/>

					<div className="profile_screen_details">
						<h2>{user.email}</h2>
						<div className="profile_screen_plans">
							<h3>Plans</h3>

							<PlansScreen />

							<button
								className="profile_screen_signout"
								onClick={() => auth.signOut()}
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
