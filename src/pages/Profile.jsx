import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import '../Styles/Profile.css';
import { useState, useEffect } from 'react';
import Loading from '../Components/Loading.jsx';
import heart from '../assets/heart.svg';
import pencil from '../assets/pencil.svg';
import chat from '../assets/chat.svg';
import settings from '../assets/settings.svg';
import exit from '../assets/exit.svg';
import avatar from '../assets/avatar.jfif';

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
                    <img src={avatar} alt="profile-img" className="Profile-img" />
                </div>
                <div className="Profile-info-div">
                    <h2 className="Profile-name">Jane Doe</h2>
                    <h2 className="Profile-city"> New York, United States</h2>
                </div>
                <div className="Profile-settings-div">
                    <ul>
                        <li className="Profile-favorites"> <img src={heart} alt="heart" className="icons" />My Favorite List</li>
                        <li className="Profile-edit"> <img src={pencil} alt="pencil" className="icons" />Edit Profile</li>
                        <li className="Profile-message"> <img src={chat} alt="lock" className="icons" />Messages</li>
                        <li className="Profile-settings"> <img src={settings} alt="settings" className="icons" />Settings</li>
                        <li className="Profile-logout"> <img src={exit} alt="exit" className="icons" />Logout</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage