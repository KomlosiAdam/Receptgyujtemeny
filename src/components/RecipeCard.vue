<script setup>

</script>

<template>
<div class="card">
  <img src="..." class="card-img-top" alt="..." title="...">
  <div class="card-body">
    <h5 class="card-title">Name</h5>
    <p class="card-text">CookTime</p>
    <p class="card-text easy">Difficulty</p>
    <a href="#" class="btn btn-primary">Részletek</a>  
  </div>
</div>
</template>

<style scoped>
.card{
    width: 18rem;
}
.card:hover{
    width: 19rem;
}
.btn-primary:hover{
    width: 40%;
}
.easy,.medium,.hard{
    border-radius: 10px;
    color: #fff;
}
.easy{
    background-color: rgb(0,128,0);
    border: 1px solid rgb(0,128,0);
}
.medium{
    background-color: rgb(255,255,0);
    border: 1px solid rgb(255,255,0);
}
.hard{
    background-color: rgb(255,0,0);
    border: 1px solid rgb(255,0,0);
}
</style>