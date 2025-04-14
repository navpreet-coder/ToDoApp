import axios from "axios";
const {VITE_BASE_URL,VITE_NAV}=import.meta.env
const api = axios.create({
    baseURL:VITE_BASE_URL
})

export const getToDos=()=>{
    return api.get('/getTodo')
}