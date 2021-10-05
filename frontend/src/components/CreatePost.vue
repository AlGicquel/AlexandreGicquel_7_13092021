<template>
    <div class="new-post">
        <!-- Composant de creation de post -->
        <h1>Exprimez vous :</h1>
        <form 
            id="post-form" 
            enctype="multipart/form-data"
            @submit.prevent="submit">
            <textarea  class="form-control" rows="3" v-model="text"></textarea>
            <div class="image-input">
                <img :src="image" alt="" v-if="image != ''">
            </div>
            <div class="buttons">
                <!-- <i class="fas fa-upload"></i> -->
                <label for="myfile" v-show="image == ''">Ajouter un image :
                    <input type="file" id="myfile" name="myfile" @change="onFileChange" ref="image">
                </label>
                <button class="btn btn-danger" v-if="image != ''" @click="removeImage">Supprimer la photo</button>
                <button class="btn btn-danger" type="submit">Publier</button>
            </div>

            <div class="error" v-if="!error.isEmpty">
                <p>{{ error }}</p>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CreatePost',
    data () {
        return {
            text: '',
            error:'',
            image: '',
            file:''
        }
    },
    props: {
        auth: Boolean,
        posts: Array
    },
    methods: {
        submit() {
            // Récupération du fichier à uploader
            this.file = this.$refs.image.files[0];

            // Création du formulaire a envoyer dans la requête
            const formData = new FormData();
            if (typeof this.image != 'undefined') {
                formData.append('image', this.file);

            }
            formData.append('UserId', sessionStorage.UserId);
            formData.append('text', this.text);


            // Vérification si il y a bien du texte dans le post 
            if (this.text == '' && this.file == '') {
                this.error = 'Votre poste est vide.';
            } else {
                // S'il y a du text, lance la fonction de création de post sur le serveur
                this.$http.post('posts', formData)
                .then(res => {
                    return res.json()
                })
                .then(post => {
                    // Crée un paramètre comments au post créé pour être conforme au modèle du composant PostCard
                    post["comments"] = [];
                    // Unshift pour ajouté le post en première position du tableau de posts
                    this.posts.unshift(post);
                    // Vide l'input
                    this.image = '';
                    document.getElementById('post-form').reset();
                })
            }
        },
        onFileChange (e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var reader = new FileReader();

            reader.onload = (e) => {
                this.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage (e) {
            // Empêche le submit
            e.preventDefault();
            // Stock le text car il va être reset avec le formulaire
            const text = this.text;
            // supprime l'image du dom
            this.image = '';
            // Vide le formulaire
            document.getElementById('post-form').reset();
            // Remet le text dans le formulaire
            this.text = text;
        }
    }
}
</script>

<style scoped>
    .btn-outline-danger {
        background-color: white;
    }

    h1 {
        font-size: x-large;
    }

    .new-post {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px rgba(255, 214, 214, 1);
    }

    img {
        max-width: 100px;
        height: auto;
        max-height: 100px;
    }
</style>