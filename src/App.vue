<script setup>
import RecipeForm from './components/RecipeForm.vue';
import { Recipe } from './classes/Recipe'
import { recipes } from './data/recipes'
import { ref, computed, watch } from "vue"

const recipesList = ref([]);
for (let recipe of recipes) {
    recipesList.value.push(new Recipe(recipe.id, recipe.name, recipe.cookTime, recipe.difficulty, recipe.description, recipe.imageURL))
}

const add = (recept) => {
    recipesList.value.push(recept);
};

const search = ref("");
const filteredRecipes = computed(() => {
    return recipesList.value.filter(recipe =>
        recipe.getName().toLowerCase().includes(search.value.toLowerCase()) ||
        recipe.getCookTime() <= search.value
    );
});

const difficulty = ref("Nehézség alapján lévő keresés");
const difficultyFilteredList = ref([]);
const isDifficultyFiltered = ref(0);
watch(difficulty, (newValue) => {
    difficultyFilteredList.value = [];

    isDifficultyFiltered.value = 1;
    const sourceList = filteredRecipes.value.length > 0 ? filteredRecipes.value : recipesList.value;

    if (newValue == 1) {
        difficultyFilteredList.value = sourceList.filter(recipe => recipe.getDifficulty() === "könnyű");
    } else if (newValue == 2) {
        difficultyFilteredList.value = sourceList.filter(recipe => recipe.getDifficulty() === "közepes");
    } else if (newValue == 3) {
        difficultyFilteredList.value = sourceList.filter(recipe => recipe.getDifficulty() === "nehéz");
    } else {
        isDifficultyFiltered.value = 0;
    }
});

const sort = ref("Rendezés");
const sortedRecipes = computed(() => {
    let sourceList = isDifficultyFiltered.value === 1 ? difficultyFilteredList.value : filteredRecipes.value;

    if (sort.value == 1) {
        return [...sourceList].sort((a, b) => a.getName().localeCompare(b.getName()));
    } else if (sort.value == 2) {
        return [...sourceList].sort((a, b) => a.getCookTime() - b.getCookTime());
    }
    return sourceList;
});

const currentView = ref('home');

const showHome = () => currentView.value = 'home';
const showAddRecipe = () => currentView.value = 'addRecipe';
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Receptgyűjtemény</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="showHome">Főoldal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="showAddRecipe">Hozzáadás</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <div v-if="currentView == 'home'">
            <div class="container-fluid">
                <div class="row">
                    <form>
                        <input class="form-control me-2" type="search" v-model="search" placeholder="Search"
                            aria-label="Search">

                        <select class="form-select" aria-label="Default select example" v-model="difficulty">
                            <option selected disabled>Nehézség alapján lévő keresés</option>
                            <option value="1">Könnyű</option>
                            <option value="2">Közepes</option>
                            <option value="3">Nehéz</option>
                        </select>

                        <select class="form-select" aria-label="Default select example" v-model="sort">
                            <option selected>Rendezés</option>
                            <option value="1">Név szerint</option>
                            <option value="2">Elkészítési időszerint</option>
                        </select>
                    </form>
                </div>

                <div class="row">
                    <div v-if="isDifficultyFiltered != 1">
                        <div class="row row-cols-1 row-cols-md-3 g-4" v-if="sortedRecipes.length != 0">
                            <div class="col" v-for="recipe in sortedRecipes" :key="recipe.id">
                                <div class="card h-100">
                                    <img :src="recipe.getImageURL()" class="card-img-top" :alt="recipe.getName()"
                                        :title="recipe.getName()">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{ recipe.getName() }}</h5>
                                        <p class="card-text times">Elkészítési idő: {{ recipe.getCookTime() }}</p>
                                        <p class="card-text text-center" :class="{
                                            'easy': recipe.getDifficulty() === 'könnyű',
                                            'medium': recipe.getDifficulty() === 'közepes',
                                            'hard': recipe.getDifficulty() === 'nehéz',
                                        }">{{ recipe.getDifficulty() }}</p>
                                        <a href="#" class="btn btn-primary">Részletek</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center errorMessage" v-else>
                            <p>Nincs ilyen recept!</p>
                        </div>
                    </div>
                    <div v-else>
                        <div class="row row-cols-1 row-cols-md-3 g-4" v-if="sortedRecipes.length != 0">
                            <div class="col" v-for="recipe in sortedRecipes" :key="recipe.id">
                                <div class="card h-100">
                                    <img :src="recipe.getImageURL()" class="card-img-top" :alt="recipe.getName()"
                                        :title="recipe.getName()">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">{{ recipe.getName() }}</h5>
                                        <p class="card-text times">Elkészítési idő: {{ recipe.getCookTime() }}</p>
                                        <p class="card-text text-center" :class="{
                                            'easy': recipe.getDifficulty() === 'könnyű',
                                            'medium': recipe.getDifficulty() === 'közepes',
                                            'hard': recipe.getDifficulty() === 'nehéz',
                                        }">{{ recipe.getDifficulty() }}</p>
                                        <a href="#" class="btn btn-primary">Részletek</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center errorMessage" v-else>
                            <p>Nincs ilyen recept!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RecipeForm @add="add" v-if="currentView === 'addRecipe'" />
    </main>

    <footer>
    </footer>
</template>

<style scoped>
.easy,
.medium,
.hard {
    color: #fff;
    width: 35%;
}

.easy,
.medium,
.hard,
.row form {
    border-radius: 10px;
}

.btn-primary:hover {
    text-decoration: none;
    background-color: #fff;
    color: #000;
}

.row form {
    width: 80%;
    margin: 30px auto auto auto;
}

.form-control,
.form-select {
    margin: 20px auto;
}

img {
    height: 200px;
    object-fit: cover;
}

.easy {
    background-color: rgb(0, 128, 0);
    border: 1px solid rgb(0, 128, 0);
}

.medium {
    background-color: rgb(192, 192, 0);
    border: 1px solid rgb(192, 192, 0);
}

.errorMessage {
    font-weight: 700;
}

.hard {
    background-color: rgb(255, 0, 0);
    border: 1px solid rgb(255, 0, 0);
}
</style>