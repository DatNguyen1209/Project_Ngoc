<template>
  <v-container class="w-75">
    <v-btn class="color-success  mb-3" @click="openDialog()">Thêm mới</v-btn>
    <div class="align-center text-center">
      <v-table height="300px">
        <thead>
          <tr>
            <th class="text-left">Mã học sinh</th>
            <th class="text-left">Tên học sinh</th>
            <th class="text-left">Ưu điểm</th>
            <th class="text-left">Nhược điểm</th>
            <th class="text-left">Điểm rèn luyện</th>
            <th class="text-left">Địa chỉ</th>
            <th class="text-left">Điện thoại</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.prioritize }}</td>
            <td>{{ item.deffect }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <v-btn icon="mdi-eye" size="small"></v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <student-add
    :isOpen = "isOpen"
    @close = "handleClose"
    @add = "handleAdd"
    :data = "dataAdd"
    />
  </v-container>
  
</template>

<script setup>
//
import router from "@/router";
import axios from "axios";
import { ref, onMounted } from "vue";
const desserts = ref([]);
const isOpen = ref(false);
const openDialog = (data) =>{
  isOpen.value = true;
}
onMounted(() => {
  getData();
});
const getData = async () => {
  try {
    const res = await axios.get(`https://localhost:44321/api/Student/GetAll`);
    desserts.value = res.data;
  } catch (e) {
    console.error(e);
  }
};
</script>

<style>
.color-success {
  background-color: #80cbc4;
}
</style>
