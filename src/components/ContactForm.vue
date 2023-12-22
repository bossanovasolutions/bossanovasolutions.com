<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const isMobile = useDisplay().mobile;

interface User {
  name: string;
  email: string;
  phone: string;
  message?: string;
}
const user = ref<User>({
  name: '',
  email: '',
  phone: '',
  message: '',
});
const form = ref();
const loading = ref<boolean>();
const show = ref<boolean>(false);
const error = ref<boolean>(false);
const success = ref<boolean>(false);

const open = (): void => {
  show.value = true;
  success.value = false;
  error.value = false;
  user.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
};

const rules = {
  required: (value: string) => !!value || 'Field is required',
  email: (value: string) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
    'Email invalid',
};

const sendContact = async () => {
  loading.value = true;

  try {
    await emailjs.send(
      'service_rhxy5ff',
      'template_fgqgjkl',
      user.value,
      '0ZnsC442gsB_zxMJa'
    );
    success.value = true;
  } catch (err) {
    error.value = true;
  }

  loading.value = false;
};

defineExpose({ open });
</script>

<template>
  <v-dialog v-model="show" :scrim="false" :fullscreen="isMobile">
    <v-card class="bg-primary pa-4" :class="{ short: success }">
      <v-snackbar v-model="error" color="error">
        Sorry but we couldn't send your message.<br />
        Please try again later.

        <template v-slot:actions>
          <v-btn color="white" variant="text" @click="error = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-card-title v-show="isMobile">
        <div class="d-flex justify-space-between mb-8">
          <img
            src="@/assets/bossa-nova-solutions-white.png"
            alt="Bossa Nova Solutions"
            class="logo flex-grow-0"
          />

          <v-btn
            icon="mdi-close"
            variant="text"
            :ripple="false"
            class="flex-grow-0"
            color="white"
            @click="show = false"
          />
        </div>
      </v-card-title>

      <v-fade-transition leave-absolute mode="in-out">
        <v-card-text
          class="pa-0 d-flex align-center justify-center"
          v-if="success"
        >
          <div class="text-h4 text-center">
            Message sent.<br />
            We'll contact you soon.
          </div>
        </v-card-text>
      </v-fade-transition>

      <v-fade-transition leave-absolute mode="in-out">
        <v-card-text
          class="pa-0 d-flex align-center justify-center"
          v-if="!success"
        >
          <v-form @submit.prevent="sendContact" ref="form">
            <h3 class="text-body-1">
              Do you need Coding or Product Design services?<br />
              Then fill the form below and we will get in touch soon.
            </h3>

            <v-text-field
              placeholder="Full Name"
              name="name"
              v-model="user.name"
              variant="solo"
              flat
              density="comfortable"
              class="mt-4"
              :rules="[rules.required]"
            />

            <v-text-field
              placeholder="E-mail Address"
              name="email"
              type="email"
              v-model="user.email"
              variant="solo"
              flat
              density="comfortable"
              :rules="[rules.required, rules.email]"
            />

            <v-text-field
              placeholder="(000) 000-0000"
              name="phone"
              v-model="user.phone"
              variant="solo"
              flat
              density="comfortable"
              :rules="[rules.required]"
              v-mask-number
            />

            <v-textarea
              placeholder="What can we help you with? (Optional)"
              name="message"
              v-model="user.message"
              variant="solo"
              flat
              no-resize
              rows="6"
              hide-details
            />

            <v-btn
              class="rounded-xl text-none mt-8 mx-auto text-primary submit"
              size="x-large"
              color="white"
              variant="flat"
              :ripple="false"
              type="submit"
              elevation="0"
              :disabled="form && !form.isValid"
              :loading="loading"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-fade-transition>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
* {
  font-family: HELVETICA;
}

.v-card {
  border-radius: 16px !important;
  transition: all ease-in-out 200ms;

  @media (min-width: 960px) {
    height: 578px;
    overflow: hidden !important;

    &.short {
      height: 112px;
    }
  }

  .v-btn.submit {
    display: block;
    width: 240px;
    margin: 0 auto;
  }
}
</style>
