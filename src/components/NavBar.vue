<template>
    <div class="navbar" :class="{ 'scrolled': !initialPosition }">
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
    created() {
        this.initialHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight, 
            document.documentElement.clientHeight, 
            document.documentElement.scrollHeight, 
            document.documentElement.offsetHeight
        );

        window.addEventListener("scroll", this.updateClass);
    },
    data() {
        return {
            initialHeight: 0,
            initialPosition: true,
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
    methods: {
        updateClass(event) {
            let current = Math.max( 
                document.documentElement.scrollTop, 
                document.body.scrollTop
            );

            this.initialPosition = current <= this.initialHeight;
        }
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
    }

    .navbar .links {
        display: inline-block;
        vertical-align: top;
        transition: all .2s ease-in-out;
    }

    .navbar.scrolled .links {
        background: white;
        border-radius: 100px;
        box-shadow: 10px 10px 60px -20px rgba(0,0,0,0.75);
    }
</style>
