<style scoped>
.section-content {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin: 0vh 0 0vh;
    padding: 160px 5vw 5vh;
}

.section-content .title {
    font-size: 5vh;
    color: black;
}

.section-content .section-iceberg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    padding: 5vh 0;
}

.section-content .section-services {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
}



</style>

<template>
    <div class="section-content">
        <h3 class="title">{{ title }}</h3>
        <div class="section-icebert">
            <TechIceberg></TechIceberg>
        </div>
        <div class="section-services">
            <ServiceItem v-for="(service, index) in services"
                :key="index"
                :item="service"/>
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
            technologies: {
                uxui: [],
                frontend: ["devicon-angularjs-plain", "devicon-vuejs-plain", "devicon-react-original"],
                backend: [],
                ml: [],
                devops: [],
            },
        };
    },
    components: {
        ServiceItem,
        TechIceberg,
    },
};
</script>