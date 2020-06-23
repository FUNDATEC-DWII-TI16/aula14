<template>
  <div>
    <button @click="primeiroElemento = !primeiroElemento">
      Esconder/Mostrar
    </button>
    <h3 class="elemento" v-if="primeiroElemento">Primeiro Elemento</h3>
    <hr />
    <button @click="segundoElemento = !segundoElemento">
      Esconder/Mostrar
    </button>
    <fade-transition>
      <h3 class="elemento" v-if="segundoElemento">Segundo Elemento</h3>
    </fade-transition>
    <hr />
    <button @click="terceiroElemento = !terceiroElemento">
      Esconder/Mostrar
    </button>
    <collapse-transition>
      <h3 class="elemento" v-if="terceiroElemento">Terceiro Elemento</h3>
    </collapse-transition>
    <hr />
    <button @click="quartoElemento = !quartoElemento">
      Esconder/Mostrar
    </button>
    <zoom-x-transition>
      <h3 class="elemento" v-if="quartoElemento">Quarto Elemento</h3>
    </zoom-x-transition>
    <hr />
    <button @click="quintoElemento = !quintoElemento">
      Esconder/Mostrar
    </button>
    <zoom-y-transition>
      <h3 class="elemento" v-if="quintoElemento">Quinto Elemento</h3>
    </zoom-y-transition>
    <hr />
    <button @click="sextoElemento = !sextoElemento">
      Esconder/Mostrar
    </button>
    <scale-transition>
      <h3 class="elemento" v-if="sextoElemento">Sexto Elemento</h3>
    </scale-transition>
  </div>
</template>

<script>
import {
  FadeTransition,
  CollapseTransition,
  ZoomXTransition,
  ZoomYTransition,
  ScaleTransition,
} from "vue2-transitions";

export default {
  components: {
    FadeTransition,
    CollapseTransition,
    ZoomXTransition,
    ZoomYTransition,
    ScaleTransition,
  },
  data() {
    return {
      primeiroElemento: true,
      segundoElemento: true,
      terceiroElemento: true,
      quartoElemento: true,
      quintoElemento: true,
      sextoElemento: true,
    };
  },
};
</script>

<style>
.elemento {
  height: 150px;
  width: 300px;
  background-color: cadetblue;
}
</style>
