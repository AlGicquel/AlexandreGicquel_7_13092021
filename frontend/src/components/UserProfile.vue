<template>
    <div class="">
        <!-- Composant de page de profil -->
        <h1></h1>
        <CreatePost :auth="auth"/>
        <hr>
        <div class="posts">
            <PostCard v-for="(post, i) of posts" :key="i" :postProp="post"  :index="i" :auth="auth"/>
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
            // Vérifie si l'utilisateur est bien connecté, s'il ne l'est pas, le redirige vers la page de connection
            if (!this.auth) {
                this.$router.push('login');
            } else {
                // S'il est connecté, lance la fonction de récupératon des posts dont il est l'auteur
                this.$http.get('posts/allByUserId/' + sessionStorage.UserId)
                    .then(res => {
                        return res.json();
                    })
                    .then(posts => {
                        // l'objet retourné étant une map, on boucle dessus pour tout pusher dans le tableau en data
                        for (let post of posts) {
                            // ajoute un paramètres comments aux posts pour un meilleur affichage, nous remplirons ce tableau dans le composant PostCard
                            post["comments"] = [];
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
            auth: Boolean,
            level: Number
        },
        methods: {
            
        },
        computed: {

        }
    }
</script>