<template>
    <a href="mailto:info@neiron.org">
    <div class="container center">
        <div class="glitch center" id="glitch">
            <h2></h2>
            <h2 class="red"></h2>
            <h2 class="green"></h2>
        </div>
        <!-- <div class="glitch center behind" id="glitch"></div> -->
    </div>
    </a>
</template>

<script>
    export default {
        name: "ContactSection",
        props: {
            message: String
        },
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

    .glitch:before{
        content:'';
        width: 100%;
        height: 100%;
        background: url("../../assets/contact.jpg") center no-repeat;
        background-size: cover;
        z-index: 0;
        filter: brightness(80%);
        /* opacity: 0.8; */
    }

    .glitch{
        position: relative;
        place-items: center;
        width: 75vw;
        height: 55vh;
        border-radius: .8vh;
        box-shadow: 10px 10px 80px -10px rgba(0,0,0,0.75);
        /* -webkit-filter: grayscale(100%);
        filter: grayscale(100%); */
        transition: all .2s ease-in-out;
        overflow: hidden;
        margin: 0 auto;
    }

    h2:before{
        content: 'Have you got an idea?'
    }

    h2{
        width:100%;
        text-align: center;
        position: absolute;
        text-transform: uppercase;

        font-size: 5vw;
        margin: 0;
        line-height: 0;
        color: white;
        animation: glitch1 2.5s infinite;
        opacity: 1;
        z-index:2;
    }

    .glitch:hover h2:before{
        content: 'Contact us';
        cursor: pointer;
        animation: changeLetterError 0.5s linear;
    }

    .glitch:hover{
        width: 80vw;
        height: 60vh;
    }

    .green {
        color: #67F3DA;
        animation: glitch2 2.5s infinite;
    }

    .red {
        color: #F16F6F;
        animation: glitch3 2.5s infinite;
    }

/*|@#¢∞¬÷“”≠≈≈’‘⁄ ‰±ˆ«»«˜˜˜ˆ!"·$%&/()=€æ®∑∂†ƒ¥ ß™  ¶ø¶¶ø ¶   ™¥†ƒ®∂€∫æ«*/

    @keyframes changeLetterError {
        0% {
            content: "  ™¶@|#“|@#";
        }
        5% {
            content: "%&/ (/ )(( (/  &";
        }
        10% {
            content: "GUY QUIGDWH GDSY";
        }
        15% {
            content: "&/) &/¥  ∫å∂";
        }
        20% {
            content: "J¥¶∫å∫å∂©©©©µ∑";
        }
        25% {
            content: "ƒLK 133 1/(&6å∫";
            font-size: 5vw;
        }
        30% {
            content: "UIHGDSAUHJBDSA";
            font-size: 10vw;
        }
        35% {
            content: "";
        }
        40% {
            content: "¶™¥ œ  1267 ¬÷““”“";
            font-size: 5vw;
        }
        45% {
            content: "jihuasdsa sada---";
        }
        50% {
            content: "Hav4 yøu ‰ø† an id¢A";
        }
        55% {
            content: " @#¬÷“ ¢# @ 8u89...-";
            font-size: 5vw;
        }
        65% {
            content: "";
        }
        70% {
            content: "CONTAAA AS)$";
            font-size: 20vw;
        }
        75% {
            content: "";
        }
        80% {
            content: "÷#“¢ ¬∞÷“#”@|™¶å";
            font-size: 5vw;
        }
        85% {
            content: "-------------------";
        }
        90% {
            content: "AAAAAT US®†∫";
        }
        95% {
            content: "ÑASFJ ~~~";
        }
        100% {
            content: 'Contact us';
        }
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
