<!-- eslint-disable vue/multi-word-component-names -->

<script>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'; 

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phone = ref('');
    const address = ref('');

    let formDataList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const submit = (e) => {
      e.preventDefault();

      const id = uuidv4();

      const formData = {
        id,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
      };

      formDataList.push(formData);

      localStorage.setItem('formDataList', JSON.stringify(formDataList));

      console.log(formData);

      firstName.value = '';
      lastName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      window.location.pathname = '/';

    };

    return {
      firstName,
      lastName,
      email,
      phone,
      address,
      submit,
    };
  },
};
</script>



<template>
  <v-container>
    <v-row>
      <div class="box">
        <div class="links d-flex">
          <router-link to="/">
            <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left" />
          </router-link>
          <p>contacts</p>
        </div>
        <div class="forms">
          <h1>Add contact</h1>
        </div>
          <form @submit="submit" >
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    :counter="10"
                    label="First name"
                    required
                    hide-details
                    variant="outlined"
                    v-model="firstName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    :counter="10"
                    label="Last name"
                    required
                    hide-details
                    variant="outlined"
                    v-model="lastName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    :counter="10"
                    label="phone"
                    required
                    hide-details
                    variant="outlined"
                    v-model="phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    :counter="10"
                    label="email"
                    required
                    hide-details
                    variant="outlined"
                    v-model="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    :counter="10"
                    label="address"
                    required
                    hide-details
                    variant="outlined"
                    v-model="address"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn
                class="text-none text-capitalize white--text"
                style="margin-left: 33%; margin-top: 50px;" 
                color="blue-darken-4"
                rounded="2"
                type="submit"
              >
                Add contact
              </v-btn>
            </v-container>
          </form>
        </div>
    </v-row>
  </v-container>
</template>


<style scoped>
.box {
  background-color: #fff;
  border-radius: 2px;
  width: 40%;
  height: 68vh;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: auto;
  margin-top: 50px !important;
}
.icon {
  font-size: 18px;
  padding: 26px;
  display: block;
  margin-right: auto;
  color: #6161cd;
  cursor: pointer;
}
.links p {
  font-size: 15px;
  margin-top: 23px;
  margin-left: -22px;
  color: #6161cd;
  font-weight: 500;
}
.forms h1 {
  font-size: 20px;
    margin-left: 20px;
}
</style>
