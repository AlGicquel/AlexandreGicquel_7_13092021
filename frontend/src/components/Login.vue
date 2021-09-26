<template>
    <div class="">
        <div class="form">
            <h1>Connection</h1>
            <!-- <form action=""> -->
                <div class="form-group">
                    <label for="username">
                        Username : <input type="text" class="form-control" v-model="username">
                    </label>
                </div>
                <div class="form-group">
                    <label for="password">
                        Password : <input type="password" class="form-control" v-model="password">
                    </label>
                </div>
                <button class="btn btn-danger" @click="submit">Login</button>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        log() {
            console.log('username: ', this.username, 'password: ', this.password)
        },
        submit () {
            this.$http.post('http://localhost:3000/api/users', {
                username: this.username,
                password: this.password
            }).then(response => {
                console.log(response);
            }, error => {
                console.log(error);
            })
        }
    }
}
</script>


<style scoped>
    *{
        text-align: center;
    }

    .form {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        width: 75%;
        margin: 20px auto;
    }
</style>