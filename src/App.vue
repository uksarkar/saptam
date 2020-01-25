<template>
  <div id="app">
    <AppHeader />
    <main class="container-fluid">
      <div class="row">
        <LeftSideber />
        <Container />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import "./assets/custom_fonts.css";
@import "./sass/theme";
@import "./assets/themify-icons.css";
@import "./assets/animate.css";
</style>

<script>
import AppHeader from "./components/AppHeader";
import LeftSideber from "@/components/LeftSidebar";
import Container from "@/views/Container";
export default {
  name: "Saptam",
  components: { AppHeader, LeftSideber, Container }
};
</script>
