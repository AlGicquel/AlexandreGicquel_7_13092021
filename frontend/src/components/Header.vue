<template>
    <div class="template">
        <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-white py-0" >
            <div class="container-fluid my-0 d-flex justify-content-right">

                <!-- Logo, routes login if auth=false else posts -->
                <router-link to="/" class="navbar-brand" v-if="auth">
                    <img src="../../public/logos/icon-left-font.png" alt="Logo Groupomania">
                </router-link>
                <router-link to="/login" class="navbar-brand" v-if="!auth">
                    <img src="../../public/logos/icon-left-font.png" alt="Logo Groupomania">
                </router-link>
                
                <!-- Dropdown for small smartphones and tablets -->
                <button class="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Links -->
                <div class="collapse navbar-collapse my-2 justify-content-right" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
                        <li class="nav-item" v-if="auth">
                            <router-link to="/" class="nav-link">Accueil</router-link>
                        </li>
                        <li class="nav-item" v-if="auth">
                            <router-link to="/user" class="nav-link">Mon profil</router-link>
                        </li>
                        <li class="nav-item" v-if="!auth">
                            <router-link to="/login" class="nav-link">Se connecter</router-link>
                        </li>
                        <li class="nav-item" v-if="!auth">
                            <router-link to="/signup" class="nav-link">S'inscrire</router-link>
                        </li>
                        <!-- Display of user level, delete for production -->
                        <li class="nav-item">
                            <span class="nav-link"> level: {{$store.state.level}}</span>
                        </li>

                        <!-- Dropdown for options, only contains delete user for now -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Paramètres
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <button class="btn btn-danger" @click="deleteAccount">Supprimer mon compte</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                <button class="btn btn-danger ms-5" v-if="auth" @click="logout" >Se deconnecter</button>
                </div>

            </div>
        </nav>


        <div class="container mb-0">
            <div class="col-lg-8 col-xl-6 m-auto">

                <router-view  @auth-sent="toggleAuth" :auth="auth" :level="level"/>
            </div>
        </div>

    </div>
</template>


<script>

    export default {
        name: 'Header',
        components: {

        },
        props: {
            
        }, 
        data () {
            return {
                auth: false,
                level: 0
            }
        },
        methods: {
            // Fonction qui s'execute à la connection pour changer le paramètre auth en true
            toggleAuth(payload) {
                this.auth = payload.auth;
            },

            // Fonction de déconnection, redirige vers login
            logout() {
                sessionStorage.clear();
                this.auth = false;
                this.$router.push('/login');
            },

            //Fonction de suppression de compte, déconnecte et redirige vers login une fois la suppression effectuée
            deleteAccount () {
                this.$http.put('users/delete/' + sessionStorage.UserId, {
                    UserId: sessionStorage.UserId
                })
                .then(() => {
                    this.$router.push('/signup');
                    this.logout();
                }, err => {
                    console.log(err);
                })
            }
        },

        // permet la conservation de l'authentification
        created () {
            if (sessionStorage.UserId && sessionStorage.token) {
                this.auth = true;
                this.$http.get('users/levelById/' + sessionStorage.UserId)
                .then(res => {
                    this.$store.state.level = res.body.level;
                })
            }
        }
}
</script>


<style scoped>
    html {
        background-color: rgb(248, 248, 248);
        margin-bottom: 0;
    }
    .template {
        margin: 0;
        background-color: rgb(248, 248, 248);
    }
    img{
        width: 150px;
        height: 30px;
        object-fit: cover;
    }

</style>

