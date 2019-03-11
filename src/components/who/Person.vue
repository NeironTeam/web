<template>
    <div class="person">
        <RoundImage class="picture"  :img="img"/>
        <div class="card">
            <h2 class="name">{{name}}</h2>
            <h4 class="position">{{position}}</h4>
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
	</div>

</template>

<script>
import SocialLink from "./SocialLink";
import RoundImage from "./RoundImage";

export default {
    name: "Person",
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
        position: {
            type: String,
            required: true,
        },
        socialNetworks: Array,
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
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    margin: 4rem 2rem;
    
}

.picture{
    position: relative;
    z-index: 2;
}

.card {
    width: 100%;
    background-color: white;
    border-radius: .8vh;
    /* box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
    z-index: 1;
}

.description {
    text-align: center;
    padding: 1em;
    color: #353535;
}
.position {
    text-align: center;
    padding: 0.5em;
    color: #353535;
}
.name {
    text-align: center;
    color: #353535;
    margin-top: 1em;
}
.social-links {
    text-align: center;
    margin-bottom: 4em;

}

</style>
