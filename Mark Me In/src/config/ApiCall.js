

// const API_BASE_URL = 'https://ibs-server-82kd.onrender.com/markMeIn';
const API_BASE_URL = 'http://192.168.29.129:3030/markMeIn';


const API_URL ={
    EMPLOYEE_LOGIN: `${API_BASE_URL}/loginEmployee`,
    SUBSCRPTION: `${API_BASE_URL}/subscription/status`,
    attendance: `${API_BASE_URL}/attendance`,
    geofences: `${API_BASE_URL}/geofences`,
    employees: `${API_BASE_URL}/employees`,
    PUNCH_IN: `${API_BASE_URL}/attendance/punch-in`
}

export default API_URL;