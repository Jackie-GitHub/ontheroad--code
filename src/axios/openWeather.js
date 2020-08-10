import axios from 'axios';
const KEY = 'd16369127b2966c047ff4c8ffe052bb9';
 
export default axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5',
    params:{
        appid:KEY}
});

