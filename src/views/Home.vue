<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <diy-helloWorld msg="Welcome to Your Vue.js App"></diy-helloWorld>
    <!-- <diy-carsousel :items="items"></diy-carsousel> -->
    <diyCarsouselnoHeight :items="items"></diyCarsouselnoHeight>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          text: "No.1",
          bg: "red"
        },
        {
          text: "No.2",
          bg: "blue"
        },
        {
          text: "No.3",
          bg: "green"
        },
        {
          text: "No.4",
          bg: "red"
        },
        {
          text: "No.5",
          bg: "blue"
        },
        {
          text: "No.6",
          bg: "green"
        }
      ]
    };
  }
};
</script>
