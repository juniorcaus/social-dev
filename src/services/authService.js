import axios from '../utils/axios';

class AuthService {
    //outras funções no futuro


    signIn(email, password) {

            //pesquisa no google sobre "Promise javascript" para entender melhor
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
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
}

const authService = new AuthService();

export default authService