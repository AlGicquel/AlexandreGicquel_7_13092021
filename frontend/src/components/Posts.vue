<template>
    <div class="">
        <CreatePost/>
        <hr>
        <!-- <div class="post-card" v-for="post of posts" :key="post">
            <h2>{{ post.author }}</h2>
            <p>{{ post.text }}</p>

            <div class="buttons">
                <button class="btn btn-outline-danger">Like</button>
                <button class="btn btn-outline-danger" @click="toggleComment">Comment</button>
            </div>
            <h3>Comments</h3>
            <div class="comment" v-for="comment of post.comments" :key="comment">
                <h4>{{ comment.author }}</h4>
                <p>{{ comment.text }}</p>
            </div>
            <CreatePost v-if="comment === true"/>
        </div> -->
        
        <PostCard v-for="post of posts" :key="post" :postProp="post"  />
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

<style>
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

    .btn-outline-danger {
        background-color: white;
    }

    .buttons {
        display: flex;
        margin: 10px 0;
        justify-content: space-between;
    }

</style>