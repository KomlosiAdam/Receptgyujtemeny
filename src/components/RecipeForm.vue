<script setup>
import { ref } from 'vue';

// Modal láthatóságának kezelése
const showModal = ref(false);

// Modal megnyitása
const openModal = () => {
  showModal.value = true;
};

// Modal bezárása
const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-center">
          Recept hozzáadása
        </h2>
        <form>
          <input class="form-control" type="text" placeholder="Étel neve" />
          <input class="form-control" type="number" placeholder="Elkészítési idő" />
          <input class="form-control" type="text" placeholder="Elkészítés nehézsége" />
          <input class="form-control" type="textarea" placeholder="Elkészítés leírása" />

          <!-- Gomb középre igazítása -->
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success" @click="openModal">
              Recept hozzáadása
            </button>
          </div>
        </form>

        <!-- Modal -->
        <div v-if="showModal" class="modal-backdrop" @click="closeModal">
          <div class="modal-dialog" @click.stop>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Recept hozzáadása</h5>
                <button type="button" class="close" @click="closeModal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <p>Biztosan hozzá szeretné adni az alábbi receptet?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary modal-button" @click="closeModal">Mégsem</button>
                <button type="button" class="btn btn-primary modal-button" @click="closeModal">Mentés</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.col-md-6{
    margin-top: 150px !important;
    border: 1px solid black;
}
.btn-success:hover {
  background-color: rgb(0, 192, 0);
  border: 1px solid rgb(0, 192, 0);
  color: #000;
}

.col-md-6,.modal-button {
  padding: 10px;
  margin: 0px auto;
}

.form-control {
  margin: 20px 0px;
}
.modal-backdrop,.modal-dialog{
    position: fixed;
}
.modal-content{
    padding: 20px;
}
.modal-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8); 
  z-index: 1040;
}

.modal-dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
}
.modal-content,.close{
    border: 1px solid black;
    border-radius: 5px;
}
.close{
    margin-left: 120px;
}
.close:hover,span:hover{
    background-color: rgb(255, 154, 154);
    color: #000;
}
span, .close{
    color: rgb(255,0,0 );
    background-color: rgb(255,255,255);
}
</style>