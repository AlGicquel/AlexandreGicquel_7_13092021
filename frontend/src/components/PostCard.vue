<template>
    <div class="post-card">
        <h2 class="comment-author">{{ postProp.author }}</h2>
        <p class="comment-text">{{ postProp.text }}</p>

        <div class="buttons">
            <button class="btn btn-outline-danger">Like</button>
            <!-- Bouton qui fait apparaitre et disparaitre la div d'ajout de commentaire -->
            <button class="btn btn-outline-danger" @click="toggleNewComment" id="comment-button">Comment</button>
        </div>

        <!-- Loop sur la list de commentaire du post, l'affiche si elle n'est pas vide -->
        <div class="comments" v-if="postProp.comments.length !== 0">
            <h3>Comments</h3>
            <div class="comment" v-for="(comment, i) of postProp.comments" :key="i">
                <h4 class="comment-author">{{ comment.author }}</h4>
                <p class="comment-text">{{ comment.text }}</p>
            </div>
        </div>

        <!-- affiche et fait disparaitre le composant de commentaire -->
        <div class="comment-form" :id="index">
            <CreatePost v-if="comment"/>
        </div>
    </div>
</template>

<script>

    import CreatePost from './CreatePost.vue'

    export default {
        name: 'PostCard',
        data () {
            return {
                // gère l'affichage de la div de nouveau commentaire
                comment: false,
            }

        },
        created() {
            
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
                author: String,
                text: String,
                comments: Array
            },
            index: Number
        },
        components: {
            CreatePost
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
