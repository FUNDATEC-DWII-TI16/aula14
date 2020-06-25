<template>
  <div class="home">
    <h1>Vue CSS</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <card
            image="https://img-a.udemycdn.com/course/750x422/1917274_4784.jpg"
            title="VueJS"
            text="A progressive and reactive awesome front-end framework"
            button-text="Learn"
            @click="vueClick"
          ></card>
        </div>
        <div class="col-3">
          <card
            image="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/Iq6QSY8vRs6XAaOJ10UP"
            title="React"
            text="Facebook main front-end tecnology"
            button-text="Learn"
            @click="reactClick"
          ></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  components: {
    Card,
  },
  name: "Home",
  methods: {
    vueClick() {
      alert("learn vuejs!");
    },
    reactClick() {
      alert("learn react!");
    },
  },
};
</script>
