<template>
    <div class="post-card">
        <h2>{{ postProp.author }}</h2>
        <p>{{ postProp.text }}</p>

        <div class="buttons">
            <button class="btn btn-outline-danger">Like</button>
            <button class="btn btn-outline-danger" @click="toggleNewComment" id="comment-button">Comment</button>
        </div>
        <div class="comments" v-if="postProp.comments.length !== 0">
            <h3>Comments</h3>
            <div class="comment" v-for="comment of postProp.comments" :key="comment">
                <h4>{{ comment.author }}</h4>
                <p>{{ comment.text }}</p>
            </div>
        </div>
        <div class="comment-form" :id="index">
            <CreatePost v-if="comment"/>
        </div>
    </div>
</template>

<script>

    import CreatePost from './CreatePost.vue'

    export default {
        name: 'PostCard',
        data () {
            return {
                comment: false,
            }

        },
        created() {
            
        },
        methods: {
            toggleNewComment () {
                this.comment = !this.comment;
                this.toggleActive();
            },
            toggleActive() {
                document.getElementById(`${this.index}`).classList.toggle('active');

            }
        },
        props:{
            postProp: {
                author: String,
                text: String,
                comments: Array
            },
            index: Number
        },
        components: {
            CreatePost
        }

    }


    
</script>

<style scoped>
    .post-card {
        transition: 0.3s ease-in-out;
    }

    .btn-outline-danger {
        background-color: white;
    }

    .comment-form {
        transform: translateY(-100px);
        opacity: 0;
        transition: 0.2s ease-out;
    }

    .active {
        transform: translateY(0);
        opacity: 1;
        transition: 0.2s ease-out;

    }
</style>
