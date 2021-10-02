<template>
    <Header/>
</template>

<script>
    import Header from './components/Header.vue'


    export default {
        name: 'App',
        components: {
            Header
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    html {
        background-color: rgb(248, 248, 248);
    }
    #app {
        font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /* margin-top: 60px; */
    }
    div {
        /* border: 1px solid black;
        border-radius: 10px; */
        margin: 20px 0;
    }

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