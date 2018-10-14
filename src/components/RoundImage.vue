<template>
    <div class="image-cropper">
        <img :src="img">
    </div>

</template>

<script>
export default {
    name: "RoundImage",
    props: {
        img: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-cropper {
    width: 15vw;
    height: 15vw;
    position: relative;
    overflow: hidden;
    bottom: 40%;
    border-radius: 50%;
    display: block;
    margin: auto;
    margin-top: -20%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

img {
    display: block;
    margin: auto;
    height: 100%;
    width: auto;
}
</style>
