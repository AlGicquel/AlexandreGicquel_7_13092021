<template>
    <div class="com py-1">
        <div v-if="!this.message.isEmpty">
            <!-- Affichage du commentaire -->
            <h3>{{ this.username }}</h3>
            <p>{{comment.text}}</p>
            <p>PostId: {{comment.PostId}}</p>

            <!-- Bouton de suppression du commentaire qui ne s'affiche que si l'utilisateur en est l'autheur ou un admin -->
            <button class="btn btn-danger d-flex align-self-right"
                @click="deleteComment"
                v-if="this.userId == comment.UserId || $store.state.level == 1">
                    Supprimer 
            </button>
        </div>
    </div>
</template>

<script>


export default ({
    data () {
        return {
            username: '',
            userId: 0,
            message: ''
        }

    },
    props: {
        comment: {
            text: String,
            UserId: Number
        },
        auth: Boolean

    },
    created() {
        this.userId = sessionStorage.UserId;
        // Récupère le nom de l'auteur du commentaire
        this.$http.get('users/usernameById/' + this.comment.UserId)
            .then(res => {
                return res.json();
            }, () => {
                sessionStorage.clear();
                this.auth = false;
                this.$router.push('/login');
            })
            .then(res => {
                // Met les noms et prenoms en data
                this.username += res.firstName + ' ' + res.lastName;
            }, () => {
                sessionStorage.clear();
                this.auth = false;
                this.$router.push('/login');
            })
    },
    methods: {
        // Fonction de suppression de commentaire sur le serveur
        deleteComment () {
            this.$http.delete('comments/' + this.comment.id)
                .then(() => {

                }, () => {
                    sessionStorage.clear();
                    this.auth = false;
                    this.$router.push('/login');
                })
        }
    }
})
</script>

<style scoped>
    .com {
        transition: 0.3s ease-in-out;
        border-radius: 20px;
        background-color: rgb(243, 243, 243);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px rgb(220, 220, 220);
    }

    h3 {
        font-size: x-large;
    }
</style>