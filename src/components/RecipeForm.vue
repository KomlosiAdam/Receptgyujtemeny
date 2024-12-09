<script setup>

</script>

<template>
    <form>
        <div class="mb-3">
            <label for="formFile" class="form-label">Töltsön fel képet az ételről!</label>
            <input class="form-control" type="file" id="formFile">
        </div>
        <input class="form-control" type="text" placeholder="Étel neve">
        <input class="form-control" type="number" placeholder="Elkészítési idő">
        <input class="form-control" type="text" placeholder="Elkészítés nehézsége">
        <button type="button" class="btn btn-success">Recept hozzáadása</button>
    </form>
</template>

<style scoped>

</style>