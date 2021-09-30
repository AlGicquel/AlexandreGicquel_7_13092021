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
                    <p>Doit contenir au moins une lettre majuscule, une minuscule, un chiffre et un caractère spécial.</p>
                </div>
                <div class="form-group">
                    <label for="confirm-password">
                        Confirm password : <input type="password" class="form-control" v-model="confirmPassword">
                    </label>
                </div>
                <p {{ error }}></p>
                <button class="btn btn-danger" @click="checkInput">Login</button>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            error: '',
            firstName: 'Alexandre',
            lastName: 'Gicquel',
            email: 'gicquelalexandre94@gmail.com',
            password: 'Test?1',
            confirmPassword: 'Test?1'
        }
    },
    methods: {
        signup () {
            this.$http.post('users/signup', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }).then( ()  => {
                this.login();
            }, error => {
                console.log(error);
            })
        },
        login() {
            this.$http.post('users/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                sessionStorage.UserId = response.UserId;
                sessionStorage.token = response.token;
                this.sendAuth();
                this.$router.push('/')
            }, error => {
                console.log(error);
            })
        },
        checkInput () {
            const testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const testPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.]{5,20}$/;
            const testNames = /[A-Za-z éèçàêëñöùä\-]$/;

            if ( !testNames.test(this.firstName) || !testNames.test(this.lastName) ) {
                this.error = ('Caractères non valides dans le nom ou prénom')
            }
            if ( !testEmail.test(this.email) ) {
                this.error = ('Email non valide')
            }
            if ( !testPassword.test(this.password) || !testPassword.test(this.confirmPassword) ) {
                this.error = ('Critères de sécurité du mot de pass non remplis')
            }
            if ( this.password !== this.confirmPassword) {
                this.error = ('Mot de passe et confirmation du mot de passe différents')
            }
            if (
                testNames.test(this.firstName) &&
                testNames.test(this.lastName) &&
                testEmail.test(this.email) &&
                testPassword.test(this.password) &&
                testPassword.test(this.confirmPassword)
            ) {
                this.signup();
            }
        },
        sendAuth() {
            this.$emit('auth-sent', {
                auth: true
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