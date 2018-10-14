<style scoped>
.section-content {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    height: auto;
    min-height: 100vh;
    margin: 0vh 0 20vh;
    padding: 160px 5vw 5vh;
    background-image: url("../assets/how-background.jpg");
    background-position: center;
    background-size: cover;
}

.section-content .title {
    font-size: 5vh;
    color: white;
}

.section-content .section-columns {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
    margin: 10vh 0;

    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.section-content .section-columns .section-column {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    height: auto;
}

.section-content .section-columns .section-column.services {
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
}

.section-content .section-columns .section-column.iceberg-graphic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

<template>
    <div class="section-content">
        <h3 class="title">{{ title }}</h3>
        <div class="section-columns">
            <div class="section-column services">
                <ServiceItem v-for="(service, index) in services"
                    :key="index"
                    :item="service"/>
            </div>
            <div class="section-column iceberg-graphic">
                <TechIceberg :technologies="technologies"/>
            </div>
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