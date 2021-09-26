<template>
    <div class="container">
        <!-- Bannière sticky top avec la nav et la routeur -->
        <div id="nav" class="banner sticky-top">
            <router-link to="/"><img src="../../public/logos/icon-left-font.png" alt="Logo Groupomania"></router-link>
            <router-link to="/">Posts</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/signup">Sign up</router-link> |
            <router-link to="/user">User</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style scoped>
    .container {
        /* display: flex; */
        width: 80%;
        margin: 20px auto;

    }

    #nav{
        display: flex;
        justify-content: space-between;
        background-color: white;
        padding: 20px 0;
    }
    router-link:nth-child(1){
        display: flex;
        flex:1;
    }
    img{
        width: 150px;
        height: 30px;
        object-fit: cover;
    }
</style>

<script>

    export default {
        name: 'Header',
        components: {

        }
}
</script>
