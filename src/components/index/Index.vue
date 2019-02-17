<template>
    <div class="outter">
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
        <div class="inner">
            <div  v-scroll-reveal="{ delay: 100,duration: 1000, scale:1, distance: '0px'}" class="logo">
                <Logo/>
            </div>
            <h1 v-scroll-reveal="{ delay: 100,duration: 1000, scale:1, distance: '0px'}" class="title">
                neiron
                <small v-scroll-reveal="{ delay: 1000 }" >dev</small>
            </h1>
            <h2 class="subtitle" v-scroll-reveal="{ delay: 1500 }">Shaping our future</h2>
        </div>

        <Mouse class="mouse"/>
    </div>
</template>

<script>
import Logo from "./Logo";
import Mouse from "./Mouse";

export default {
    components: {
        Logo,
        Mouse,
    },
};
</script>

<style>
.outter {
    display: inline-block;
    vertical-align: top;
    max-width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    overflow-x: hidden;
    overflow-y: hidden;
}

.outter .inner {
    display: inline-block;
    vertical-align: top;
    width: 90%;
    max-width: 350px;
    height: auto;
    text-align: center;
}

.outter .inner .logo {
    display: inline-block;
    vertical-align: top;
    width: 60%;
    height: auto;
    margin: 0 auto;
    text-align: center;
}

.outter .inner .title {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 100%;
    height: auto;
    text-align: center;
    margin: 3.5vh 0;
    font-weight: 300;
    font-size: 6vh;
    padding: 0;
}

.outter .inner .title small {
    position: absolute;
    top: 5vh;
    font-size: 2.5vh;
}

.outter .inner .subtitle {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    font-weight: 400;
    font-size: 2.5vh;
    color: #444;
}

.outter .mouse {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
}

/** Waves **/
.wave {
    z-index: -1;
    opacity: .3;
    position: absolute;
    top: 3%;
    left: 50%;
    width: 500vh;
    height: 500vh;
    margin-left: -250vh;
    margin-top: -450vh;
    transform-origin: 50% 48%;
    border-radius: 43%;
    border-style: solid;
    border-width: 5vh;
    border-color: rgba(214,127,94,1);
    animation: drift 30s infinite linear;
}

.wave.-two {
    animation: drift 70s infinite linear;
    opacity: .3;
    border-color: rgb(218, 34, 52);
    /* border-color: rgba(150,114,165,1) */
}

.wave.-three {
    opacity: .5;
    animation: drift 50s infinite linear;
    border-color: rgb(31, 97, 196);
}

@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}

</style>
