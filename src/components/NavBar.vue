<template>
    <div class="navbar">
        <MainLogo/>
        <div class="links">
            <NavButton :text="button.text" :link="button.link" v-for="(button, index) in buttons" :key="index"/>
        </div>
    </div>
</template>

<script>
import MainLogo from "./MainLogo";
import NavButton from "./NavButton";

export default {
    name: "NavBar",
    data() {
        return {
            msg: "prueba mensaje",
            buttons: [
                {
                    text: "What",
                    link: "#what",
                },
                {
                    text: "Who",
                    link: "#who",
                },
                {
                    text: "How",
                    link: "#how"
                },
                {
                    text: "Where",
                    link: "#where",
                },
            ],
        };
    },
    components: {
        MainLogo,
        NavButton,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar {
        position: fixed;
        display: inline-block;
        vertical-align: top;
        width: 100%;
        z-index: 1;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2vh 3vw;
        background: white;
    }

    .links {
        display: inline-block;
        vertical-align: top;
    }
</style>
