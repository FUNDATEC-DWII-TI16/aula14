<template>
  <div class="card c-card">
    <img :src="image" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ text }}
      </p>
      <a href="#" class="btn btn-primary" @click="buttonClick">{{
        buttonText
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    buttonText: {
      type: String,
    },
  },
  methods: {
    buttonClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.c-card {
  width: 100%;
  height: 100%;
}

.card-img-top {
  width: 100%;
  height: 250px;
}
</style>
