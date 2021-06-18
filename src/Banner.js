import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './Banner.css';

function Banner() {

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/thumb/2/24/BlackMirrorTitleCard.jpg/250px-BlackMirrorTitleCard.jpg")`,
                backgroundPosition: 'center center',
            }}>

            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <Button className="banner_button"
                        variant="contained"
                        color="default"
                        startIcon={<PlayArrowIcon />}
                    >Play</Button>
                    <Button className="banner_button"
                        variant="contained"
                        color="default">My List</Button>
                </div>
                <h1 className="banner_description">
                    {truncate(
                        `This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`, 150
                    )}</h1>
            </div>

            <div className="banner-fadeBottom" />
        </header>

    )
}

export default Banner;
