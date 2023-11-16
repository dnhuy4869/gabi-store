import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "./auth.slice";
import Api from 'app/api';

export const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        if (!user) {
            const currUser = localStorage.getItem('user');
            if (currUser) {
                dispatch(setUser(JSON.parse(currUser)));
            }
        }
    }, []);

    const isAuthenticated = () => {
        return user !== null;
    };

    const setLocalUser = (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(setUser(data));
    }

    const logoutUser = async () => {
        await Api.Post("/auth/logout");

        localStorage.removeItem("user");
        dispatch(setUser(null));
    }

    return { user, setLocalUser, logoutUser, isAuthenticated };
}