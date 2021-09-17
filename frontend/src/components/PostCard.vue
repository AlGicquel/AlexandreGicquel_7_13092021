<template>
    <div class="post-card">
        <!-- <h2>Post</h2> -->
        <h2>{{ postProp.author }}</h2>
        <p>{{ postProp.text }}</p>

        <div class="buttons">
            <button class="btn btn-outline-danger">Like</button>
            <button class="btn btn-outline-danger" @click="comment = !comment">Comment</button>
        </div>
        <div class="comments" v-if="postProp.comments.length !== 0">
            <h3>Comments</h3>
            <div class="comment" v-for="comment of postProp.comments" :key="comment">
                <h4>{{ comment.author }}</h4>
                <p>{{ comment.text }}</p>
            </div>
        </div>
        <CreatePost v-if="comment"/>
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
    props:{
        postProp: {
            author: String,
            text: String,
            comments: Array
        }
    },
    components: {
        CreatePost
    }
}
</script>
