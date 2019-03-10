
<template>
    <div id="app">
        <NavBar/>
        <Index id="index"/>
        <WhatSection id="what" title="What is neiron dev?"/>
        <WhoSection id="who" title="Who?"/>
        <HowSection id="how"
            title="How we can help you?"
            background-text="how?"/>
        <WhereSection id="where"/>
        <ContactSection/>
    </div>
</template>

<script>
    import NavBar from "./components/NavBar";
    import Index from "./components/index/Index";
    import WhatSection from "./components/what/WhatSection";
    import WhoSection from "./components/who/WhoSection";
    import HowSection from "./components/how/HowSection";
    import ContactSection from "./components/contact/ContactSection";
    import WhereSection from "./components/where/WhereSection";

    export default {
        name: "App",
        components: {
            NavBar,
            Index,
            WhatSection,
            WhoSection,
            HowSection,
            ContactSection,
            WhereSection,
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
    overflow-x: hidden;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>
