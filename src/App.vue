<script setup lang="ts">
import { ref } from 'vue';
import ContactForm from './components/ContactForm.vue';

const formDialog = ref();
</script>

<template>
  <v-app class="bg-transparent">
    <v-main>
      <div
        class="d-flex flex-column align-center justify-space-between h-screen py-16 home"
      >
        <h1>
          <img
            src="@/assets/bossa-nova-solutions.svg"
            alt="Bossa Nova Solutions"
            class="logo"
          />
        </h1>

        <div class="text-center">
          <h2 class="text-zinc px-14 px-md-0">
            Our website is under construction, but you can
            <br class="d-none d-md-inline" />
            request a contact and we&apos;ll call you back in no time.
          </h2>

          <v-btn
            class="rounded-xl text-none mt-8 mx-auto"
            size="x-large"
            color="primary"
            variant="flat"
            :ripple="false"
            @click="formDialog.open()"
          >
            Request a contact
          </v-btn>
        </div>

        <div class="slider">
          <Vue3Marquee id="slider">
            <div class="slide text-zinc">
              <span>DEVELOP</span>
              <span class="weird">M</span>
              <span>ENT | UI/</span>
              <span class="weird">U</span>
              <span>X | </span>
              <span class="weird">Q</span>
              <span>.A. | DIAGNOS</span>
              <span class="weird">T</span>
              <span>ICS | CONCE</span>
              <span class="weird">P</span>
              <span>TS | D</span>
              <span class="weird">E</span>
              <span>MOS | PRODU</span>
              <span class="weird">C</span>
              <span>T DES</span>
              <span class="weird">I</span>
              <span>GN</span>
            </div>
          </Vue3Marquee>
        </div>
      </div>

      <video autoplay loop muted class="bg-video">
        <source
          src="@/assets/videos/fundo_site_construcao.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <ContactForm ref="formDialog" />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.bg-video {
  position: absolute;
  top: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
  height: 100vh;
  transform: translateX(20%);
  opacity: 0.99;

  @media (min-width: 960px) or ((max-height: 450px) and (max-width: 959px)) {
    width: 100vw;
    transform: none;
  }
}

.home {
  @media (max-height: 450px) {
    padding: 16px 0 !important;
  }
}

.logo {
  width: 248px;
  height: 73px;
}

h2 {
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2rem;
  font-family: UNBOUNDED;
}

.v-btn {
  font-family: UNBOUNDED;
  font-weight: normal;
  font-size: 1.25rem;
}

.slider {
  .vue3-marquee.horizontal {
    overflow: hidden;
  }
  .slide {
    font-family: HELVETICA;
    font-size: 3rem;
    margin-right: 230px;

    @media (min-width: 960px) {
      font-size: 6rem;
    }

    span.weird {
      font-family: ESTRAGON;
    }
  }
}
</style>
