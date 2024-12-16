<script setup>

</script>

<template>
    <form>
        <input class="form-control" type="text" placeholder="Étel neve">
        <input class="form-control" type="number" placeholder="Elkészítési idő">
        <input class="form-control" type="text" placeholder="Elkészítés nehézsége">
        <input class="form-control" type="textarea" placeholder="Elkészítés nehézsége">

        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
            Recept hozzáadása
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Recept hozzáadása</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Biztosan hozzá szeretné adni az alábbi receptet?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Mégsem</button>
                        <button type="button" class="btn btn-primary">Mentés</button>
                    </div>
                </div>
            </div>
        </div>


    </form>
</template>

<style scoped>

.btn-success:hover{
    background-color: rgb(0, 192, 0);
    border: 1px solid rgb(0, 192, 0);
    color: #000;
}

</style>