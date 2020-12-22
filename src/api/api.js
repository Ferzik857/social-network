import * as axios from "axios";
import { follow } from "../redux/Users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "4473d935-0622-46eb-945e-aede32cbb4f2"
    }
})




export const userAPI = {
    getUsers(currentPage =1,pageSize = 10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
        },
        follow(userId){
            return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
        },

        unfollow(userId){
          return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
       }
}



