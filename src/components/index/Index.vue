<template>
    <div class="outter">
        <div class="inner">
            <div  v-scroll-reveal="{ delay: 100,duration: 1000, scale:1, distance: '0px'}" class="logo">
                <Logo/>
            </div>
            <h1 v-scroll-reveal="{ delay: 100,duration: 1000, scale:1, distance: '0px'}" class="title">
                neiron
                <small v-scroll-reveal="{ delay: 1000 }" >dev</small>
            </h1>
            <h2 class="subtitle" v-scroll-reveal="{ delay: 1500 }">Tabulamos con espacios</h2>
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
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
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
</style>
