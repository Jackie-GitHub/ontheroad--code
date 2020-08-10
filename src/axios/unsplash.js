import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 0984f38057415e8bdf08c3c70fa58e85495e85390089ed4c3b0abbd41542153b'
    }
});