import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import './Profile.css';
import { useState, useEffect } from 'react';
import Loading from '../Components/Loading.jsx';

function ProfilePage() {

    const [loading, setLoading] = useState(true)

     useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

    return (
        <div>
            {loading && <Loading />}
            <Header />
            <div className="Profile-div">
                <div className="Profile-img-div">
                    <img src="avatar.jfif" alt="profile-img" className="Profile-img" />
                </div>
                <div className="Profile-info-div">
                    <h2 className="Profile-name">Jane Doe</h2>
                    <h2 className="Profile-city"> New York, United States</h2>
                </div>
                <div className="Profile-settings-div">
                    <ul>
                        <li className="Profile-favorites"> <img src="heart.svg" alt="heart" className="icons" />My Favorite List</li>
                        <li className="Profile-edit"> <img src="pencil.svg" alt="pencil" className="icons" />Edit Profile</li>
                        <li className="Profile-message"> <img src="chat.svg" alt="lock" className="icons" />Messages</li>
                        <li className="Profile-settings"> <img src="settings.svg" alt="settings" className="icons" />Settings</li>
                        <li className="Profile-logout"> <img src="exit.svg" alt="exit" className="icons" />Logout</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage