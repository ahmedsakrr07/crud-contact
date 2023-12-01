<!-- eslint-disable vue/multi-word-component-names -->

<script>
export default {
  data() {
    return {
      contacts: [],
      searchQuery: '',
    };
  },
  mounted() {
    const storedData = JSON.parse(localStorage.getItem("formDataList"));

    if (storedData) {
      this.contacts = storedData;
    }
  },

  methods: {
    deleteContact(id) {
      const index = this.contacts.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        this.contacts.splice(index, 1);
        localStorage.setItem("formDataList", JSON.stringify(this.contacts));
      }
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) => {
        const fullName = `${contact.firstName} ${contact.lastName}`;
        return fullName.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <div class="box">
        <div class="link">
          <router-link to="/Add">
            <font-awesome-icon class="icon" icon="fa-solid fa-plus" />
          </router-link>
        </div>
        <div class="form">
          <h1>contacts</h1>
          <v-col cols="12" md="12">
            <v-text-field
              :counter="10"
              label="search"
              required
              hide-details
              variant="outlined"
              class="input"
              v-model="searchQuery"
            ></v-text-field>
            <div class="card mt-5">
              <v-card>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filteredContacts" :key="item.id">
                      <td style="text-align: left , font-size: 20px">
                        <router-link :to="`/View/${item.id}`">
                          {{ item.firstName }} {{ item.lastName }} 
                        </router-link>
                      </td>
                      <td>
                        <router-link :to="`/View/${item.id}`">
                        <font-awesome-icon
                          class="view"
                          icon="fa-solid fa-eye"
                        />
                        </router-link>

                        
                        <router-link :to="`/Edit/${item.id}`">
                          <font-awesome-icon
                            class="edit"
                            icon="fa-solid fa-pen-to-square"
                          />
                        </router-link>
                        <font-awesome-icon
                          class="delete"
                          icon="fa-solid fa-trash"
                          @click="deleteContact(item.id)"
                        />
                        
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
            </div>
          </v-col>
        </div>
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
.link {
  padding: 20px;
  margin-left: auto;
  display: table;
}

.v-input--density-default {
  --v-input-control-height: 49px;
  --v-input-padding-top: 0px !important;
}
.form h1 {
  font-size: 20px;
  margin-left: 12px;
}
.view {
  font-size: 14px;
  color: #6161cd;
  cursor: pointer;
  margin-right: 7px;
}
.edit {
  font-size: 14px;
  color: #6161cd;
  cursor: pointer;
  display: inline-block;
  margin-right: 3px;
}
.delete {
  font-size: 14px;
  margin-left: 5px;
  color: red;
  cursor: pointer;
  margin-top: 4px;
}
.card-title {
  font-size: 15px;
  font-weight: 600;
}
.card-content {
  display: flex;
}
a {
  background-color: transparent;
  text-decoration: none;
  font-size: 17px;
}
</style>
