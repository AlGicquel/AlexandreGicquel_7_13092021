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
                <button class="btn btn-danger" @click="login">Se connecter</button>

                <!-- Div qui affiche les errors de connection s'il y en a -->
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
            // valeurs par défault pour plus de rapidité pendant le dev, à vider pour la prod
            email: 'test@gmail.com',
            password: 'Test.1',
            error: ''
        }
    },
    props: {
        auth: Boolean,
        level: Number
    },
    methods: {
        // Fonction de connection
        login() {
            this.$http.post('users/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                if (response.ok) {
                    localStorage.UserId = response.body.UserId;
                    localStorage.token = response.body.token;
                    // this.sendAdminAction(response.body.level);
                    this.$store.dispatch('adminAction', response.body.level)
                    this.sendAuth();
                    this.$router.push('/')
                } 
            }, error => {
                this.error = error.body.error;
            })
        },
        
        //Envoie l'information de connection au header qui la redistribue aux composants
        sendAuth() {
            this.$emit('auth-sent', {
                auth: true
            })
        },

        // Envoie l'information de connection au store qui la redistribue aux composants
        // Pas encore opérationelle
        sendAuthAction () {
            this.$store.dispatch('authentifiedAction')
        },
        // sendAdminAction (level) {
        //     this.$store.dispatch('adminAction', level)
        // }
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
        box-shadow: 0 0 10px rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
    }
</style>