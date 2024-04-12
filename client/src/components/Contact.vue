<script setup>
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { onMounted, ref } from "vue";
import axios from "axios";
const emailFormRef = ref(null);

const emailData = ref({
  to: "dac.au@yahoo.com",
  subject: "",
  text: "",
  name: "",
  phone: "",
  attachments: [],
});

const selectedFiles = ref([]);
const clearInputs = () => {
  emailData.value.text = "";

  const formInputs = emailFormRef.value.querySelectorAll("input:not(#message)");
  formInputs.forEach((input) => {
    input.value = "";
  });
};

const sendEmail = async () => {
  console.log("Sending email with data:", emailData.value);

  if (selectedFiles.value.length > 0) {
    await processFiles();
  }

  try {
    const emailBody = `
      Phone: ${emailData.value.phone}\n
      Vehicle Details: ${emailData.value.name}\n
      Message: ${emailData.value.text}
    `;

    emailData.value.text = emailBody;

    performEmailSend(emailData.value);
  } catch (error) {
    console.error("Error sending email:", error);
  }

  clearInputs();
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
      "https://dac-hassan-web-server.vercel.app/sendEmail",
      emailData.value
    );
    console.log("response data =>", response.data);
    emailData.value.subject = "";
    emailData.value.text = "";
    emailData.value.phone = "";
    emailData.value.name = "";
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
    .bindPopup("Dandenong Automotive Centre");
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
          <h2>Get a Free Quote</h2>
          <label for="subject">Name:</label>
          <input
            type="text"
            id="subject"
            v-model="emailData.subject"
            required
            class="subject"
          />
          <label for="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            v-model="emailData.phone"
            class="subject"
            required
          />
          <label for="name">Vehicl Details:</label>
          <input
            type="text"
            id="name"
            v-model="emailData.name"
            class="subject"
            required
          />
          <label for="message"> Any further car needs?</label>
          <textarea
            id="message"
            v-model="emailData.text"
            placeholder="message"
            required
          ></textarea>
          <label for="file">Upload photos:</label>
          <input type="file" id="file" @change="handleFileChange" multiple />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div class="map" id="map"></div>
    </div>
  </div>
</template>

<style scoped>
.c-text {
  width: 100%;
  height: 35vh;
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
  height: 520px;
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
  gap: 5px;
  color: white;
  overflow: hidden;
}
input {
  padding: 6px;
}
label {
  font-size: 14px;
  margin-top: 4px;
}
textarea:focus,
.subject:focus {
  outline: 1px solid #84bd3a;
  border-radius: 2px;
}
textarea {
  padding: 5px;
  height: 100px;
}
button {
  padding: 9px;
  background: #84bd3a;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  width: 100px;
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
