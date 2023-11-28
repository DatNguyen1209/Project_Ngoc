<script setup>
import axios from "axios";
import { ref, defineProps } from "vue";

const props = defineProps({
  isOpen: Boolean,
  data: Object,
});

const emit = defineEmits(["add", "close"]);
const code = ref("");
const name = ref("");
const prioritize = ref("");
const deffect = ref("");
const address = ref("");
const phone = ref("");

const handleAdd = async () => {
  try {
    const dataAdd = {
      code: code.value,
      name: name.value,
      prioritize: prioritize.value,
      deffect: deffect.value,
      address: address.value,
      phone: phone.value,
    };
    const res = await axios.post(
      "https://localhost:44321/api/Student/Create",
      dataAdd
    );
    emit("add");
  } catch (e) {
    console.error(e);
  }
};
const handleClose = () => {
  emit("close");
};
</script>

<template>
  <v-row>
    <v-dialog v-model="isOpen" width="auto">
      <v-card>
        <v-card-title>
          <span>Thêm mới học sinh</span>
        </v-card-title>
      </v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field label="Mã học sinh" v-model="code"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Tên học sinh" v-model="name"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field label="Mã học sinh" v-model="prioritize"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Tên học sinh" v-model="deffect"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field label="Mã học sinh" v-model="address"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Tên học sinh" v-model="phone"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer>
            <v-btn>Đóng</v-btn>
            <v-btn>Thêm</v-btn>
        </v-spacer>
      </v-card-actions>
    </v-dialog>
  </v-row>
</template>