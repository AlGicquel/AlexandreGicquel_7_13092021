<template>
    <div class="error">
        <h1>Oops..</h1>
        <p>Une erreur s'est produite. Vous avez été déconnecté.</p>
        <button class="btn btn-danger" @click="login">Se connecter</button>
    </div>
</template>

<script>
export default {
    name: 'Error',
    data () {
        return {
            
        }
    },
    props: {
        
    },
    methods: {
        // Fonction de Redirection à la page de connection
        login() {
            this.$router.push('/login')
        }
        
        
    }
}
</script>

<style scoped>
    *{
        text-align: center;
    }

    .error {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        box-shadow: 0 0 10px rgba(255, 214, 214, 1);
        padding: 20px;
        margin: 20px auto;
    }
</style>