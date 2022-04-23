import axios from 'axios';

const axiosObj = axios.create({
    baseURL: `http://localhost:8000/api`,
    headers: {
        'Accept': 'Application/json'
    }
});

export default axiosObj;