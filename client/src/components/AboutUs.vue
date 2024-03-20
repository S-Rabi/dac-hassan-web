<script setup></script>

<template>
  <div class="about-us">
    <div class="about-top">
      <div class="about-text">
        <h2 class="a-title">About Dandenong automotive centre</h2>
        <p>Who we are, what our skills and how do we work?</p>
        <p>
          Fast Panels was established in 2015 with the goal of providing quality
          and convenient body work repairs at an affordable price. We started
          out with just one small ute servicing the western suburbs and have now
          grown to a fleet of vans servicing all of Melbourne and beyond. We are
          a family owned and run business and treat each customer and employee
          like family too. We look after everyone we come into contact as best
          as we can. We are constantly upgrading our equipment and materials to
          provide the best possible service to our valued customers.
        </p>
      </div>
      <img src="../assets/ser.jpg" alt="" class="about-img" />
    </div>
    <div class="about-bottom">
      <img src="../assets/serv.jpeg" alt="" class="about-img" />
      <div class="about-text">
        <h2 class="a-title">Dandenong automotive centre</h2>
        <p>
          This allows us to repair and service many different types of makes and
          models. For your convenience, we offer to drop off and pick-up service
          within our local area. We service fleets of all sizes. We can
          personalize a package to fit your needs, which saves you time and
          money. If you choose to wait for your car at our shop, feel free to
          relax in our comfortable waiting area that includes a TV as well as
          tea and coffee facilities.
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
          <h2>30+</h2>
          <p>Years of Experience</p>
        </div>
        <div class="r-text">
          <h2>9000 +</h2>
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
