<template>
    <div class="navbar" :class="{ 'scrolled': !initialPosition }">
        <a href="#" v-scroll-to="'#index'">
            <MainLogo/>
        </a>
        <div class="links">
            <NavLink :text="link.text" :link="link.link" v-for="(link, index) in links" :key="index"/>
        </div>
    </div>
</template>

<script>
import MainLogo from "./MainLogo";
import NavLink from "./NavLink";

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
            home: {
                link: "home"
            },
            links: [
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
        NavLink,
    },
};
</script>

<style>
    .navbar {
        display: inline-block;
        vertical-align: top;
        position: fixed;
        top: 0;
        left: 0;
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
