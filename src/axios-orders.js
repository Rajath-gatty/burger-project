import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-0001.firebaseio.com/'
})

export default instance;