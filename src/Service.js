import axios from 'axios'

const Addressbook_url = 'http://localhost:8083/AddressBook'

class service{

    addContact(data){
        return axios.post(`${Addressbook_url}/create`,data);
    }

    getAllContact(){
        return axios.get(`${Addressbook_url}/get`);
    }

    deleteContact(id){
        return axios.delete(`${Addressbook_url}/delete/${id}`)
    }

    getEmployeeById(id){
        return axios.get(`${Addressbook_url}/get/${id}`);
    }

    updateContact(id,data){
        return axios.put(`${Addressbook_url}/update/${id}`,data);
    }

    getsortCity() {
        return axios.get(`${Addressbook_url}/get/sortbycity`);
      }
   
    getsortState() {
        return axios.get(`${Addressbook_url}/get/sortbystate`);
      }

}

export default new service()