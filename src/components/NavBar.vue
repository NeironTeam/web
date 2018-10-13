<template>
    <div class="navbar">
        <MainLogo/>
        <NavButton :text="button.text" :link="button.link" v-for="button in buttons" :key="button.order"/>
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
                    order: 1,
                    text: "Where?",
                    link: "#Where",
                },
                {
                    order: 1,
                    text: "How?",
                    link: "#How",
                },
                {
                    order: 3,
                    text: "Who?",
                    link: "#Who",
                },
                {
                    order: 4,
                    text: "What?",
                    link: "#What",
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
    display: flex;
}
</style>
