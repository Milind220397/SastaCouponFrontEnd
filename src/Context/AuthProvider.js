import { createContext, useContext, useState } from "react";
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {

    const setCurrentUser = (user) => {
        localStorage.setItem('sasta-coupon-app', JSON.stringify(user));
        axios.interceptors.request.use((config) => {
            if(config && config.headers) {
                config.headers.Authorization = `Bearer ${user.token}`
            }
            return config;
        })
    }

    const signIn = async (email, password) => {
        return await axios.post('http://localhost:9000/logIn', {
            email: email,
            password: password
        }, ).then(response => {
            if(response.status === 200) {
                setCurrentUser(response.data);
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
                setCurrentUser(response.data);
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
        signIn,
        signUp,
        logOut
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}