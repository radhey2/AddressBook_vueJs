<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Register
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field v-model="formData.firstname"
                  label="first name*"
                  required
                ></v-text-field>
              </v-col>
             
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field v-model="formData.lastname"
                  label="last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.email"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="formData.password"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field v-model="formData.phone"
                  label="phone*"
                  required
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="getEmployee" 
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import loginService from '../loginService.js'
  export default {
    name: "loginform",
    data () {
      
       return  {
        dialog: false,
      Contacts: [],

      formData:{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: ""

      }
      
    }
    },
   

     methods: {
    getEmployee() {
      loginService.addContact(this.formData).then((response) => {
        console.log(response.data.data);
        this.Contacts = response.data.data;
      });
      this.dialog = false
    },
     }
  }
</script>