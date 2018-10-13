<template>
    <div id="app">
        <NavBar/>
        <Index/>
    </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Index from "./components/Index";

export default {
    name: "App",
    components: {
        NavBar,
        Index
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}
</style>
