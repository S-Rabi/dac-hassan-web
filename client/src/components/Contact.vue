<script setup>
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { onMounted, ref } from "vue";
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
      // "http://localhost:3001/sendEmail",
      "https://dac-last-server.vercel.app/sendEmail",
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

onMounted(() => {
  const map = L.map("map").setView([-37.98707, 145.20252], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  L.marker([-37.98707, 145.20252])
    .addTo(map)
    .bindPopup("Hello, this is a marker!");
});
</script>
<template>
  <div class="c-container">
    <div class="c-text">
      <img src="../assets/bgc3.jpg" alt="" class="c-img" />
      <div class="title">
        <h1>Contact Us</h1>
        <h3>
          Get in touch with <br />
          <strong> Dandenong automotive centre </strong>
        </h3>
      </div>
    </div>
    <div class="c-us">
      <div class="message" id="email">
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
      <div class="map" id="map"></div>
    </div>
  </div>
</template>

<style scoped>
.c-text {
  width: 100%;
  height: 40vh;
  position: relative;
}

.title {
  transform: translate(10px, 50%);
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
}
.c-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.c-us {
  height: 50vh;
  border: none;
  display: flex;
  width: 95%;
  max-width: 1280px;
  margin: 0 auto;
  transform: translate(0, -20px);
  z-index: 9;
}
.map {
  width: 45%;
  height: 100%;
}
.message {
  width: 55%;
  height: 100%;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #153447;
  gap: 10px;
  padding: 30px 20px;
  color: white;
}
input {
  padding: 8px;
}
textarea:focus,
.subject:focus {
  outline: 1px solid #84bd3a;
  border-radius: 2px;
}
textarea {
  padding: 5px;
  height: 150px;
}
button {
  padding: 10px;
  background: #84bd3a;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  width: 120px;
  font-weight: 500;
  outline: 1px solid white;
}

@media only screen and (max-width: 768px) {
  .c-us {
    display: flex;
    flex-direction: column;
    height: 100%;
    outline: none;
  }
  .message {
    width: 95%;
    height: fit-content;
    margin: 0 auto;
  }
  .map {
    width: 95%;
    height: 29vh;
    margin: 0 auto;
  }
  button {
    width: 99%;
    margin: 0 auto;
    padding: 11px;
  }
}
</style>
