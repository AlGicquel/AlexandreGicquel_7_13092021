<template>
    <div class="post-card">
        <h2 class="comment-author">{{ fullName }}</h2>
        <p class="comment-text">{{ postProp.text }}</p>
        <p>id:{{postProp.id}}</p>
        <p>UserId:{{postProp.UserId}}</p>

        <div class="like-comment-infos">
            <!-- <span class="likes-comments-short">{{ postProp.likes.length }} likes</span> -->
        </div>

        <div class="buttons">
            <button class="btn btn-outline-danger">J'aime</button>
            <!-- Bouton qui fait apparaitre et disparaitre la div d'ajout de commentaire -->
            <button class="btn btn-outline-danger" @click="toggleNewComment" id="comment-button">Commenter</button>
            <button class="btn btn-danger" v-if="postProp.UserId == UserId">Supprimer</button>
        </div>

        <!-- Loop sur la list de commentaire du post, l'affiche si elle n'est pas vide -->
        <div class="comments" v-if="comments.length !== 0">
            <h3>Comments ({{ comments.length }})</h3>
            <Comment  v-for="(comment, i) of comments" :key="i" :comment="comment"/>
        </div>



        <!-- affiche et fait disparaitre le composant de commentaire -->
        <div class="comment-form" :id="'postId-'+postProp.id">
            <CreateComment v-if="comment" :postId="postProp.id"/>
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
                // gère l'affichage de la div de nouveau commentaire
                comment: false,
                fullName: '',
                comments: [],
                UserId: 0
            }

        },
        created() {
            this.UserId = sessionStorage.UserId
            this.$http.get('users/usernameById/' + this.postProp.UserId)
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        this.fullName += res[0].firstName + ' ' + res[0].lastName;
                    })

            this.$http.get('comments/allByPostId/' + this.postProp.id)
                    .then(res => {
                        return res.json();
                    })
                    .then(comments => {
                        for (let comment of comments) {
                            this.comments.push(comment);
                        }
                    });
        },
        methods: {
            // gère l'affichage et l'animation de la div de nouveau commentaire
            toggleNewComment () {
                this.comment = !this.comment;
                document.getElementById(`postId-${this.postProp.id}`).classList.toggle('active');
            }
        },
        props:{
            postProp: {
                UserId: String,
                text: String,
            },
            index: Number
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
</style>
