<template>
  <div class="facilities">
    <v-container class="container">
      <v-row>
        <v-col cols="12">
          <!-- <h1>employee list</h1> -->
          <v-card>
            <v-card-title>
              DANH SÁCH CƠ SỞ VẬT CHẤT
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="header"
              :items="facilities"
              :items-per-page="10"
              class="elevation-1 text-center"
              item-key="id"
              show-select
              :search="search"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
              }"
            >
              <template v-slot:[`item.actions`]="">
                <v-btn class="ma-2" :class="disable_action" color="primary" dark>
                  Detail
                  <v-icon dark right> mdi-eye </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="orange darken-2" dark>
                  Update
                  <v-icon dark right> mdi-pencil </v-icon>
                </v-btn>
                <v-btn class="ma-2" color="red" dark>
                  Delete
                  <v-icon dark right> mdi-delete </v-icon>
                </v-btn>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary"> Reset </v-btn>
              </template>
              <!-- <template v-slot:top>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="mx-5"
              ></v-text-field> </template> -->
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      header: [
        {
          text: "ID",
          value: "id",
          align: "center",
        },
        {
          text: "Mã CSVC",
          value: "facilities_id",
          align: "center",
        },
        {
          text: "Tên CSVC",
          value: "title",
          align: "center",
        },
        {
          text: "Giá Tiền",
          value: "price",
          align: "center",
        },
        {
          text: "Số Lượng",
          value: "qty",
          align: "center",
        },
        {
          text: "Hình Ảnh",
          value: "image",
          align: "center",
        },
        {
          text: "Ngày Nhập",
          value: "innitiated_date",
          align: "center",
        },
        {
          text: "Nhân Viên Quản Lý",
          value: "email",
          align: "center",
        },
        {
          text: "ACTIONS",
          value: "actions",
          align: "center",
          sortable: false,
        },
      ],
      facilities: [],
      search: "",
      disable_action:false;
    };
  },
  async mounted() {
    const dataJson = JSON.parse(localStorage.getItem("user-info"));
    if (dataJson.role === "Nhân Viên") {
      const res = await axios.get(
        `http://localhost:3001/facilities?email=${dataJson.email}`
      );
      if (res.status === 200) {
        this.facilities = res.data;
        console.log(this.facilities);
      }
    } else {
      const res = await axios.get(`http://localhost:3001/facilities`);
      if (res.status === 200) {
        this.facilities = res.data;
        console.log(this.facilities);
      }
    }
  },
};
</script>
<style scoped>
.elevation-1 {
  padding-top: 20px !important;
}
h1 {
  text-transform: uppercase;
  text-align: center;
  margin: -10px 0 30px;
}
</style>