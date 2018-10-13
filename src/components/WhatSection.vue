<template>
    <div>
        <div class="section-content">
            <h3 class="title">{{ title }}</h3>

            <div class="section-box-group">
                <div class="section-box"
                    v-for="(section, index) in sections" :key="index"
                    :style="{ background: section.background }">
                    <h4 class="box-title">{{ section.title }}</h4>
                    <p class="box-content">{{ section.content }}</p>
                </div>
            </div>
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
    },
    data() {
        return {
            sections: [
                {
                    title: "Formation",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus laoreet est, sed consectetur mi pulvinar vitae.",
                    background: "linear-gradient(45deg, #1D1E2C 0%, #59656F 100%)",
                },
                {
                    title: "Community",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus laoreet est, sed consectetur mi pulvinar vitae.",
                    background: "linear-gradient(45deg, #427867 0%, #58AB99 100%)",
                },
                {
                    title: "Development",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus laoreet est, sed consectetur mi pulvinar vitae.",
                    background: "linear-gradient(45deg, #FFAA5A 0%, #FF785A 100%)",
                },
            ]
        }
    }
}
</script>

<style>
    .section-content {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 74%;
        height: auto;
        min-height: 55vh;
        margin: 20vh 8% 40vh;
        padding: 5vh 5vw;
        background: linear-gradient(45deg, #dad4ff 0%,#7b4888de 100%);
        border-radius: .5vw;
        box-shadow: 10px 10px 80px -10px rgba(0,0,0,0.75);
    }

    .section-content .title {
        font-size: 5vh;
        color: white;
    }

    .section-content .section-box-group {
        display: inline-block;
        vertical-align: top;
        position: absolute;
        bottom: -15vh;
        left: 10vw;
        width: 100%;
        height: auto;

        display: flex;
        justify-content: space-around;
        align-content: stretch;
    }

    .section-content .section-box-group .section-box {
        display: inline-block;
        vertical-align: top;
        width: 28%;
        height: auto;
        min-height: 40vh;
        margin: 3vh 2vw;
        padding: 2vh 1vw;
        height: auto;
        color: white;
        border-radius: .5vw;
        box-shadow: 10px 20px 80px -10px rgba(0,0,0,0.75);
    }

    .section-content .section-box-group .section-box .box-title {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: auto;
        font-size: 2.2vh;
        margin-bottom: 3vh;
    }

    .section-content .section-box-group .section-box .box-content {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: auto;
        font-size: 18px;
    }
</style>

