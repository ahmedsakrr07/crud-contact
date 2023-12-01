<!-- eslint-disable vue/multi-word-component-names -->

<script>
export default {
  data() {
    return {
      contact: null 
    };
  },
  mounted() {
    const storedData = JSON.parse(localStorage.getItem("formDataList"));
    if (storedData) {
      this.contact = storedData.find(contact => contact.id === this.$route.params.id);
    }
  },
  methods: {
    updateContact() {
  let storedData = JSON.parse(localStorage.getItem("formDataList")) || [];

  if (this.contact) {
    const existingContactIndex = storedData.findIndex(contact => contact.id === this.contact.id);

    if (existingContactIndex !== -1) {
      storedData[existingContactIndex] = this.contact;
    } else {
      storedData.push(this.contact);
    }

    localStorage.setItem("formDataList", JSON.stringify(storedData));
 
    window.location.pathname = '/';

  }
}


  }
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
            <h1>Edit contact</h1>
          </div>
            <form v-if="contact" @submit.prevent="updateContact">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      :counter="10"
                      label="First name"
                      required
                      hide-details
                      variant="outlined"
                      v-model="contact.firstName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      :counter="10"
                      label="Last name"
                      required
                      hide-details
                      variant="outlined"
                      v-model="contact.lastName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      :counter="10"
                      label="phone"
                      required
                      hide-details
                      variant="outlined"
                      v-model="contact.phone"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      :counter="10"
                      label="email"
                      required
                      hide-details
                      variant="outlined"
                      v-model="contact.email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      :counter="10"
                      label="address"
                      required
                      hide-details
                      variant="outlined"
                      v-model="contact.address"
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
                  Update contact
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