<template>
    <div :style="styles" class="btn-round img__wrap">
        <a
            :class="icon"
            class="social-link img__img"
            :href="link">
        </a>
        <div class="img__description_layer">
            <p class="img__description">{{text}}</p>
        </div>
    </div>

</template>

<script>
export default {
    name: "SocialLink",
    props: {
        text: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
        },
        link: String,
        styles: Object,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social-link {
    text-decoration: none;
}
.btn-round {
    border-radius: 999em;
    width: 50px;
    height: 50px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    line-height: 1;
    font-size: 25px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin: 20px 15px;
    background-color: #4545db;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0.75;
}
.btn-round:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    opacity: 1;
}

.btn-round a {
    position: absolute;
    left: 0;
    top: 24%;
    height: 100%;
    width: 100%;
    text-align: center;
    color: #fff;
}
.img__wrap {
    position: relative;
}

.img__description_layer {
    position: absolute;
    top: -6em;
    bottom: 0;
    left: 0;
    right: 0;
    color: rgba(0, 0, 0,0.6);
    visibility: hidden;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5em;

    /* transition effect. not necessary */
    transition: opacity 0.2s, visibility 0.2s;
}

.img__wrap:hover .img__description_layer {
    visibility: visible;
    opacity: 1;
}

.img__description {
    transition: 0.2s;
    transform: translateY(1em);
}

.img__wrap:hover .img__description {
    transform: translateY(0);
}
</style>
