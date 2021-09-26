<template>
    <div class="">
        <h1></h1>
        <CreatePost/>
        <hr>
        <div class="posts">
            <!-- <div class="post" v-for="(id, i) of users[0].postsIds" :key="i">
                <PostCard :postProp="posts[id]" :index="i"/>
                
            </div> -->
            <PostCard/>
        </div>
    </div>
</template>

<script>
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

        }
    }
</script>