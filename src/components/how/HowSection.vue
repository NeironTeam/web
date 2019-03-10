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
    width: 100vw;
    margin-left: -5vw;
    padding: 10vh 5vw 5vh;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background: white;
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

</style>

<template>
    <div class="section-content">
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
                    title: "Customised service",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    icon: "icon-screen-desktop",
                    title: "Tighter budget",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    icon: "icon-organization",
                    title: "Last technologies",
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