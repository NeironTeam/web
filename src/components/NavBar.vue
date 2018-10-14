<style scoped>
    .navbar {
        display: inline-block;
        vertical-align: top;
        position: fixed;
        top: 0; left: 0;
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

<template>
    <div class="navbar" :class="{ 'scrolled': !initialPosition }">
        <a :href="home.link" v-scroll-to="home.link">
            <MainLogo/>
        </a>
        <div class="links">
            <NavLink v-for="(link, index) in links" :key="index"
                :href="link.link"
                :text="link.text"
                :link="link.link"
                :active="link.active"/>
        </div>
    </div>
</template>

<script>
import MainLogo from "./MainLogo";
import NavLink from "./NavLink";

export default {
    name: "NavBar",
    mounted() {
        this.initialHeight = window.innerHeight;

        window.addEventListener("scroll", this.scrolling);
        
        this.links.forEach((link, index) => {
            let id = link.link;
            let el = document.querySelector(id);
            if (el !== null) {
                let [ start, end ] = this.getPosition(el);
                this.sections.push({ id, el, start, end, index });
            }
        });
    },
    data() {
        return {
            initialHeight: 0,
            initialPosition: true,
            sections: [],
            home: {
                link: "#index"
            },
            links: [
                {
                    text: "What",
                    link: "#what",
                    active: false
                },
                {
                    text: "Who",
                    link: "#who",
                    active: false
                },
                {
                    text: "How",
                    link: "#how",
                    active: false
                },
                {
                    text: "Where",
                    link: "#where",
                    active: false
                },
            ],
        };
    },
    methods: {
        scrolling(e) {
            let now = {
                start: Math.ceil(document.documentElement.scrollTop), 
                end: Math.ceil(document.documentElement.scrollTop) + this.initialHeight
            };

            this.updateClass(now);
            this.checkCurrentLink(now);
        },
        updateClass(now) {
            this.initialPosition = now.start <= this.initialHeight;
        },
        checkCurrentLink(now) {
            this.sections.forEach(section => this.checkSectionBoundary(now, section) );
        },
        getPosition(el) {
            return [
                el.offsetTop,
                el.offsetTop + el.offsetHeight
            ]
        },
        checkSectionBoundary(now, section) {
            let current =   ( now.start < section.start && now.end >= section.end ) ||
                            ( now.start >= section.start && now.end < section.end ) ||
                            ( now.start >= section.start && now.end >= section.end && now.start < section.end );

            this.links[section.index].active = current;
        }
    },
    components: {
        MainLogo,
        NavLink,
    },
};
</script>