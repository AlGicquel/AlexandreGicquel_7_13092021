<template>
    <div class="">
        <div class="post-card" v-for="post of posts" :key="post">
            <h2>{{ post.author }}</h2>
            <p>{{ post.text }}</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Posts',
        data () {
            return {
                
            }
        },
        computed: {
            ...mapState(['posts'])
        }
    }
</script>

<style scoped>
    * {
        text-align: left;
    }

    .post-card {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
    }
</style>