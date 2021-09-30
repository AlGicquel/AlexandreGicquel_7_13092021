<template>
    <div class="com">
        <h3>{{ this.username }}</h3>
        <p>{{comment.text}}</p>
    </div>
</template>

<script>


export default ({
    data () {
        return {
            username: '',
        }

    },
    props: {
        comment: {
            text: String,
            UserId: Number
        }
    },
    created() {
        this.$http.get('users/usernameById/' + this.comment.UserId, {
                UserId: sessionStorage.UserId
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                this.username += res[0].firstName + ' ' + res[0].lastName;
            })
    },
    methods: {

    },
    computed: {
    }
})
</script>

<style scoped>
    .com {
        transition: 0.3s ease-in-out;
        border-radius: 20px;
        background-color: rgb(243, 243, 243);
        padding: 20px;
        margin: 20px auto;
        box-shadow: 0 0 10px rgb(220, 220, 220);
    }
</style>
