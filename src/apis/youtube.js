import axios from 'axios';
const KEY = 'AIzaSyDl3ZQtjPfirjV1rPxK25Xo2V4r-dws6bU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 20,
        key: KEY
    }
})