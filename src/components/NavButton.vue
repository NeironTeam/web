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
    display: inline-block;
    vertical-align: top;
    color: #888;
    text-align: center;
    margin-left: 10px;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
    transition: all .1s ease-in-out;
}

.nav-button:after {
    content: "?";
    color: transparent;
    transition: all .2s ease-in-out;
    padding-left: 2px;
}

.nav-button:hover, 
.nav-button:active,
.nav-button.active { color: #000; }

.nav-button:hover:after, 
.nav-button:active:after,
.nav-button.active:after { color: #000; }
</style>
