<template>
    <div>
        <div class="comment" v-if="comments.id === commentId">
            <h4 class="comment-author">{{ filterComment().author }}</h4>
            <p class="comment-text">{{ filterComment().text }}</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'


export default ({
    props: {
        commentId: Number
    },
    beforeCreate() {
        console.log(commentId)
    },
    methods: {
        filterComment () {
            for (let comment of this.comments) {
                if (this.$props.commentId === comment.id) {
                    return comment;
                }
            }
        }
    },
    computed: {
        ...mapState(['comments']),
    }
})
</script>
