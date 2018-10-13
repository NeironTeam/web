<template>

    <a class="nav-button" href="#" v-scroll-to="link">{{text}}</a>

</template>

<script>
export default {
    name: "NavButton",
    props: {
        text: String,
        link: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-button {
    position: relative;
    float: right;
    top: 30px;
    color: #242424;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
</style>
