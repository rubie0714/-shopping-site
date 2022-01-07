<!-- Please remove this file from your project -->
<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <app-links></app-links>
      </div>
    </nav>
  </div>
</template>

<script>
import AppLinks from "~/components/AppLinks";

export default {
  name: "Header",
  components: { AppLinks },
  data() {
    return {
      showNav: false,
    };
  },

  methods: {},
};
</script>
<style>
</style>
