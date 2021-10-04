<template>
    <div class="new-com">
        <!-- Composant de création de commentaire -->
        <h4>Ajoutez un commentaire : </h4>
        <form action="">
            <textarea  class="form-control" rows="3" v-model="text"></textarea>
            <!-- <p>{{text}}</p> -->
            <div class="buttons">
                <!-- <button class="btn btn-outline-danger">Ajouter une image</button> -->
                <button class="btn btn-danger" @click="submit">Poster</button>
            </div>
            <!-- <div class="error" v-if="!error.isEmpty">
                <p>{{ error }}</p>
            </div> -->
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreateComment',
    data () {
        return {
            text: '',
            error:''
        }
    },
    props: {
        auth: Boolean,
        postId: Number,
        comments: Array,
        newComment: Boolean
    },
    methods: {
        submit() {
            // Vérifie s'il y a bien du text dans l'input
            if (this.text == '') {
                alert('Votre commentaire est vide.')
            } else {
                // S'il y en a, lance la fonction de création du commentaire sur le serveur
                this.$http.post('comments', {
                    UserId: sessionStorage.UserId,
                    PostId: this.postId,
                    text: this.text
                })
                .then(res => {
                    return res.json()
                }, () => {
                    sessionStorage.clear();
                    this.auth = false;
                    this.$router.push('/login');
                })
                .then((comment) => {
                    // Ajoute le commentaire dans le tableau comments en paramètre du post
                    this.comments.push(comment);
                    // Vide l'input
                    this.text = '';
                }, () => {
                    sessionStorage.clear();
                    this.auth = false;
                    this.$router.push('/login');
                })
            }
        },
    }
}
</script>

<style scoped>
    .btn-outline-danger {
        background-color: white;
    }

    .new-com {
        border-radius: 20px;
        /* background-color: rgba(255, 214, 214, 1); */
        background-color: rgb(243, 243, 243);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px gainsboro;
    }

    h4 {
        font-size: large;
    }
</style>