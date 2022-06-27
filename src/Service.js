import axios from 'axios'

const Addressbook_url = 'http://localhost:8083/AddressBook'

class service{

    addContact(data){
        return axios.post(`${Addressbook_url}/create`,data);
    }

    getAllContact(){
        return axios.get(`${Addressbook_url}/get`);
    }
}

export default new service()