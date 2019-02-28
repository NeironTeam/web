<style scoped>
    .service {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: auto;
        margin: 5vh 1vw;
        padding: 3vh 2vw;
        border-radius: .8vh;
        background: white;
        text-align: center;
        box-shadow: 10px 20px 50px -15px rgba(0,0,0,0.75);
    }

    .service .service-icon { font-size: 3em; }
    .service .service-title { 
        font-size: 1.6em; 
        margin: 3vh 0;
    }

    .service .service-content { 
        text-align: left;
        font-size: 18px; 
    }
</style>

<template>
    <div class="service">
        <i class="service-icon" :class="item.icon"></i>
        <h4 class="service-title">{{ item.title }}</h4>
        <p class="service-content">{{ item.content }}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>