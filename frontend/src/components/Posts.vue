<template>
    <div class="">
        <!-- <p>posts: auth={{auth}}</p> -->
        <!-- Composant de création de post -->
        <CreatePost/>
        <hr>
        <!-- Loop sur la liste de post pour créer un composant pour chaque -->
        <PostCard v-for="(post, i) of posts" :key="i" :postProp="post"  :index="i"/>
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
                this.$router.push('login');
            } else {
                this.$http.get('posts')
                    .then(res => {
                        return res.json();
                    })
                    .then(posts => {
                        for (let post of posts) {
                            this.posts.push(post);
                        }
                    });
            }
        },
        data () {
            return {
                comment:false,
                posts: []
            }
        },
        props: {
            auth: Boolean,
            level: Number
        },
        methods: {
            
        },
        computed: {
            
        }
    }
</script>

<style >
    * {
        text-align: left;
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