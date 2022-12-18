import axios from "axios"; 

export const apiBuguer = axios.create({
    baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
    timeout: 8000

})