import { API_URL } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { setError, setUser } from "../slices/AuthSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signInUser = async (username, password, dispatch) => {
    const userData = {
        username: username,
        password: password
    }

    try {
        const response = await fetch(`${API_URL}/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const responseData = await response.json();

        dispatch(setUser(userData));
        dispatch(setError(responseData));

        console.log(responseData);

        return responseData;
    } catch (error) {
        console.log("Error occurred:", error);

        if (error.message === "Network request failed" || error.message === "Failed to fetch") {
            console.log("Network error occurred");
        }

        throw error;
    }
}


export const registerUser = async (userData, id) => {
    try {
        const userDataForToken = {
            username: userData.username,
            password: userData.password
        }
        const getToken = await axios.post(`${API_URL}/login/jwt/create/`, userDataForToken);

        const response = await fetch(`${API_URL}/user/users/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken.data.access}`
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}

export async function getUserID() {
    try {
        const user_str = await AsyncStorage.getItem('user');
        if (user_str !== null) {
            const user = JSON.parse(user_str);
            return user;      
        }
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
    }
}

  
  