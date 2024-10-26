<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ContactForm from './components/ContactForm.vue';

const formDialog = ref();

const removeControls = () => {
  video.value.controls = false;
};
const video = ref();

onMounted(() => {
  removeControls();
  video.value.play();
  video.value.addEventListener('play', removeControls);
  video.value.addEventListener('pause', removeControls);
});
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

        <div class="px-6 px-md-0">
          <h2>
            We&apos;ve been busy working to
            <br class="d-none d-md-inline" />
            create incredible solutions for
            <br class="d-none d-md-inline" />
            our clients!
          </h2>

          <p class="mt-6">
            Our own website is on the way, so stay tuned for
            <br class="d-none d-md-inline" />
            something just as extraordinary.
          </p>

          <p class="mt-6">In the meantime, we&apos;d love to hear from you!</p>

          <p class="small mt-6">
            If you have a project in mind or just want to connect, drop us your
            contact info.
          </p>

          <v-btn
            class="rounded-xl text-none mt-8"
            size="x-large"
            color="primary"
            variant="flat"
            :ripple="false"
            @click="formDialog.open()"
          >
            Connect with us
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

      <video
        autoplay
        loop
        muted
        playsinline
        class="bg-video"
        id="video"
        preload="auto"
        ref="video"
      >
        <source
          src="@/assets/videos/fundo_site_construcao.mp4"
          type="video/mp4"
        />
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

  @media (max-height: 667px) {
    height: 105vh;
  }
}

.home {
  @media (max-height: 764px) {
    padding: 16px 0 !important;
  }
}

.logo {
  width: 248px;
  height: 73px;
}

h2 {
  color: rgb(var(--v-theme-primary)) !important;
  font-weight: normal;
  font-size: 1.65rem;
  line-height: 2.5rem;
  font-family: UNBOUNDED;
  text-align: left;

  @media (min-width: 960px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
}

p {
  font-size: 1.13rem;
  line-height: 1.69rem;
  color: #646465;
  font-family: UNBOUNDED;
  text-align: left;

  @media (min-width: 960px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

p.small {
  color: rgb(var(--v-theme-primary)) !important;
  font-size: 0.94rem;
  line-height: 1.4rem;

  @media (min-width: 960px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

.v-btn {
  font-family: UNBOUNDED;
  font-weight: normal;
  font-size: 1.25rem;
}

.slider {
  @media (max-height: 764px) {
    display: none;
  }
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
