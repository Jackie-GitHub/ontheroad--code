import axios from 'axios';
const KEY = 'xxxxxxxxxx';
 
export default axios.create({
    baseURL:'https://api.weatherbit.io/v2.0/current',
    params:{
        key:KEY,
        units:'I'
    }
});