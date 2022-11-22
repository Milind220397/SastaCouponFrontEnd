import { createContext, useContext, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState(null);

    const signIn = async (email, password) => {
        return await axios.post('http://localhost:9000/logIn', {
            email: email,
            password: password
        }).then(response => {
            if(response.status === 200) {
                setCurrentUser({email: email});
                return 'Success'
            } else {
                return 'User Not found';
            }
        }).catch(() => "User not found");
    }

    const signUp = async (email, password) => {
        return await axios.post('http://localhost:9000/signUp', {
            email: email,
            password: password
        }).then(response => {
            if(response.status === 200) {
                setCurrentUser({email: email});
                return 'Success'
            } else {
                return 'User already exist';
            }
        }).catch(() => 'Unexpected erorr occured. Please try again')
    }

    const logOut = () => {
        setCurrentUser(null);
    }

    const value = {
        currentUser,
        signIn,
        signUp,
        logOut
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}