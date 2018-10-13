<template>
    <div id="app">
        <NavBar/>
        <Index id="index"/>
        <WhatSection id="what" title="What is neiron dev?"/>
    </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Index from "./components/Index";
import WhatSection from "./components/WhatSection";

export default {
    name: "App",
    components: {
        NavBar,
        Index,
        WhatSection
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
@import url('https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    max-width: 1400px;
    margin: 0 auto;
}
</style>
