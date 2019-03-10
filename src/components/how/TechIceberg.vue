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
}

#iceberg-container::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -5vw;
    vertical-align: top;
    width: 100vw;
    height: 28vh;
    background: #1f61c4;
    box-shadow: 0px -10px 30px -10px rgba(0,0,0,0.75);
}

#sun {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 55vh;
    height: 30vh;
    margin-bottom: 25vh;
    overflow: hidden;
}

#sun::before{
    content: '';
    position: absolute;
    top: 5vh;
    left: 5vh;
    width: 45vh;
    height: 45vh;
    background: rgb(218, 34, 52);
    border-radius: 50%;
    box-shadow: 0px 0px 30px -10px rgba(0,0,0,0.75);
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

#technologies {
    display: flex;
    width: 100%;
    height: auto;
}

/* .water {
    height: 100%;
    width: 100%;
    padding-top: 50%;
    position: absolute;
    background-color: blue;
} */

@media screen and (max-width: 875px) {
    #iceberg-container { text-align: center; }

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
        <div id="sun"></div>
        <img id="iceberg" class="shadow" src="../../assets/iceberg/iceberg.svg"/>
    </div>
</template>

