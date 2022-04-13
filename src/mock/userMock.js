import mock from '../utils/mock';

mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username':  'juniorcaus',
    'email': 'miltomjuniorcausgervasio@hotmail.com'
})