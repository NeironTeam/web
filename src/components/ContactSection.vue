<template>
    <div class="container center">
        <div class="image-section">
            <canvas id="canvas-webgl" class="p-canvas-webgl"></canvas>
        </div>
    </div>
</template>

<script>
export default {
    name: "Mouse",
    components: {
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        width: 100vw;
        height: 100vh;
    }

    .center{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-section{
        background-color: #427867;
        width: 80vw;
        height: 60vh;
    }


</style>
