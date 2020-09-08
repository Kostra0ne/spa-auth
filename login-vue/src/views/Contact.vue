<template>
  <form @submit.prevent="sendMessage" class="form">
    <h1 class="title">Contact</h1>
    <label for="full_name" class="label">full name</label>
    <input id="full_name" type="text" class="input" v-model="full_name" />
    <label for="from" class="label">email</label>
    <input type="from" class="input" v-model="from" />
    <label for="subject" class="label">subject</label>
    <input id="subject" type="text" class="input" v-model="subject" />
    <label for="message" class="label">message</label>
    <textarea
      id="message"
      cols="30" rows="10"
      class="input"
      v-model="message">
    </textarea>
    <button class="btn">ok</button>
  </form>
</template>

<script>
import { apiHandler } from "./../api/handler";
const handler = apiHandler();

export default {
  name: "Contact",
  data() {
    return {
      subject: "test email",
      full_name: "jane doe",
      from: "j.doe@foo.bar",
      message: "hello how are you ?"
    };
  },
  methods: {
    async sendMessage() {
      await handler.post("/api/contact", {
        subject: this.message,
        full_name: this.full_name,
        from: this.from,
        message: this.message
      });
    }
  }
};
</script>

<style scoped>
@import url("./../styles/mod.form.css");
</style>
