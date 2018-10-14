<template>
    <div>
        <h1>{{title}}</h1>
        <div class="profiles">
            <Person
            :name="person.name"
            :img="person.img"
            :description="person.description"
            v-for="(person, index) in persons"
            :key="index"/>
        </div>
    </div>

</template>

<script>
import Person from "./Person";

export default {
    name: "WhoSection",
    data() {
        return {
            persons: [
                {
                    name: "Pepe",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                },
                {
                    name: "Pepe",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                },
                {
                    name: "Pepe",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                },
                {
                    name: "Pepe",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                },
            ],
        };
    },
    props: {
        title: String,
    },
    components: {
        Person,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profiles {
    display: block;
    margin: auto;
    position: relative;
    text-align: center;
    height: 50%;
    font-size: 1rem;
    bottom: 10%;
}
#who {
    background-image: url("../assets/FondoWho.jpg");
    background-position: center;
    background-size: cover;
    color: white;
    font-size: 10vw;
}
</style>
