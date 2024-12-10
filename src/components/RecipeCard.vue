<script setup>
import { Recipe } from '../classes/Recipe'
import { recipes } from '../data/recipes'
import { ref, computed } from "vue"

const recipesList = ref([]);
for (let recipe of recipes) {
    recipesList.value.push(new Recipe(recipe.id, recipe.name, recipe.cookTime, recipe.difficulty, recipe.imageURL))
}
const vanRecept = ref(false);
const search = ref("");
const filteredRecipes = computed(() => {
    return recipesList.value.filter(recipe =>
        recipe.getName().toLowerCase().includes(search.value.toLowerCase()) ||
        recipe.getCookTime() <= search.value
    );
});
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <form>
                <input class="form-control me-2" type="search" v-model="search" placeholder="Search"
                    aria-label="Search">

                <select class="form-select" aria-label="Default select example">
                    <option selected>Nehézség alapján lévő keresés</option>
                    <option value="1">Könnyű</option>
                    <option value="2">Közepes</option>
                    <option value="3">Nehéz</option>
                </select>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Rendezés</option>
                    <option value="1">Név szerint</option>
                    <option value="2">Elkészítési időszerint</option>
                </select>

            </form>
        </div>

        <div class="row cards">
            <div class="col-md-4" v-for="recipe in filteredRecipes" v-if="filteredRecipes.length!=0">
                <div class="card">
                    <img :src=recipe.getImageURL() class="card-img-top" :alt=recipe.getName() :title=recipe.getName()>
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
            <div class="text-center errorMessage" v-else>
                <p>Nincs ilyen recept!</p>
            </div>
        </div>
    </div>

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

.row form {
    width: 80%;
    margin: 30px auto auto auto;
}

.form-control,
.form-select,
.cards {
    margin: 20px auto;
}

img {
    height: 150px;
}

.card {
    width: 18rem;
    margin: 10px auto;
}

.card:hover {
    animation: alternate;
    animation-duration: 100ms;
}

form {
    padding: 20px;
}

.row form {
    border: 1px solid rgb(128, 128, 128);
    background-color: rgb(204, 204, 204);
}

.easy {
    background-color: rgb(0, 128, 0);
    border: 1px solid rgb(0, 128, 0);
}

.medium {
    background-color: rgb(192, 192, 0);
    border: 1px solid rgb(192, 192, 0);
}

.errorMessage{
    font-weight: 700;
}

.hard {
    background-color: rgb(255, 0, 0);
    border: 1px solid rgb(255, 0, 0);
}

@media only screen and (max-width: 800px) {
    .card {
        margin: 20px auto;
        width: 18rem;
    }
}

@media only screen and (max-width: 1000px) {
    .card {
        width: 15rem;
    }
}
</style>