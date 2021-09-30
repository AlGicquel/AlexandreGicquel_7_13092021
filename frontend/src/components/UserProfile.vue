<template>
    <div class="">
        <h1></h1>
        <CreatePost/>
        <hr>
        <div class="posts">
            <!-- <div class="post" v-for="(id, i) of users[0].postsIds" :key="i">
                <PostCard :postProp="posts[id]" :index="i"/>
                
            </div> -->
        <PostCard v-for="(post, i) of posts" :key="i" :postProp="post"  :index="i"/>
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
        created() {
            if (!this.auth) {
                this.$router.push('login')
            } else {
                this.$http.get('posts/allByUserId/' + sessionStorage.UserId)
                    .then(res => {
                        console.log(res)
                        return res.json();
                    })
                    .then(posts => {
                        for (let post of posts) {
                            this.posts.push(post)
                        }
                    });
            }
        },
        data () {
            return {
                posts: []
            }
        },
        props: {
            auth: Boolean
        },
        methods: {
            
        },
        computed: {

        }
    }
</script>