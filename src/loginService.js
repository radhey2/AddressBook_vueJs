import axios from 'axios'

const UserRegistration_url = 'http://localhost:8084/UserRegistration'

class loginService{

    addContact(data){
        return axios.post(`${UserRegistration_url}/create`,data);
    }

    
}

export default new loginService()