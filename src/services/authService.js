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

    // eslint-disable-next-line no-dupe-class-members
    signInWithToken = () => {
            return new Promise((resolve, reject) => {
                axios.post('/api/home/me') //envio o token pelo header
                .then(response => {
                    if (response.data.user) {
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

    signOut = () => {
        this.removeToken();
    }

    setToken = (token) => {
        localStorage.setItem("accessToken", token);
    }
    getToken = () => localStorage.getItem("accessToken");

    removeToken = () => localStorage.removeItem("accessToken")
                
    isAuthenticated = () => !!this.getToken();
    
}

const authService = new AuthService();

export default authService;