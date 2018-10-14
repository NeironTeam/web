<template>

    <div class="glitch glitch--style-1">
            <!-- <div class="container center">
        <div class="image-section center" id="glitch">
            <h2>IT'S THE END?</h2>
        </div>
    </div> -->
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
        <div class="glitch__img"></div>
    </div>
</template>

<script>
    export default {
        name: "ContactSection",
        components: {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        width: 100vw;
        height: 100vh;
    }

    .center{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-section{
        background: url("../assets/contact.jpg") center no-repeat;
        background-size: cover;
        width: 80vw;
        height: 60vh;
        border-radius: .8vh;
        box-shadow: 10px 10px 80px -10px rgba(0,0,0,0.75);
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
    }

    h2{
        text-transform: uppercase;
        color: white;
        font-size: 10vh;
    }

    .glitch {
        position: relative;
        width: var(--glitch-width);
        max-width: 400px;
        height: var(--glitch-height);
        max-height: calc(400px * 1.25);
        overflow: hidden;
        margin: 0 auto;
    }

    .glitch:hover {
        cursor: pointer;
    }

    .glitch__img {
        position: absolute;
        top: calc(-1 * var(--gap-vertical));
        left: calc(-1 * var(--gap-horizontal));
        width: calc(100% + var(--gap-horizontal) * 2);
        height: calc(100% + var(--gap-vertical) * 2);
        background: url("../assets/contact.jpg") no-repeat 50% 0;
        background-color: var(--blend-color-1);
        background-size: cover;
        background-blend-mode: var(--blend-mode-1);
    }

    /* Set the background colors for the glitch images*/
    .glitch__img:nth-child(2) {
        background-color: var(--blend-color-2);
        background-blend-mode: var(--blend-mode-2);
    }

    .glitch__img:nth-child(3) {
        background-color: var(--blend-color-3);
        background-blend-mode: var(--blend-mode-3);
    }

    .glitch__img:nth-child(4) {
        background-color: var(--blend-color-4);
        background-blend-mode: var(--blend-mode-4);
    }

    .glitch__img:nth-child(5) {
        background-color: var(--blend-color-5);
        background-blend-mode: var(--blend-mode-5);
    }

    .glitch__img:nth-child(n+2) {
        opacity: 0;
    }

    .glitch:hover .glitch__img:nth-child(n+2) {
        opacity: 1;
    }

    .glitch:hover .glitch__img:nth-child(2) {
        transform: translate3d(var(--gap-horizontal),0,0);
        animation: glitch-anim-1-horizontal var(--time-anim) infinite linear alternate;
    }

    .glitch:hover > .glitch__img:nth-child(3) {
        transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);
        animation: glitch-anim-2-horizontal var(--time-anim) infinite linear alternate;
    }

    .glitch:hover > .glitch__img:nth-child(4) {
        transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
        animation: glitch-anim-3-horizontal var(--time-anim) infinite linear alternate;
    }

    /* Hover flash animation on last image */
    .glitch:hover > .glitch__img:nth-child(5) {
        animation: glitch-anim-flash 0.5s steps(1,end) infinite;
    }
</style>
