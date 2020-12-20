import * as axios from "axios";

export const userAPI = {
    getUsers(currentPage =1,pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
        }
}
const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "4473d935-0622-46eb-945e-aede32cbb4f2"
    }
})


