<template>
    <div>
        <div class="mouse-and-arrow" v-scroll-reveal="{ delay: 2000 }">
            <MouseIcon/>
            <ArrowIcon class="arrow"/>
        </div>
    </div>
</template>

<script>
import MouseIcon from "./MouseIcon.vue"
import ArrowIcon from "./ArrowIcon.vue"

export default {
    name: "Mouse",
    mounted() {
        window.addEventListener("scroll", event => {
            this.$el.style.opacity = 1 - window.scrollY / 250
        });
    },
    components: {
        MouseIcon,
        ArrowIcon
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes arrow-animation {
    0% {transform: translate(0px, -30px)}
    20% {transform: translate(0px, -29px)}
    50% {transform: translate(0px, -25px)}
    80% {transform: translate(0px, -21px)}
    100% {transform: translate(0px, -20px)}
}

.mouse-and-arrow {
    text-align: center;
    width: 50px;
    display: inline-block;
}
.mouse {
    display: inline-block;
    width: 100%;
    height: auto;
}
.arrow {
    display: inline-block;
    width: 100%;
    height: auto;
    top: -10px;
    animation: linear 1s infinite alternate;
    animation-name: arrow-animation;
}
</style>
