import axios from '@/app/axios/axios';
import { AxiosError } from 'axios';

const RefreshToken = () => {
    const token = window.localStorage.getItem("refreshToken");
    try {
 
        const refresh = axios.post("auth/refresh-token",token);
console.log(refresh)
        
    } catch (error) {
        const err=error as AxiosError
        console.log(err);
    }
 
 
 
}

export default RefreshToken;
