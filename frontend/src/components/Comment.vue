<template>
    <div class="com py-1">
        <div v-if="!this.message.isEmpty">

            <h3>{{ this.username }}</h3>
            <p>{{comment.text}}</p>
            <p>PostId: {{comment.PostId}}</p>
            <button class="btn btn-danger d-flex align-self-right"
                @click="deleteComment"
                v-if="this.userId == comment.UserId">
                    Supprimer 
            </button>
        </div>
    </div>
</template>

<script>


export default ({
    data () {
        return {
            username: '',
            userId: '',
            message: ''
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
                this.username += res.firstName + ' ' + res.lastName;
                this.userId += sessionStorage.UserId
            })
    },
    methods: {
        deleteComment () {
            this.$http.delete('comments/' + this.comment.id)
                .then()
        }
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