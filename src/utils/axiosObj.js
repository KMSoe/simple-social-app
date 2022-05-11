import axios from 'axios';

const axiosObj = axios.create({
    baseURL: `http://localhost:8000/api`,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
    }
});

export default axiosObj;