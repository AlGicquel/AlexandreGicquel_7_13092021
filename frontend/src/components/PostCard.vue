<template>
    <div class="post-card">
        <div v-if="!message.isEmpty" class="my-0 ">
            <!-- Affichage du post en lui-meme et de son auteur -->
            <h2 class="comment-author">{{ fullName }}</h2>
            <p class="comment-text">{{ postProp.text }}</p>
            <p>id:{{postProp.id}}</p>
            <p>UserId:{{postProp.UserId}}</p>
            <p>level {{$store.state.level}}</p>

            <div class="like-comment-infos">
                <!-- <span class="likes-comments-short">{{ postProp.likes.length }} likes</span> -->
            </div>


            <div class="buttons">
                <button class="btn btn-outline-danger">J'aime</button>
                <!-- Bouton qui fait apparaitre et disparaitre le composant CreateComment a la fin de la list de commentaires -->
                <button class="btn btn-outline-danger" @click="toggleNewComment" id="comment-button">Commenter</button>
                <!-- Bouton de suppression du post qui ne s'affiche que si l'utilisateur est l'auteur du post ou si c'est un admin -->
                <button class="btn btn-danger" 
                    v-if="postProp.UserId == UserId || $store.state.level == 1" 
                    @click="deletePost">
                        Supprimer
                </button>
            </div>

            <!-- Loop sur la list de commentaire du post, l'affiche si elle n'est pas vide -->
            <div class="comments" v-if="postProp.comments.length !== 0">
                <h3>Commentaires ({{ postProp.comments.length }})</h3>
                <Comment  v-for="(comment, i) of postProp.comments" :key="i" :comment="comment" :auth="auth"/>
            </div>



            <!-- affiche et fait disparaitre le composant de commentaire -->
            <div class="comment-form" :id="'postId-'+postProp.id">
                <CreateComment v-if="newComment" :postId="postProp.id" :comments="postProp.comments" :auth="auth"/>
            </div>
        </div>
        <p v-if="!message.isEmpty" class="py-0">{{message}}</p>
    </div>
</template>

<script>

    import CreateComment from './CreateComment.vue'
    import Comment from './Comment.vue'

    export default {
        name: 'PostCard',
        data () {
            return {
                // gère l'affichage de CreateComment
                newComment: false,
                fullName: '',
                comments: [],
                UserId: 0,
                message: ''
            }

        },
        created() {
            this.UserId = sessionStorage.UserId;

            // Récupère sur le serveur le nom de l'auteur du post
            this.$http.get('users/usernameById/' + this.postProp.UserId)
                    .then(res => {
                        return res.json();
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    })
                    .then(res => {
                        this.fullName += res.firstName + ' ' + res.lastName;
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    })

            // Récupère sur le serveur tous les commentaire associés au post
            this.$http.get('comments/allByPostId/' + this.postProp.id)
                    .then(res => {
                        return res.json();
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    })
                    .then(comments => {
                        for (let comment of comments) {
                            // push les commentaires récupérés dans le paramètres comments du post pour un meilleur affichage
                            this.postProp.comments.push(comment);
                        }
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    });
        },
        methods: {
            // gère l'affichage et l'animation de la div de nouveau commentaire
            toggleNewComment () {
                this.newComment = !this.newComment;
                document.getElementById(`postId-${this.postProp.id}`).classList.toggle('active');
            },
            // supprime le post
            deletePost() {
                this.$http.delete('posts/'+ this.postProp.id)
                    .then(res => {
                        this.message = res.body.message;
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    });

            },
        },
        props:{
            postProp: {
                UserId: String,
                text: String,
            },
            level: Number,
            auth: Boolean
        },
        components: {
            CreateComment,
            Comment
        }

    }


    
</script>

<style scoped>
    .post-card {
        transition: 0.3s ease-in-out;
        border-radius: 20px;
        /* background-color: rgba(255, 214, 214, 1); */
        background-color: #fff;
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px gainsboro;
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

    h2 {
        font-size: x-large;
        
    }
</style>
