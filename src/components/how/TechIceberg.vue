<style scoped>
.shadow {
    filter: drop-shadow(0px 15px 13px rgba(0,0,0,0.25));
    -webkit-filter: drop-shadow(0px 15px 13px rgba(0,0,0,0.25));
    -moz-filter: drop-shadow(0px 15px 13px rgba(0,0,0,0.25));
}

#iceberg-container {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: auto;
    text-align: center;
    padding: 20vh 0;
}

#background {
    display: inline-block;
    width: 80%;
    height: auto;
    max-width: 600px;
}

#iceberg {
    position: absolute;
    width: 40vh;
    height: auto;
    max-width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.bubble {
    position: absolute;
    height: auto;
    min-width: 300px;
    left: 50%;
    z-index: 2;
}

#bots {
    width: 32vh;
    top: 3%;
    transform: translateX(-125%);
}

#web {
    width: 35vh;
    top: 8%;
    transform: translateX(30%);
}

#backend {
    width: 37vh;
    bottom: 3%;
    transform: translateX(-110%);
}

@media screen and (max-width: 875px) {
    #iceberg-container { text-align: center; }

    #background, #iceberg { display: none; }

    .bubble {
        display: inline-block;
        vertical-align: top;
        position: relative;
        margin: 5vw 0;
        width: 70% !important;
        min-width: 400px;
        height: auto;
        transform: initial !important;
        top: 0 !important; 
        left: 0;
    }
}

</style>

<template>
    <div id="iceberg-container">
        <img id="background" class="shadow" src="../../assets/iceberg/background.svg"/>
        <img id="bots" class="bubble shadow" src="../../assets/iceberg/bots.svg"/>
        <img id="web" class="bubble shadow" src="../../assets/iceberg/web.svg"/>
        <img id="backend" class="bubble shadow" src="../../assets/iceberg/backend.svg"/>
        <img id="iceberg" class="shadow" src="../../assets/iceberg/iceberg.svg"/>
    </div>
</template>

