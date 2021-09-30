<template>
    <div class="">
        <div class="post-card">
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
    </div>
</template>

<script>
export default {
    name: 'Login',
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
            this.$http.post('posts', {
                UserId: sessionStorage.UserId,
                text: this.text
            }).then(response => {
                console.log(response)
            }, error => {
                this.error = error.body;
            })
        },
    }
}
</script>

<style scoped>
    .btn-outline-danger {
        background-color: white;
    }
</style>