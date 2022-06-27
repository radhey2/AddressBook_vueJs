<template>

  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
         <v-app-bar
      color="primary"
      dark
    >
     <div>
            <pre>
            {{JSON.stringify(formValues,null,2)}}
            </pre>
            </div>
      <h2>Person Address Form</h2>
      
      
        </v-app-bar>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="firstname"
            v-model="firstname"
            :rules="[() => !!firstname || 'This field is required']"
            :error-messages="errorMessages"
            label="First Name"
            required
          ></v-text-field>
          <v-text-field
            ref="lastname"
            v-model="lastname"
            :rules="[() => !!lastname || 'This field is required']"
            :error-messages="errorMessages"
            label="Last Name"
            required
          ></v-text-field>
         
          <v-text-field
          ref="Email"
            v-model="Email"
            label="E-mail"
          ></v-text-field>
        
          <v-text-field 
            ref="Address"
            v-model="Address"
            :rules="[
              () => !!Address || 'This field is required',
              () => !!Address &
               Address.length <= 25 || 'Address must be less than 25 characters',
              addressCheck
            ]"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            counter="25"
            required
          ></v-text-field>

           <v-autocomplete
            ref="state"
            v-model="state"
            :rules="[() => !!state || 'This field is required']"
            :items="states"
            label="State"
            placeholder="Select..."
            required
          ></v-autocomplete>

          <v-autocomplete 
            ref="city"
            v-model="city"
            :rules="[() => !!city || 'This field is required']"
            :items="cities"
            label="City"
            placeholder="Select..."
            required
          ></v-autocomplete>

          <v-text-field 
            ref="zipcode"
            v-model="zipcode"
            :rules="[() => !!zipcode || 'This field is required']"
            label="ZIP / Postal Code"
            required
            placeholder="79938"
          ></v-text-field>

          <v-text-field 
            ref="phoneNo"
            v-model="phoneNo"
            :rules="[() => !!phoneNo || 'This field is required']"
            label="Phone Number"
            required
            placeholder="79938"
          ></v-text-field>
         
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <router-link to="/"><v-btn text>
            Cancel
          </v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import service from '../Service.js'
  export default {
    name:'form',
    data: () => ({
      states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Asam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujrat', 'Haryana', 'HP', 'Jarkhand', 'Karnataka', 'kerela', 'MP', 'Maharastrta', 'Manipur', 'Meghalay', 'Mizoram', 'Nagaland', 'Odisha', 'Panjab', 'Rajasthan', 'Sikkiam', 'TamilNadu', 'Tripura','Telengana','UK','UP','WB'],
      cities: ['Ajmer','Barmer','Baran','Bansawada','Bikaner','Bhilwara','Bundi','Churu','Chittorgarh','Dosa','Dungarpur','Dholpur','Ganganagar','Jaipur','Jaisalmer','Jodhpur','Jalawar','Jalor','Junjunnu','Hunumangarh','Kota','Karoli','Nagaor','Pali','Rajsamand','Tonk','Sirohi','Sikar','Pratapgarh','Sawai-Madhopur','Udaipur'],
      errorMessages: '',
      firstname: null,
      lastname: null,
      Address: null,
      Email:null,
      city: null,
      phoneNo:null,
      state: null,
      zipcode: null,
      formHasErrors: false,
    }),

    computed: {
      form () {
        return {
          firstname: this.firstname,
          lastname:this.lastname,
          Address: this.Address,
          city: this.city,
          state: this.state,
          zipcode: this.zipcode,
          Email: this.Email,
          phoneNo:this.phoneNo
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.Address && !this.firstname && !this.lastname 
          ? `Hey! I'm required`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      
        submit(event){
            event.preventDefault();
            console.log(this.form);
            const data = this.form;
            service.addContact(data).then((response) => {
                console.log(response)
                console.log(response.data.data)
                this.addContact = response.data.data
                 alert("Contact Added Successfully",response)
            })
            .catch(error => {
                console.log(error);
                 alert("Contact is not Addedd")
            })
    },
  }
  }
</script>