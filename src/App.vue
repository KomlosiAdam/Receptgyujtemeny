<script setup>
import {ref} from 'vue'
    import RecipeCard from './components/RecipeCard.vue'
    import Recipe from './classes/Recipe'
    import {recipes} from './data/recipes'

    const recipeList = ref([]);
    for(let recipe of recipes) {
        recipeList.value.add(new Recipe(recipe.id, recipe.name, recipe.cookTime, recipe.difficulty, recipe.imageURL))
    }
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
                            <a class="nav-link" href="#">Főoldal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hozzáadás</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        
    </main>
    <footer>

    </footer>
</template>

<style scoped>

</style>
