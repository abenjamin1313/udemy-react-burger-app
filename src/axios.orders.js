import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a554c.firebaseio.com/'
});

export default instance;