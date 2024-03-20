<template>
  <a :href="whatsAppChat()" target="_blank">
    <img
      src="../assets/wa2.svg"
      alt="whatsapp-logo"
      style="cursor: pointer"
      class="wa"
    />
  </a>
</template>

<script>
export default {
  name: "WhatsAppIcon",
  setup() {
    const phoneNumber = "+61403117115";

    const whatsAppChat = () => {
      const whatsappLink = `https://wa.me/${phoneNumber}`;
      return whatsappLink;
    };

    return {
      whatsAppChat,
    };
  },
};
</script>

<style scoped>
.wa {
  width: 45px;
  position: fixed;
  right: 45px;
  bottom: 45px;
  z-index: 11;
  transition: all 0.2s ease-out;
}
.wa:hover {
  transform: scale(1.1);
}
@media only screen and (max-width: 580px) {
  .wa {
    width: 40px;
    right: 30px;
  }
}
</style>
