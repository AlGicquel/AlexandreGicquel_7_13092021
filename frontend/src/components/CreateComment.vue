<template>
    <div class="new-com">
        <h1>Ajoutez un commentaire : </h1>
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
            if (this.text == '') {
                alert('Votre commentaire est vide.')
            } else {
                this.$http.post('comments', {
                    UserId: sessionStorage.UserId,
                    PostId: this.postId,
                    text: this.text
                })
                .then(res => {
                    return res.json()
                })
                .then((comment) => {
                    // this.$router.go();
                    this.comments.push(comment);
                    this.text = '';
                    this.newComment = false;
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

    .new-com {
        border-radius: 20px;
        /* background-color: rgba(255, 214, 214, 1); */
        background-color: rgb(243, 243, 243);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px gainsboro;
    }
</style>