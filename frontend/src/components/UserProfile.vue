<template>
    <div class="">
        <h1>{{ users[0].username }}</h1>
        <CreatePost/>
        <hr>
        <div class="posts">
            <div class="post" v-for="(id, i) of users[0].postsIds" :key="i">
                <PostCard :postProp="posts[id]" :index="i"/>

            </div>
        </div>
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
                // comment:false
            }
        },
        methods: {
            
        },
        computed: {
            ...mapState(['users']),
            ...mapState(['posts'])

        }
    }
</script>