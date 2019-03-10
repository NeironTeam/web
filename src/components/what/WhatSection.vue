<style scoped>

    .container{
        height: 100vh;
        width: 100%;
    }

    .section-content {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 74%;
        height: auto;
        min-height: 45vh;
        margin: 20vh 8% 40vh;
        padding: 5vh 5vw;
        background: linear-gradient(45deg, #dad4ff 0%,#7b4888de 100%);
        border-radius: .8vh;
        box-shadow: 10px 10px 80px -10px rgba(0,0,0,0.75);

        /* background

        background-image: url("../../assets/what-background.jpg");
        background-repeat: no-repeat;
        background-position: center;  */
    }

    .background-image{
        background:
            linear-gradient(45deg, #dad4ff 0%,#7b4888de 100%),
            url("../../assets/what-background.jpg");
        background-repeat: no-repeat;
        background-position: center;
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
        position: relative;
        width: 28%;
        height: auto;
        min-height: 40vh;
        margin: 3vh 2vw;
        padding: 2vh 1vw;
        height: auto;
        color: white;
        border-radius: .8vh;
        box-shadow: 10px 20px 80px -10px rgba(0,0,0,0.75);
    }

    .section-content .section-box-group .section-box .box-icon {
        position: absolute;
        bottom: 2vh;
        right: 1vw;
        font-size: 10vh;
        opacity: 0.3;
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

    @media only screen and (max-width: 978px) {
        .container{
            height: auto;
        }

        .section-content {
            min-height: 0;
        }
        .section-content .section-box-group { 
            position: relative;
            flex-wrap: wrap;
        }
        .section-content .section-box-group .section-box { 
            width: 96%;
            min-height: 0;
            margin: 1.5vh 2vw;
            padding: 3vh 3vw;
        }
    }

</style>

<template>
    <div class="container">
        <div class="section-content background-image" id="get-static">
            <h3 class="title">{{ title }}</h3>

            <div class="section-box-group">
                <div class="section-box"
                    v-scroll-reveal="{ delay: 200*index }"
                    v-for="(section, index) in sections" :key="index"
                    :style="{ background: section.background }">
                        <i class="box-icon" :class="section.icon"></i>
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
    mounted() {
    },
    data() {
        return {
            sections: [
                {
                    title: "Formation",
                    icon: "icon-rocket",
                    content: "Our projects are focused to expand each individual knowledge. We want to learn, and become more competent profesionals creating great things in our way.",
                    background: "linear-gradient(45deg, #1D1E2C 0%, #59656F 100%)",
                },
                {
                    title: "Community",
                    icon: "icon-globe",
                    content: "Neiron dev engloba una comunidad que comparten la idea de progreso y la creación de un grupo de trabajo donde todos se sientan cómodos. La búsqueda de objetivos comunes y de superación.",
                    background: "linear-gradient(45deg, #427867 0%, #58AB99 100%)",
                },
                {
                    title: "Development",
                    icon: "icon-bulb",
                    content: "Cada proyecto consiste en una solución adaptada a la actualidad, que ofrezca crecimiento a los desarrollados con la puesta en prática de nuevas tecnologías y que pueda tener interés para algún conjunto de personas.",
                    background: "linear-gradient(45deg, #FFAA5A 0%, #FF785A 100%)",
                },
            ]
        }
    }
}
</script>