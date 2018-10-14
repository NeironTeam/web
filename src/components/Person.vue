<template>
    <div class="person">
        <RoundImage :img="img"/>
        <h2 class="name">{{name}}</h2>
        <p class="description">{{description}}</p>
        <div class="social-links">
            <SocialLink
            :styles="socialLink.styles"
            :icon="socialLink.icon"
            :text="socialLink.text"
            :link="socialLink.link"
            v-for="(socialLink, index) in socialNetworks"
            :key="index"/>
        </div>
	</div>

</template>

<script>
import SocialLink from "./SocialLink";
import RoundImage from "./RoundImage";

export default {
    name: "Person",
    data() {
        return {
            socialNetworks: [
                {
                    text: "",
                    icon: "icon-social-twitter",
                    link: "twitter.com",
                    styles: {
                        backgroundColor: "#DB36DB",
                    },
                },
                {
                    text: "",
                    icon: "icon-social-twitter",
                    link: "twitter.com",
                    styles: {
                        backgroundColor: "#4536DB",
                    },
                },
            ],
        };
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
    components: {
        RoundImage,
        SocialLink,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person {
    display: inline-block;
    width: 20%;
    margin: 3rem 2rem;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.description {
    text-align: center;
    position: relative;
    bottom: 12%;
    padding: 1em;
}
.name {
    text-align: center;
    margin-bottom: 1em;
    color: #353535;
    margin-top: 1em;
}
.social-links {
    text-align: center;
    position: relative;
    bottom: 14%;
}
@media only screen and (max-width: 978px) {
    .person {
        width: 35%;
    }
}
@media only screen and (max-width: 650px) {
    .person {
        width: 80%;
    }
}
</style>
