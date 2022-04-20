import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username':  'juniorcaus',
        'email': 'miltomjuniorcausgervasio@hotmail.com',
        'avatar': '../img/avatars/rick.png',

    }
});

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

     if (email !== 'miltomjuniorcausgervasio@hotmail.com' || password !== 'admin') {
        return[400, { message: 'Seu email ou senha estão errados' }]    
     }

     const user = {
         id: 1,
         name: 'juniorcaus',
         username: 'juniorcaus',
         email: 'miltomjuniorcausgervasio@hotmail.com',
         avatar: '/src/img/avatars/rick.png',
     }

    return[200, { user }]
});