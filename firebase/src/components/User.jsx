import React, { useState,useEffect } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase-config';
import { onAuthStateChanged ,signOut} from 'firebase/auth';


const User = () => {
    const [user, setUser] = useState(null);
const navigate=useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user.email);
                console.log(user);
            } else {
                navigate("/login");
            }
        });
        return unsubscribe;
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(firebaseAuth);
            // Perform any additional actions after sign out if needed
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div>
            Welcome User {user}
            <Button variant="contained" color="success" onClick={handleSignOut}>
                Logout
            </Button>
        </div>
    );
};

export default User;
