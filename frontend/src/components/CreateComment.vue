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
            <div class="error" v-if="!error.isEmpty">
                <p>{{ error }}</p>
            </div>
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
            if (this.text == "") {
                this.error = 'Votre commentaire est vide.';
            }
            // Vérifie que l'input est conforme
            else if (this.checkInput()) {
                // S'il l'est, lance la fonction de création du commentaire sur le serveur
                this.$http.post('comments', {
                    UserId: localStorage.UserId,
                    PostId: this.postId,
                    text: this.text
                })
                .then(res => {
                    return res.json()
                })
                .then((comment) => {
                    // Ajoute le commentaire dans le tableau comments en paramètre du post
                    this.comments.push(comment);
                    // Vide l'input et l'erreur
                    this.text = '';
                    this.error = '';
                })
            } else {
                this.error = 'Erreur: Caractère(s) non autorisé(s)';
            }
        },
        checkInput() {
            const testinput = /[A-Za-z0-9 éèçàêëñöùä,?;.:/!'-*+()"&]$/;
            return testinput.test(this.text);

        }
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