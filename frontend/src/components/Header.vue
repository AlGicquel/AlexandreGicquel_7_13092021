<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-white py-0" >
            <div class="container-fluid my-0 d-flex justify-content-right">

                <!-- Logo, routes login if auth=false else posts -->
                <router-link to="/" class="navbar-brand" v-if="auth">
                    <img src="../../public/logos/icon-left-font.png" alt="Logo Groupomania">
                </router-link>
                <router-link to="/login" class="navbar-brand" v-if="!auth">
                    <img src="../../public/logos/icon-left-font.png" alt="Logo Groupomania">
                </router-link>
                
                <!-- Dropdown for small screens -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                    </ul>
                <button class="btn btn-danger ms-5" v-if="auth" @click="logout" >Se deconnecter</button>
                </div>

            </div>
        </nav>


        <div class="container">
            <!-- <p>header: auth={{auth}}</p> -->
            <router-view  @auth-sent="toggleAuth" :auth="auth"/>
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
                auth:false
            }
        },
        methods: {
            toggleAuth(payload) {
                this.auth = payload.auth;
            },
            logout() {
                sessionStorage.clear();
                this.auth = false;
                this.$router.push('/login')

            }
        },
        created () {
            if (sessionStorage.UserId && sessionStorage.token) {
                this.auth = true;
            }
        }
}
</script>


<style scoped>
    template {
        background-color: white;
    }
    img{
        width: 150px;
        height: 30px;
        object-fit: cover;
    }
    .loggedin {
        display: flex;
        justify-content: space-between;
        background-color: white;
        padding: 0px 0;
    }
</style>

