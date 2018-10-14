
<template>
    <div id="app">
        <NavBar/>
        <Index id="index"/>
<<<<<<< HEAD
        <WhatSection id="what" title="What is neiron dev?"/>
        <WhoSection/>
        <HowSection id="how" 
            title="How we can help you?" 
            background-text="how?"/>
=======
        <WhatSection v-scroll-reveal="{ delay: 100 }" id="what" title="What is neiron dev?"/>
        <WhoSection v-scroll-reveal="{ delay: 100 }" id="who" title="Who?"/>
        <ContactSection v-scroll-reveal="{ delay: 100 }"/>
>>>>>>> 682a6f2d22d3f971546b391e4abf32e54f9bf77b
    </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Index from "./components/Index";
import WhatSection from "./components/WhatSection";
import WhoSection from "./components/WhoSection";
<<<<<<< HEAD
import HowSection from "./components/HowSection";
=======
import ContactSection from "./components/ContactSection";
>>>>>>> 682a6f2d22d3f971546b391e4abf32e54f9bf77b

export default {
    name: "App",
    components: {
        NavBar,
        Index,
        WhatSection,
        WhoSection,
        HowSection,
        ContactSection
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700");
@import url("https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css");
@import url("https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

</style>
