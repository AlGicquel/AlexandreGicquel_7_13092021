<template>
    <div class="post-card">
        <div class="my-0 ">
            <!-- Affichage du post en lui-meme et de son auteur -->
            <img :src="postProp.imageUrl" alt="" class="post-image card-img-top" v-if="postProp.imageUrl">

            <div class="post-card-content mt-0">

                <h2 class="comment-author">{{ fullName }}</h2>
                <p class="comment-text">{{ postProp.text }}</p>
                <p v-if="postProp.likes.length > 0">{{postProp.likes.length}} likes</p>
                <p>{{postProp.likes}}</p>

                <div class="like-comment-infos">
                    <!-- <span class="likes-comments-short">{{ postProp.likes.length }} likes</span> -->
                </div>


                <div class="buttons">
                    <button class="btn btn-outline-danger" @click="like" v-if="!userHasLiked">J'aime</button>
                    <button class="btn btn-danger" @click="deleteLike" v-if="userHasLiked">Je n'aime plus</button>
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
                    <Comment  v-for="(comment, i) of postProp.comments" :key="i" :comment="comment" :auth="auth" @delete-comment="deleteCommment"/>
                </div>



                <!-- affiche et fait disparaitre le composant de commentaire -->
                <div class="comment-form" :id="'postId-'+postProp.id">
                    <CreateComment v-if="newComment" :postId="postProp.id" :comments="postProp.comments" :auth="auth"/>
                </div>
            </div>
        </div>
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
                likes: [],
                userHasLiked: false
            }

        },
        created() {
            this.UserId = sessionStorage.UserId;
            this.userHasLiked = this.postProp.likes.includes(parseInt(this.UserId));
            // this.likes = postProp.likes;

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
                    })

            // Récupère sur le serveur tous les commentaires associés au post
            this.$http.get('comments/allByPostId/' + this.postProp.id)
                    .then(res => {
                        return res.json();
                    }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    })
                    .then(comments => {
                        // vide le tableau de commentaire pour éviter les doublons
                        this.postProp.comments = [];
                        for (let comment of comments) {
                            // push les commentaires récupérés dans le paramètres comments du post pour un meilleur affichage
                            this.postProp.comments.push(comment);
                        }
                    });

            // Récupère sur le serveur tous les likes associés au post
            // this.$http.get('likes/allByPostId/' + this.postProp.id)
            //         .then(res => {
            //             return res.json();
            //         }, error => console.log(error))
            //         .then(likes => {
            //             this.postProp.likes = [];
            //             for (let like of likes) {
            //                 this.postProp.likes.push(like.UserId);
            //             }
            //             this.userHasLiked = this.postProp.likes.includes(parseInt(this.UserId));
            //         })
        },
        methods: {
            // gère l'affichage et l'animation de la div de nouveau commentaire
            toggleNewComment () {
                this.newComment = !this.newComment;
                document.getElementById(`postId-${this.postProp.id}`).classList.toggle('active');
            },
            // supprime le post
            deletePost() {
                if (confirm('Voulez-vous vraiment supprimer ce post ?')) {
                    this.$http.delete('posts/'+ this.postProp.id)
                        .then(() => {
                            this.$emit('delete-post', {PostId: this.postProp.id});
                        });
                }

            },
            deleteCommment(payload) {
                for (let i=0; i<this.postProp.comments.length; i++) {
                    if (this.postProp.comments[i].id == payload.CommentId) {
                        this.postProp.comments.splice(i,1);
                    }
                }
            },
            like() {
                // if(!this.userHasLiked) {
                //     this.$http.post('likes', {
                //         UserId: parseInt(sessionStorage.UserId),
                //         PostId: this.postProp.id
                //     }).then(res => {
                //         this.postProp.likes.push(res.body.UserId);
                //         this.userHasLiked = true;
                //     })
                // }

                if (!this.userHasLiked) {
                    this.$http.post('posts/like/' + this.postProp.id, {
                        UserId: parseInt(this.UserId)
                    }).then(() => {
                        this.postProp.likes.push(parseInt(this.UserId));
                        this.userHasLiked = true;
                    })
                }
            },
            deleteLike() {
                if (this.userHasLiked) {
                    // this.$http.delete('likes/' + sessionStorage.UserId + '/' + this.postProp.id)
                    // .then(() => {
                    //     for (let i=0; i < this.postProp.likes.length; i++) {
                    //         if (this.postProp.likes[i] == this.UserId) {
                    //             this.postProp.likes.splice(i,1)
                    //         }
                    //     }
                    //     this.userHasLiked = false;
                    // })

                    this.$http.post('posts/dislike/' + this.postProp.id, {
                        UserId: parseInt(this.UserId)
                    }).then(() => {
                        for (let i=0; i<this.postProp.likes.length; i++) {
                            if (this.postProp.likes[i] == this.UserId) {
                                this.postProp.likes.splice(i,1);
                            }
                        }
                        this.userHasLiked = false;
                    })

                }
            }
        },
        props:{
            postProp: {
                UserId: String,
                text: String,
                likes: Array
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
        
        box-shadow: 0 0 10px gainsboro;
    }

    .post-card-content {
        padding: 20px;
        margin: 20px auto;
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

    .post-image {
        width: 100%;
        height: auto;
        border-radius: 20px 20px 0 0;

    }

    h2, h3 {
        font-size: x-large;
        
    }


</style>
