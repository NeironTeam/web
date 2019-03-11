<style scoped>
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

.nav-link.active:after { color: #000; }

.icon{
    display: none;
}

.text{
    display: inline-block;
}

@media only screen and (max-width: 500px) {
    .icon{
        display: inline-block;
    }
    .text{
        display: none;
    }

}

</style>

<template>
    <a class="nav-link"
        :class="{ 'active': active }"
        href="#" 
        v-scroll-to="link">
        <span class="icon" :class="icon">
        </span>
        <span class="text">
            {{ text }}
        </span>
    </a>
</template>

<script>
export default {
    name: "NavLink",
    props: {
        text: String,
        link: String,
        active: Boolean,
        icon: String
    },
    immediate: true
};
</script>