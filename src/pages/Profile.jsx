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
            <h2 className="Working"> Working on it... </h2>
            <Footer />
        </div>
    );
}

export default ProfilePage