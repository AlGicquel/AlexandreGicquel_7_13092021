<template>
    <div>
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
