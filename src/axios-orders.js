import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3c98a.firebaseio.com/'
});

export default instance;