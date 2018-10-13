<template>
    <div>
        <div class="section-content">
            <h3 class="title">{{ title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhatSection",
    props: {
        title: {
            type: String,
            default: true
        }
    }
}
</script>

<style>
    .section-content {
        display: inline-block;
        vertical-align: top;
        width: 84%;
        height: auto;
        min-height: 80vh;
        margin: 20vh 8%;
        padding: 5vh 5vw;
        background: linear-gradient(45deg, #dad4ff 0%,#7b4888de 100%);
        border-radius: .5vw;
        box-shadow: 10px 10px 80px -10px rgba(0,0,0,0.75);
    }

    .section-content .title {
        font-size: 5vh;
        color: white;
    }
</style>

