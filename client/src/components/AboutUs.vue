<script setup></script>

<template>
  <div class="about-us">
    <div class="about-top">
      <div class="about-text">
        <h2 class="a-title">About Dandenong automotive centre</h2>
        <p>Who we are, what our skills and how do we work?</p>
        <p>
          DAC Automotive Centre, originally established in 2001, is dedicated to
          offering top-quality and convenient bodywork repairs at competitive
          prices. Originating with just one small ute servicing the western
          suburbs, we have since established ourselves as a premier destination
          for automotive services in Melbourne and beyond. As a family-owned and
          operated business, we treat every customer and employee like family,
          prioritizing their care and satisfaction. We strive to provide the
          best service possible by continually upgrading our equipment and
          materials to meet the needs of our valued customers.
        </p>
      </div>
      <img src="../assets/ser.jpg" alt="" class="about-img" />
    </div>
    <div class="about-bottom">
      <img src="../assets/serv.jpeg" alt="" class="about-img" />
      <div class="about-text">
        <h2 class="a-title">Dandenong automotive centre</h2>
        <p>
          This enables us to expertly repair and service a wide array of makes
          and models. To enhance your convenience, we extend a drop-off and
          pick-up service within our local vicinity. Catering to fleets of all
          scales, we're adept at tailoring packages to suit your precise
          requirements, ensuring optimal time and cost savings. Should you opt
          to wait for your vehicle at our facility, indulge in relaxation within
          our inviting waiting area, complete with a television and
          complimentary tea and coffee amenities.
        </p>
      </div>
    </div>
    <div class="review">
      <div class="review-text">
        <h3>We are the profesionals when it comes to mobile repairs</h3>
        <p>See our technician skills, counters, and numbers</p>
      </div>
      <div class="r-cont">
        <div class="r-text">
          <h2>20+</h2>
          <p>Years of Experience</p>
        </div>
        <div class="r-text">
          <h2>5000 +</h2>
          <p>Repaired Successfully</p>
        </div>
        <div class="r-text">
          <h2>99%</h2>
          <p>Satisfied Customers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us {
  width: 100%;
  height: 120%;
  /* background: rgb(240, 237, 235); */
  /* background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 21%,
    rgba(240, 237, 235, 1) 70%
  ); */
}

.about-top,
.about-bottom {
  margin: 0 auto;
  max-width: 1280px;
  height: fit-content;
  max-height: 600px;
  display: flex;
  gap: 0px;
}
.about-top {
  margin-top: 20px;
}
.about-text {
  width: 50%;
  padding: 5px 15px;
  gap: 10px;
}
.a-title {
  margin: 10px 0;
}

.about-img {
  width: 50%;
  height: 400px;
}

.review {
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  height: 30vh;
  background: #153447;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  transform: translate(0, 20px);
}
.r-cont {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 10px;
  color: #0d2a3c;
}
.r-text {
  flex-grow: 1;
  flex-basis: 300px;
  background: white;
  padding: 10px;
}
@media only screen and (max-width: 950px) {
  .about-text {
    width: 100%;
    height: fit-content;
    font-size: 14px;
  }
}
@media only screen and (max-width: 768px) {
  .about-top {
    flex-direction: column;
    max-height: 100%;
    width: 90%;
  }
  .about-bottom {
    flex-direction: column-reverse;
    max-height: 100%;
    width: 90%;
  }
  .about-text,
  .about-img {
    width: 100%;
    height: fit-content;
  }
  .review {
    height: fit-content;
    padding: 15px 0px;
    gap: 15px;
  }
  /* .c-info {
    gap: 10px;
    padding: 28px 15px;
  } */
}
</style>
