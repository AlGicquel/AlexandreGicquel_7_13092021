<template>
    <div class="">
        <CreatePost/>
        <hr>
        <PostCard v-for="(post, i) of posts" :key="post" :postProp="post"  :index="i"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import CreatePost from './CreatePost.vue'
    import PostCard from './PostCard.vue'

    export default {
        name: 'Posts',
        components: {
            CreatePost,
            PostCard
        },
        data () {
            return {
                comment:false
            }
        },
        methods: {
            toggleComment () {
                if (this.comment === true) {
                    this.comment = false;
                }
                if (this.comment === false) {
                    this.comment = true;
                }
            }
        },
        computed: {
            ...mapState(['posts'])
        }
    }
</script>

<style >
    * {
        text-align: left;
    }

    .post-card {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
    }

    p {
        text-align: justify;
    }

    

    .buttons {
        display: flex;
        margin: 10px 0;
        justify-content: space-between;
    }

</style>