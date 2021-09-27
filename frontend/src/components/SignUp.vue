<template>
    <div class="">
        <div class="form">
            <h1>Inscription</h1>
            <!-- <form action=""> -->
                <div class="form-group">
                    <label for="firstName">
                        First Name : <input type="text" class="form-control" v-model="firstName">
                    </label>
                </div>
                <div class="form-group">
                    <label for="lastName">
                        Last Name : <input type="text" class="form-control" v-model="lastName">
                    </label>
                </div>
                <div class="form-group">
                    <label for="email">
                        Email : <input type="email" class="form-control" v-model="email">
                    </label>
                </div>
                <div class="form-group">
                    <label for="password">
                        Password : <input type="password" class="form-control" v-model="password">
                    </label>
                </div>
                <div class="form-group">
                    <label for="confirm-password">
                        Confirm password : <input type="password" class="form-control" v-model="confirmPassword">
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        submit () {
            this.$http.post('users/signup', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }).then(response => {
                console.log('response signup : ', response);
            }, error => {
                console.log(error);
            })
        },
        login() {
            this.$http.post('users/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                sessionStorage.userId = response.userId;
                sessionStorage.token = response.token;
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