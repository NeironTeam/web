<template>
    <div>
        <h3 class="title">{{title}}</h3>
        <p class="background_text">{{title}}</p>
        <br><br><br><p>l</p>
    </div>
</template>

<script>
export default {
    name: "Section",
    props: {
        title: {
            type: String,
            required: true}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    padding-left: 40px;
    font-size: 27pt;
}
.background_text {
    color: rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 90pt;
    font-weight: 700;
    z-index: -1;
}
</style>
