<template>
    <div>
        <h1>{{title}}</h1>
        <div class="profiles">
            <Person
            v-scroll-reveal="{ delay: 200 }"
            :name="person.name"
            :img="person.img"
            :position="person.position"
            :description="person.description"
            :socialNetworks="person.socialNetworks"
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
                    position: "Data Scientist",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                    socialNetworks: [
                        {
                            text: "Twiter",
                            icon: "icon-social-twitter",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#00aced",
                            },
                        },
                        {
                            text: "Linkdin",
                            icon: "icon-book-open",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#0077B5",
                            },
                        },
                        {
                            text: "GitHub",
                            icon: "devicon-github-plain",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#353535",
                            },
                        },
                    ],
                },
                {
                    name: "Pepe",
                    position: "Data Scientist",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                    socialNetworks: [
                        {
                            text: "Twiter",
                            icon: "icon-social-twitter",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#00aced",
                            },
                        },
                        {
                            text: "Linkdin",
                            icon: "icon-book-open",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#0077B5",
                            },
                        },
                        {
                            text: "GitHub",
                            icon: "devicon-github-plain",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#353535",
                            },
                        },
                    ],
                },
                {
                    name: "Pepe",
                    position: "Data Scientist",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                    socialNetworks: [
                        {
                            text: "Twiter",
                            icon: "icon-social-twitter",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#00aced",
                            },
                        },
                        {
                            text: "Linkdin",
                            icon: "icon-book-open",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#0077B5",
                            },
                        },
                        {
                            text: "GitHub",
                            icon: "devicon-github-plain",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#353535",
                            },
                        },
                    ],
                },
                {
                    name: "Pepe",
                    position: "Data Scientist",
                    description:
                        "Est tempor aliquip dolore esse commodo eiusmod mollit ut fugiat est velit proident mollit.",
                    img: "https://images.unsplash.com/photo-1484186139897-d5fc6b908812",
                    socialNetworks: [
                        {
                            text: "Twiter",
                            icon: "icon-social-twitter",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#00aced",
                            },
                        },
                        {
                            text: "Linkdin",
                            icon: "icon-book-open",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#0077B5",
                            },
                        },
                        {
                            text: "GitHub",
                            icon: "devicon-github-plain",
                            link: "twitter.com",
                            styles: {
                                backgroundColor: "#353535",
                            },
                        },
                    ],
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
h1 {
    font-size: 10vw;
    padding: 50px 0px 0px 100px;
}
.profiles {
    display: block;
    margin: auto;
    position: relative;
    text-align: center;
    height: 50%;
    font-size: 1rem;
    bottom: 10%;
    margin-top: 8vw;
}

#who {
    background-image: url("../../assets/FondoWho.jpg");
    background-position: center;
    background-size: cover;
    color: white;
    padding-bottom: 15vh;
}
@media only screen and (max-width: 1300px) {
    h1 {
        font-size: 8vw;
    }
}
@media only screen and (max-width: 978px) {
    h1 {
        font-size: 10vw;
    }
}
@media only screen and (max-width: 650px) {
    h1 {
        font-size: 12vw;
    }
}
</style>
