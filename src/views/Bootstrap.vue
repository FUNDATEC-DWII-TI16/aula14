<template>
  <div class="container-fluid">
    <div class="row">
      Colunas com tamanhos por tamanho de tela
    </div>
    <div class="row mt-2">
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 column column-one"
      >
        Col One
      </div>
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 column column-two"
      >
        Col Two
      </div>
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 column column-three"
      >
        Col Three
      </div>
      <div
        class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 column column-four"
      >
        Col Four
      </div>
    </div>
    <div class="row mt-2">
      Colunas com tamanho automático
    </div>
    <div class="row mt-5">
      <div class="col col-lg-2 column column-one">
        Col One
      </div>
      <div class="col-md-auto column column-two">
        Tamanho variável de acordo com tamanho do conteúdo
      </div>
      <div class="col col-lg-2 column column-three">
        Col Three
      </div>
      <div class="col col-lg column column-four">
        Col Four
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.column {
  padding: 15px;
  font-weight: bold;
}
.column-one {
  background-color: red;
}
.column-two {
  background-color: green;
}
.column-three {
  background-color: blue;
}
.column-four {
  background-color: pink;
}
</style>
