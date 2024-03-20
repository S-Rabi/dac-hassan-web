<template>
  <div class="container">
    <form ref="emailFormRef" @submit.prevent="sendEmail" class="form">
      <label for="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        v-model="emailData.subject"
        required
        class="subject"
      />
      <label for="message">Message:</label>
      <textarea id="message" v-model="emailData.text" required></textarea>
      <label for="file">Choose File:</label>
      <input type="file" id="file" @change="handleFileChange" multiple />
      <button type="submit">Send Email</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const emailFormRef = ref(null);

const emailData = ref({
  to: "rabi.sanaye@yahoo.com",
  subject: "",
  text: "",
  attachments: [],
});

const selectedFiles = ref([]);

const sendEmail = async () => {
  if (selectedFiles.value.length > 0) {
    await processFiles();
  }

  performEmailSend();
  emailFormRef.value.reset();
};

const processFiles = async () => {
  const filePromises = selectedFiles.value.map((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Content = reader.result.split(",")[1];
        emailData.value.attachments.push({
          filename: file.name,
          content: base64Content,
        });
        resolve();
      };
      reader.readAsDataURL(file);
    });
  });

  await Promise.all(filePromises);
};

const performEmailSend = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/sendEmail",
      emailData.value
    );
    console.log("response data =>", response.data);
    emailData.value.subject = "";
    emailData.value.text = "";
    emailData.value.attachments = [];
  } catch (error) {
    console.error("Error sending email:", error.response.data);
  }
};

const handleFileChange = (event) => {
  selectedFiles.value = Array.from(event.target.files);
};
</script>

<style scoped>
/* Same as before... */
</style>
