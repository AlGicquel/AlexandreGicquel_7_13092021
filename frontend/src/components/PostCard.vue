<template>
    <div class="post-card">
        <h2 class="comment-author">{{ fullName }}</h2>
        <p class="comment-text">{{ postProp.text }}</p>
        <p>id:{{postProp.id}}</p>

        <div class="like-comment-infos">
            <!-- <span class="likes-comments-short">{{ postProp.likes.length }} likes</span> -->
        </div>

        <div class="buttons">
            <button class="btn btn-outline-danger">Like</button>
            <!-- Bouton qui fait apparaitre et disparaitre la div d'ajout de commentaire -->
            <button class="btn btn-outline-danger" @click="toggleNewComment" id="comment-button">Comment</button>
        </div>

        <!-- Loop sur la list de commentaire du post, l'affiche si elle n'est pas vide -->
        <div class="comments" v-if="comments.length !== 0">
            <h3>Comments ({{ comments.length }})</h3>
            <Comment  v-for="(comment, i) of comments" :key="i" :comment="comment"/>
        </div>



        <!-- affiche et fait disparaitre le composant de commentaire -->
        <div class="comment-form" :id="index">
            <CreatePost v-if="comment"/>
        </div>
    </div>
</template>

<script>

    import CreatePost from './CreatePost.vue'
    import Comment from './Comment.vue'

    export default {
        name: 'PostCard',
        data () {
            return {
                // gère l'affichage de la div de nouveau commentaire
                comment: false,
                fullName: '',
                comments: []
            }

        },
        created() {
            this.$http.get('users/usernameById/' + this.postProp.UserId, {
                UserId: sessionStorage.UserId
            })
                    .then(res => {
                        return res.json();
                    })
                    .then(res => {
                        this.fullName += res[0].firstName + ' ' + res[0].lastName;
                    })

            this.$http.get('comments/allByPostId/' + this.postProp.id, {
                UserId: sessionStorage.UserId
            })
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
                document.getElementById(`${this.index}`).classList.toggle('active');
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
            CreatePost,
            Comment
        }

    }


    
</script>

<style scoped>
    .post-card {
        transition: 0.3s ease-in-out;
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
