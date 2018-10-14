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
    width: 13vw;
    height: 13vw;
    overflow: hidden;
    border-radius: 50%;
    display: block;
    margin: auto;
    margin-top: -8vw;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

img {
    display: block;
    margin: auto;
    height: 100%;
    width: auto;
}

@media only screen and (max-width: 1300px) {
    .image-cropper {
        width: 17vw;
        height: 17vw;
        margin-top: -11vw;
    }
}
@media only screen and (max-width: 978px) {
    .image-cropper {
        width: 21vw;
        height: 21vw;
        margin-top: -13vw;
    }
}
@media only screen and (max-width: 650px) {
    .image-cropper {
        width: 49vw;
        height: 49vw;
        margin-top: -28vw;
    }
}
</style>
