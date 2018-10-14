<template>
    <div class="container center">
        <div class="glitch center" id="glitch">
            <div>
                <h2>IT'S THE END?</h2>
                <h2 class="red">IT'S THE END?</h2>
                <h2 class="green">IT'S THE END?</h2>
            </div>
        </div>
        <!-- <div class="glitch center behind" id="glitch"></div> -->
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

    .glitch{
        background: url("../assets/contact.jpg") center no-repeat;
        background-size: cover;
        width: 80vw;
        height: 60vh;
        border-radius: .8vh;
        box-shadow: 10px 10px 80px -10px rgba(0,0,0,0.75);
        /* -webkit-filter: grayscale(100%);
        filter: grayscale(100%); */
        overflow: hidden;
        margin: 0 auto;
    }

    h2{
        text-transform: uppercase;
        font-size: 10vw;
        margin: 0;
        line-height: 0;
        color: white;
        animation: glitch1 2.5s infinite;
        opacity: 1;
        z-index:2;
    }

    .green {
        color: #67F3DA;
        animation: glitch2 2.5s infinite;
    }

    .red {
        color: #F16F6F;
        animation: glitch3 2.5s infinite;
    }

    .glitch:hover {
        cursor: pointer;
    }

    @keyframes glitch1 {
    0% {
        transform: none;
        opacity: 1;
    }
    7% {
        transform: skew(-0.5deg, -0.9deg);
        opacity: 0.75;
    }
    10% {
        transform: none;
        opacity: 1;
    }
    27% {
        transform: none;
        opacity: 1;
    }
    30% {
        transform: skew(0.8deg, -0.1deg);
        opacity: 0.75;
    }
    35% {
        transform: none;
        opacity: 1;
    }
    52% {
        transform: none;
        opacity: 1;
    }
    55% {
        transform: skew(-1deg, 0.2deg);
        opacity: 0.75;
    }
    50% {
        transform: none;
        opacity: 1;
    }
    72% {
        transform: none;
        opacity: 1;
    }
    75% {
        transform: skew(0.4deg, 1deg);
        opacity: 0.75;
    }
    80% {
        transform: none;
        opacity: 1;
    }
    100% {
        transform: none;
        opacity: 1;
    }
}

@keyframes glitch2 {
    0% {
        transform: none;
        opacity: 0.25;
    }
    7% {
        transform: translate(-2px, -3px);
        opacity: 0.5;
    }
    10% {
        transform: none;
        opacity: 0.25;
    }
    27% {
        transform: none;
        opacity: 0.25;
    }
    30% {
        transform: translate(-5px, -2px);
        opacity: 0.5;
    }
    35% {
        transform: none;
        opacity: 0.25;
    }
    52% {
        transform: none;
        opacity: 0.25;
    }
    55% {
        transform: translate(-5px, -1px);
        opacity: 0.5;
    }
    50% {
        transform: none;
        opacity: 0.25;
    }
    72% {
        transform: none;
        opacity: 0.25;
    }
    75% {
        transform: translate(-2px, -6px);
        opacity: 0.5;
    }
    80% {
        transform: none;
        opacity: 0.25;
    }
    100% {
        transform: none;
        opacity: 0.25;
    }
}

@keyframes glitch3 {
    0% {
        transform: none;
        opacity: 0.25;
    }
    7% {
        transform: translate(2px, 3px);
        opacity: 0.5;
    }
    10% {
        transform: none;
        opacity: 0.25;
    }
    27% {
        transform: none;
        opacity: 0.25;
    }
    30% {
        transform: translate(5px, 2px);
        opacity: 0.5;
    }
    35% {
        transform: none;
        opacity: 0.25;
    }
    52% {
        transform: none;
        opacity: 0.25;
    }
    55% {
        transform: translate(5px, 1px);
        opacity: 0.5;
    }
    50% {
        transform: none;
        opacity: 0.25;
    }
    72% {
        transform: none;
        opacity: 0.25;
    }
    75% {
        transform: translate(2px, 6px);
        opacity: 0.5;
    }
    80% {
        transform: none;
        opacity: 0.25;
    }
    100% {
        transform: none;
        opacity: 0.25;
    }
}
</style>
