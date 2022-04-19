import axios from '../utils/axios';

class AuthService {
    signIn = (email, password) => {

            //pesquisa no google sobre "Promise javascript" para entender melhor
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
            .then(response => {
                if (response.data.user) {
                    this.setToken('JWT')
                    resolve(response.data.user)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    setToken = (token) => {
        localStorage.setItem("accessToken", token);
    }
    getToken = () => {
        const user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user)
        }
        return user;
    }
    isAuthenticated = () => !!this.getToken();
    
}

const authService = new AuthService();

export default authService;