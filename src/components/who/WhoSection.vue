<template>
    <div>
        <h1>{{title}}</h1>
        <div class="profiles">
            <div v-for="(row, index) in rows" :key="index" class="row-profiles">
                <Person
                :name="person.name"
                :img="person.img"
                :position="person.position"
                :description="person.description"
                :socialNetworks="person.socialNetworks"
                v-for="(person, index) in row"
                :key="index"/>
                </div>
            
        </div>
    </div>
</template>

<script>
import Person from "./Person";

export default {
    name: "WhoSection",
    data() {
        return {
            rows: [
                [
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
                                
                            },
                            {
                                text: "Linkdin",
                                icon: "icon-social-linkedin",
                                link: "twitter.com",
                                
                            },
                            {
                                text: "GitHub",
                                icon: "devicon-github-plain",
                                link: "twitter.com",
                                
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
                                
                            },
                            {
                                text: "Linkdin",
                                icon: "icon-social-linkedin",
                                link: "twitter.com",
                                
                            },
                            {
                                text: "GitHub",
                                icon: "devicon-github-plain",
                                link: "twitter.com",
                                
                            },
                        ],
                    },
                ],
                [
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
                                
                            },
                            {
                                text: "Linkdin",
                                icon: "icon-social-linkedin",
                                link: "twitter.com",
                                
                            },
                            {
                                text: "GitHub",
                                icon: "devicon-github-plain",
                                link: "twitter.com",
                                
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
                                
                            },
                            {
                                text: "Linkdin",
                                icon: "icon-social-linkedin",
                                link: "twitter.com",
                                
                            },
                            {
                                text: "GitHub",
                                icon: "devicon-github-plain",
                                link: "twitter.com",
                                
                            },
                        ],
                    },
                ]
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
    font-size: 5vh;
    padding: 50px 0px 0px 100px;
}
.profiles {
    display: flex;
    flex-flow: row wrap;
    margin: auto;
    text-align: center;
    font-size: 1rem;
    bottom: 10%;
    margin-top: 8vw;
    justify-content: space-around;
    
}
.row-profiles {
    display: flex;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    flex-basis: 50%;
}

</style>
