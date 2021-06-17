import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
    // creates navbar transition when scrolling down
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img alt="logo" className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></img>

                <img alt="avatar" className="nav_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"></img>
            </div>
        </div>
    )
}

export default Nav;
