<template>
    <a class="nav-link" href="#" v-scroll-to="link">{{text}}</a>
</template>

<script>
export default {
    name: "NavLink",
    props: {
        text: String,
        link: String,
    },
};
</script>

<style>
.nav-link {
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

.nav-link:after {
    content: "?";
    color: transparent;
    transition: all .2s ease-in-out;
    padding-left: 2px;
}

.nav-link:hover, 
.nav-link:active,
.nav-link.active { color: #000; }

.nav-link:hover:after, 
.nav-link:active:after,
.nav-link.active:after { color: #000; }
</style>
