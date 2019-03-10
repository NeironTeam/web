<style scoped>
.section-content {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 160px 5vw 0;
    margin-bottom: -1vh; /* fix white line */
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
    width: 100vw;
    margin-left: -5vw;
    padding: 10vh 5vw 5vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
}

.section-content .section-technologies {
    display: flex;
    width: 100vw;
    margin-left: -5vw;
    padding: 0 5vw 10vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background: #1f61c4;
}

.line{
    content:'';
    position: absolute;
    height: 50vh;
    width: 120vw;
    left: -10vw;
    top: 0vh;
    z-index: -1;
    -ms-transform: rotate(-5deg);
    -webkit-transform: rotate(-5deg);
    transform: rotate(-5deg);
    background-color: rgb(136, 55, 206);/*(206, 173, 232);*/
    box-shadow: 0px 5px 50px -10px rgba(0,0,0,0.75);
}

.section-content .section-technologies .service {
    color: white;
    background: transparent;
    box-shadow: none;
    margin: 0vh 1vw;
    padding: 1vh 2vw;
}


</style>

<template>
    <div class="section-content">
        <div class="line"></div>
        <h3 class="title">{{ title }}</h3>
        <div class="section-services">
            <ServiceItem v-for="(service, index) in services"
                :key="index"
                :item="service"/>
        </div>
        <div class="section-icebert">
            <TechIceberg></TechIceberg>
        </div>
        <div class="section-technologies">
            <ServiceItem v-for="(technology, index) in technologies"
                :key="index"
                :item="technology"/>
        </div>
    </div>
</template>

<script>
import ServiceItem from "./ServiceItem";
import TechIceberg from "./TechIceberg";

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            services: [
                {
                    icon: "icon-user-following",
                    title: "Customised service",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    icon: "icon-wallet",
                    title: "Tighter budget",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    icon: "icon-layers",
                    title: "Last technologies",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
            ],
            technologies: [
                {
                    icon: "icon-screen-smartphone",
                    title: "Conversational bots",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    icon: "icon-screen-desktop",
                    title: "Web development",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    icon: "icon-organization",
                    title: "Backend & DevOps",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
            ]
        };
    },
    components: {
        ServiceItem,
        TechIceberg,
    },
};
</script>