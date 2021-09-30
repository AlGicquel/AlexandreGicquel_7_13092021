<template>
    <div class="new-post">
        <h1>Exprimez vous :</h1>
        <form action="">
            <textarea  class="form-control" rows="3" v-model="text"></textarea>
            <!-- <p>{{text}}</p> -->
            <div class="buttons">
                <button class="btn btn-outline-danger">Ajouter une image</button>
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
    name: 'CreatePost',
    data () {
        return {
            text: '',
            error:''
        }
    },
    props: {
        auth: Boolean
    },
    methods: {
        submit() {
            if (this.text == '') {
                alert('Votre poste est vide.')
            } else {
                this.$http.post('posts', {
                    UserId: sessionStorage.UserId,
                    text: this.text
                }).then(() => {
                    this.$router.go()
                }, error => {
                    this.error = error.body;
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

    .new-post {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px rgba(255, 214, 214, 1);
    }
</style>