<template>
     <body>
      <router-link to="/form"><v-btn 
        color="primary"
        absolute
        right
        >
        <v-icon>mdi-account-plus</v-icon>Add User</v-btn>
        <h2>Persons Details</h2>
      
      </router-link> 
      
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            FirstName
          </th>
          <th class="text-left">
            LastName
          </th>
          <th class="text-left">
            Address
          </th>
          <th class="text-left">
            City
          </th>
          <th class="text-left">
            State
          </th>
          <th class="text-left">
            zipcode
          </th>
          <th class="text-left">
            phoneNo
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Actions
          </th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="Contact in Contacts"
          :key="Contact.id"
        >
          <td class="text-left">{{ Contact.firstname }}</td>
          <td class="text-left">{{ Contact.lastname }}</td>
          <td class="text-left">{{ Contact.address }}</td>
          <td class="text-left">{{ Contact.city }}</td>
          <td class="text-left">{{ Contact.state }}</td>
          <td class="text-left">{{ Contact.zipcode }}</td>
          <td class="text-left">{{ Contact.phoneNo }}</td>
          <td class="text-left">{{ Contact.email }}</td>
         <td>
           <v-icon @click="remove(Contact.id)">mdi-delete</v-icon>
          <v-icon @click="updateContact(Contact.id)">mdi-pencil</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </body>
  

</template>


<script>
  import Service from '../Service';
 
export default {
  name: "DisplayHome",
  data() {
    return {
      Contacts: [],
      
    };
    
  },
 
  
  methods: {
    getEmployee() {
      Service.getAllContact().then((response) => {
        console.log(response.data.data);
        this.Contacts = response.data.data;
      });
    },
      updateContact(id) {
      this.$router.push({ name: "EditForm", params: { id: id } });
    },

    remove(id) {
      var answer = window.confirm(
        "Data once deleted can not be restored[] Do you wish to continue ?"
      );
      if (answer === true) {
        Service
          .deleteContact(id)
          .then((data) => {
            alert("Contact Deleted SuccessFully!!");
            window.location.reload();
            this.getAllContact();
          })
          .catch((error) => {
           console.log(error);
          });
      } else {
        window.location.reload();
      }
    },
  },
   created() {
    this.getEmployee();
  },
}
   
</script>


<style>
body {
  margin: 0;
  height: 100%;
}

.header {
  padding: 10px 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
}
.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
}

.addressBook-text {
  text-align: left;
  font: normal normal bold 22px/25px Montserrat;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  color: #098df8;
  margin-left: 10px;
}

.addressBook-book {
  color: #3d4e5d;
}

* {
  box-sizing: border-box;
}
</style>