import axios from 'axios';
const KEY = 'b7f94692965b4fe8875544fea5687fac';
 
export default axios.create({
    baseURL:'https://api.weatherbit.io/v2.0/current',
    params:{
        key:KEY,
        units:'I'
    }
});