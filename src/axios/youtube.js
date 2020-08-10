import axios from 'axios';
const KEY = 'AIzaSyA_vUCUZFMbnvLd3cQai7EE5UhTRAvJc1Y';
//'AIzaSyCOpCJH23a59CJsE39JYrKSTX9ogVWCLIg';
 
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:4,
        key:KEY
    }
});
