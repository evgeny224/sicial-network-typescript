import * as axios from "axios";


    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers:{"API-KEY": "9bb3ca7d-cf57-4df4-b29a-d37090202339"},
    })



    export const usersAPI = {
        getUsers (currentPage = 1, pageSize = 5) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        },
        follow (usersId) {
            return instance.post(`follow/${usersId}`)
        },
        unfollow (usersId) {
            return instance.delete(`follow/${usersId}`)
        },
        setUserProfile (userId) {
            return  instance.get(`profile/` + userId)
        },
        setUserPhoto (photoFile) {
            const formData = new FormData()
            formData.append("image", photoFile);

            return instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        },
        saveProfile(profile) {
            return instance.put(`profile`, profile)
        }


    }

    export const statusAPI = {
        getUserStatus(userId){
            return instance.get(`/profile/status/${userId}`)
        },
        updateUserStatus(status){
            return instance.put(`/profile/status`, {status: status})
        }
    }

    export const authAPI = {
        me () {
            return instance.get(`auth/me`)
        },
        login(email, password, rememberMe = false, captcha = null){
            return instance.post(`auth/login`, {email, password, rememberMe, captcha})
        },
        logout(){
            return instance.delete(`auth/login`)
        },
    }

    export const securityAPI = {
        getCaptchaUrl(){
            return instance.get(`security/get-captcha-url`)
        }
    }
