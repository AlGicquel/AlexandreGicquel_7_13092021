<template>
    <div class="new-post">
        <!-- Composant de creation de post -->
        <h1>Exprimez vous :</h1>
        <!-- <form action=""> -->
            <textarea  class="form-control" rows="3" v-model="text"></textarea>
            <div class="buttons">
                <label for="myfile">Ajouter un image :
                    <input type="file" id="myfile" name="myfile" >
                </label>
                <button class="btn btn-danger" @click="submit">Publier</button>
            </div>
            <!-- <div class="error" v-if="!error.isEmpty">
                <p>{{ error }}</p>
            </div> -->
        <!-- </form> -->
    </div>
</template>

<script>
export default {
    name: 'CreatePost',
    data () {
        return {
            text: '',
            error:''
        }
    },
    props: {
        auth: Boolean,
        posts: Array
    },
    methods: {
        submit() {
            // const img = document.getElementById('myfile');
            // console.log(img);
            // Vérification si il y a bien du texte dans le post 
            if (this.text == '') {
                this.error = 'Votre poste est vide.';
            } else {
                // S'il y a du text, lance la fonction de création de post sur le serveur
                this.$http.post('posts', {
                    UserId: sessionStorage.UserId,
                    text: this.text,
                    // imageUrl: img.files
                })
                .then(res => {
                    return res.json()
                }, () => {
                        sessionStorage.clear();
                        this.auth = false;
                        this.$router.push('/login');
                    })
                .then(post => {
                    // Crée un paramètre comments au post créé pour être conforme au modèle du composant PostCard
                    post["comments"] = [];
                    // Unshift pour ajouté le post en première position du tableau de posts
                    this.posts.unshift(post);
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

    h1 {
        font-size: 25px;
    }

    .new-post {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px rgba(255, 214, 214, 1);
    }
</style>