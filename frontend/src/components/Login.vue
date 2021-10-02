<template>
    <div class="">
        <div class="form">
            <h1>Connection</h1>
            <!-- <form action=""> -->
                
                <div class="form-group">
                    <label for="email">
                        Email : ({{email}})<input type="email" class="form-control" v-model="email">
                    </label>
                </div>
                <div class="form-group">
                    <label for="password">
                        Password : ({{password}}) <input type="password" class="form-control" v-model="password">
                    </label>
                </div>
                <button class="btn btn-danger" @click="login">Login</button>
                <div class="error" v-if="!error.isEmpty">
                    <p>{{ error }}</p>
                </div>
            <!-- </form> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            email: 'admin@gmail.com',
            password: 'Test?1',
            error: ''
        }
    },
    props: {
        auth: Boolean,
        level: Number
    },
    beforeCreate () {

    },
    methods: {
        login() {
            this.$http.post('users/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                if (response.ok) {
                    sessionStorage.UserId = response.body.UserId;
                    sessionStorage.token = response.body.token;
                    this.sendAdminAction(response.body.level)
                    this.sendAuth();
                    this.$router.push('/')

                } 
            }, error => {
                this.error = error.body.error;
            })
        },
        
        sendAuth() {
            this.$emit('auth-sent', {
                auth: true,
                
            })
        },
        sendAuthAction () {
            this.$store.dispatch('authentifiedAction')
        },
        sendAdminAction (level) {
            this.$store.dispatch('adminAction', level)
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
        margin: 20px auto;
    }
</style>