<script setup>
    import {ref} from 'vue'
    import {Recipe} from '../classes/Recipe'
    import {recipes} from '../data/recipes'

    const recipeList = ref([]);
    for(let recipe of recipes) {
        recipeList.value.push(new Recipe(recipe.id, recipe.name, recipe.cookTime, recipe.difficulty, recipe.imageURL))
    }
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <form>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">

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
            <div class="col-md-4">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." title="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Name</h5>
                        <p class="card-text times">CookTime</p>
                        <p class="card-text easy text-center">Difficulty</p>
                        <a href="#" class="btn btn-primary">Részletek</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." title="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Name</h5>
                        <p class="card-text times">CookTime</p>
                        <p class="card-text easy text-center">Difficulty</p>
                        <a href="#" class="btn btn-primary">Részletek</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." title="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">Name</h5>
                        <p class="card-text times">CookTime</p>
                        <p class="card-text easy text-center">Difficulty</p>
                        <a href="#" class="btn btn-primary">Részletek</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.easy,
.medium,
.hard{
    color: #fff;
    width: 35%;
}
.easy,.medium,.hard,.row form{
    border-radius: 10px;
}
.row form{
    width: 80%;
    margin: 30px auto auto auto;
}
.form-control, .form-select, .cards{
    margin: 20px auto;
}
.card {
    width: 18rem;
    margin: 0px auto;
}

.card:hover {
    animation: alternate;
    animation-duration: 100ms;
}

form{
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
    background-color: rgb(255, 255, 0);
    border: 1px solid rgb(255, 255, 0);
}

.hard {
    background-color: rgb(255, 0, 0);
    border: 1px solid rgb(255, 0, 0);
}
@media only screen and (max-width: 800px) {
  .card{
    margin: 20px auto;
    width: 18rem;
  }
}
@media only screen and (max-width: 1000px) {
  .card{
    width: 15rem;
  }
}
</style>