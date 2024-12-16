<script setup>
import { ref, watch ,defineEmits } from 'vue';
import { Recipe } from '../classes/Recipe'

const recipeName = ref('');
const cookingTime = ref('');
const difficulty = ref('');
const description = ref('');

const errors = ref({
  recipeName: '',
  cookingTime: '',
  difficulty: '',
  description: '',
});

const isButtonEnabled = ref(false);

const validateRecipeName = () => {
  if (!recipeName.value) {
    errors.value.recipeName = 'Étel neve nem lehet üres!';
  } else {
    errors.value.recipeName = '';
  }
};

const validateCookingTime = () => {
  if (!cookingTime.value) {
    errors.value.cookingTime = 'Elkészítési idő nem lehet üres!';
  } else if (cookingTime.value < 0) {
    errors.value.cookingTime = 'Az elkészítési idő nem lehet negatív!';
  } else {
    errors.value.cookingTime = '';
  }
};

const validateDifficulty = () => {
  if (!difficulty.value) {
    errors.value.difficulty = 'Válassz nehézséget!';
  } else if (difficulty.value !== 'könnyű' && difficulty.value !== 'közepes' && difficulty.value !== 'nehéz') {
    errors.value.difficulty = 'Csak a következő nehézségek megengedettek: könnyű, közepes, nehéz';
  } else {
    errors.value.difficulty = '';
  }
};

const validateDescription = () => {
  if (!description.value) {
    errors.value.description = 'Leírás nem lehet üres!';
  } else {
    errors.value.description = '';
  }
};

const validateForm = () => {
  validateRecipeName();
  validateCookingTime();
  validateDifficulty();
  validateDescription();
  isButtonEnabled.value = !Object.values(errors.value).some(error => error !== '');
};

watch([recipeName, cookingTime, difficulty, description], validateForm);

const openModal = () => {
  if (isButtonEnabled.value) {
    modalData.value = {
      recipeName: recipeName.value,
      cookingTime: cookingTime.value,
      difficulty: difficulty.value,
      description: description.value,
    };
    showModal.value = true;
  }
};

const closeModal = () => {
  showModal.value = false;
};

const showModal = ref(false);

const modalData = ref({});

const emit = defineEmits();

const save = ()=> {
  showModal.value = false;
  emit("add", new Recipe(1, recipeName.value, cookingTime.value, difficulty.value, "/", "Leírás"));
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-center">Recept hozzáadása</h2>
        <form>
          <input class="form-control" v-model="recipeName" type="text" placeholder="Étel neve" />
          <div v-if="errors.recipeName" class="text-danger w-25">{{ errors.recipeName }}</div>

          <input class="form-control" v-model="cookingTime" type="number" placeholder="Elkészítési idő" />
          <div v-if="errors.cookingTime" class="text-danger w-25">{{ errors.cookingTime }}</div>

          <select class="form-control" v-model="difficulty">
            <option disabled value="">Válassz nehézséget</option>
            <option value="könnyű">Könnyű</option>
            <option value="közepes">Közepes</option>
            <option value="nehéz">Nehéz</option>
          </select>
          <div v-if="errors.difficulty" class="text-danger w-25">{{ errors.difficulty }}</div>

          <textarea class="form-control" v-model="description" placeholder="Elkészítés leírása"></textarea>
          <div v-if="errors.description" class="text-danger w-25 mb-3">{{ errors.description }}</div>

          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-success" :disabled="!isButtonEnabled" @click="openModal">
              Recept hozzáadása
            </button>
          </div>
        </form>

        <div v-if="showModal" class="modal-backdrop" @click="closeModal">
          <div class="modal-dialog" @click.stop>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Recept hozzáadása</h5>
                <button type="button" class="close" @click="closeModal">&times;</button>
              </div>
              <div class="modal-body">
                <p>Biztosan hozzá szeretné adni az alábbi receptet?</p>
                <ul>
                  <li>Étel neve: {{ modalData.recipeName }}</li>
                  <li>Elkészítési idő: {{ modalData.cookingTime }} perc</li>
                  <li>Nehézség: {{ modalData.difficulty }}</li>
                  <li>Leírás: {{ modalData.description }}</li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary modal-button" @click="closeModal">Mégsem</button>
                <button type="button" class="btn btn-primary modal-button" @click="save">Mentés</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-md-6 {
  margin-top: 150px !important;
}
.btn-success:hover {
  background-color: rgb(0, 192, 0);
  border: 1px solid rgb(0, 192, 0);
  color: #000;
}

.col-md-6, .modal-button {
  padding: 10px;
  margin: 0px auto;
}

.form-control {
  margin: 20px 0px;
}
.modal-backdrop, .modal-dialog {
  position: fixed;
}
.modal-content {
  padding: 20px;
}
.modal-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1040;
}

.modal-dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
}
.modal-content, .close, .col-md-6 {
  border: 1px solid black;
  border-radius: 5px;
}
li {
  font-weight: 600;
}
.close {
  margin-left: 120px;
}
.close:hover, span:hover {
  background-color: rgb(255, 154, 154);
  color: #000;
}
span, .close {
  color: rgb(255, 0, 0);
  background-color: rgb(255, 255, 255);
}
.text-danger {
  background-color: rgb(255, 214, 214);
  margin: auto;
  text-align: center;
}
@media only screen and (max-width: 800px) {
    .col-md-6{
        width: 50%;
    }
}


</style>