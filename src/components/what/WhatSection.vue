<style scoped>
    .title{
        color: white;
    }

    .line:before {
        content:'';
        position: absolute;
    }

    .line-a:before {
        height: 50vh;
        width: 120vw;
        left: -10vw;
        top: 17vh;
        z-index: -1;
        -ms-transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
        background-color: rgb(218, 34, 52);/*(206, 173, 232);*/
        box-shadow: 0px 5px 50px -10px rgba(0,0,0,0.75);
    }

    .line-b:before{
        height: 45vh;
        width: 90vw;
        left: -10vw;
        top:7vh;
        z-index: -2;
        -ms-transform: rotate(5deg);
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
        background-color: rgb(136, 55, 206);/*rgb(242,178,178);*/
    }


    .section-content {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        height: auto;
        min-height: 50vh;
        margin: 0vh 0 0vh;
        padding: 100px 5vw 5vh;
    }

    .section-content .title {
        font-size: 5vh;
        color: white;
    }

    .section-content .section-iceberg {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        padding: 5vh 0;
    }

    .section-content .section-services {
        display: flex;
        margin: 0 auto;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        max-width: 1300px;
    }


    @media only screen and (max-width: 978px) {
        .container{
            height: auto;
        }

        .section-content {
            min-height: 0;
        }
        .section-content .section-services {
            position: relative;
            flex-wrap: wrap;
        }

        .line-a:before{
            height: 100vh;
            width: 150vw;
            left: -20vw;
            top: 30vh;
        }

        .line-b:before{
            height: 45vh;
            width: 120vw;
            left: -10vw;
            top:7vh;
        }
    }

    @media only screen and (min-width: 1400px) {
        .line-b:before{
            height: 45vh;
            width: 80vw;
            left: -10vw;
            top:7vh;
        }
    }


</style>

<template>
    <div class="section-content">
        <h3 class="title">{{ title }}</h3>
        <div class="line line-a"> </div>
        <div class="line line-b"> </div>
        <!-- <div class="section-box-group">
            <div class="section-box"
                v-scroll-reveal="{ delay: 200*index }"
                v-for="(section, index) in sections" :key="index"
                :style="{ background: section.background }">
                    <i class="box-icon" :class="section.icon"></i>
                    <h4 class="box-title">{{ section.title }}</h4>
                    <p class="box-content">{{ section.content }}</p>
            </div>
        </div> -->
        <div class="section-services">
            <ServiceItem v-for="(service, index) in sections"
                :key="index"
                :item="service"/>
        </div>
    </div>
</template>

<script>

import ServiceItem from "./../how/ServiceItem";

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
    },
    components: {
        ServiceItem
    },
}
</script>