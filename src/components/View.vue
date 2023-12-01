<!-- eslint-disable vue/multi-word-component-names -->

<script>
export default {
  mounted() {
    const storedData = JSON.parse(localStorage.getItem("formDataList"));
    if (storedData) {
      this.contact = storedData.find((contact) => contact.id === this.$route.params.id);
    }

  },
  data() {
    return {
      contact: null
    }
  }

};
</script>




<template>
  <div class="view">
    <v-container>
      <div class="box">
        <div class="links d-flex">
          <router-link to="/">
            <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left" />
          </router-link>
          <p>contacts</p>
        </div>
        <div class="view">
            <v-container>
                <h1 class="view-title">View contact</h1>
            </v-container>
        </div>
          <div class="card">
              <v-list v-if="contact">
                <v-list-item>
                  <h1 class="title">Title</h1>
                  {{ contact.firstName }} {{ contact.lastName }}
                  </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                  <h1 class="title">Phone</h1>
                  {{ contact.phone }}
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                  <h1 class="title">Email</h1>
                  {{ contact.email }}
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item>
                  <h1 class="title">Address</h1>
                  {{ contact.address }}
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
          </div>
      </div>
    </v-container>
  </div>
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
.view-title{
    font-size: 20px;
    margin-left: 8px;
    color: #6161cd;
}
.title{
    font-size: 15px;
    font-weight: 500;
    color: #6161cd;
    margin-top: 8px;

    }
    p{
        color: black;
    font-size: 15px;
    margin-bottom: 8px;
    }
</style>
