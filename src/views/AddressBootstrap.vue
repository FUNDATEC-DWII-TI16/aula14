<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-auto col-sm-12">
        <label>Tipo de Endereço</label>
        <select class="form-control">
          <option selected>Rua</option>
          <option>Avenida</option>
          <option>Estrada</option>
        </select>
      </div>
      <div class="col-md col-sm-12">
        <label>Endereço</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-auto col-sm-12">
        <label>Número</label>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <label>Bairro</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg col-md-4 col-sm-12">
        <label>Cidade</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-md-2 col-lg-auto col-sm-12">
        <label>Estado</label>
        <select class="form-control">
          <option>AC</option>
          <option>AL</option>
          <option>AP</option>
          <option>AM</option>
          <option>BA</option>
          <option>CE</option>
          <option>DF</option>
          <option>ES</option>
          <option>GO</option>
          <option>MA</option>
          <option>MT</option>
          <option>MS</option>
          <option>MG</option>
          <option>PA</option>
          <option>PB</option>
          <option>PR</option>
          <option>PE</option>
          <option>PI</option>
          <option>RJ</option>
          <option>RN</option>
          <option selected>RS</option>
          <option>RO</option>
          <option>RR</option>
          <option>SC</option>
          <option>SP</option>
          <option>SE</option>
          <option>TO</option>
        </select>
      </div>
      <div class="col-md-3 col-sm-12">
        <label>País</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg-auto col-md-3 col-sm-12">
        <label>CEP</label>
        <input type="text" class="form-control" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
