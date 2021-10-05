<template>
    <div class="">
        <!-- <p>posts: auth={{auth}}</p> -->
        <!-- Composant de création de post -->
        <CreatePost :posts="posts" :auth="auth"/>
        <hr>
        <!-- Loop sur la liste de post pour créer un composant pour chaque -->
        <PostCard v-for="(post, i) of posts" :key="i" :postProp="post" :auth="auth" @delete-post="deletePost"/>
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
            // Vérifie si l'utilisateur est bien authentifié, s'il ne l'est pas, le redirige vers la page de connection
            if (!this.auth) {
                this.$router.push('login');
            } else {
                // S'il est connecté, lance la fonction de recupération des posts
                this.$http.get('posts')
                    .then(res => {
                        return res.json();
                    })
                    .then(posts => {
                        // l'objet retourné étant une map, on boucle dessus pour tout pusher dans le tableau en data
                        for (let post of posts) {
                            // ajoute un paramètres comments aux posts pour un meilleur affichage, nous remplirons ce tableau dans le composant PostCard
                            post["comments"] = [];
                            this.posts.push(post);

                        }
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
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
            deletePost(payload) {
                for (let i=0; i<this.posts.length; i++) {
                    if (this.posts[i].id == payload.PostId) {
                        this.posts.splice(i,1);
                    }
                }
            }
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