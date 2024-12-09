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
                <button class="btn btn-outline-success" type="submit">Search</button>

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

        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." title="...">
                    <div class="card-body">
                        <h5 class="card-title">Name</h5>
                        <p class="card-text">CookTime</p>
                        <p class="card-text easy">Difficulty</p>
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
.hard,
.row form {
    border-radius: 10px;
    color: #fff;
}

.card {
    width: 18rem;
}

.card:hover {
    width: 19rem;
}

.btn-primary:hover {
    width: 40%;
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
</style>