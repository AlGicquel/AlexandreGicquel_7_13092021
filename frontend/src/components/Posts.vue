<template>
    <div class="container">
        <div class="post-card" v-for="post of posts" v-bind:key="post">
            <h2>{{ post.author }}</h2>
            <p>{{ post.text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Posts',
        data () {
            return {
                posts:[
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
                        author: 'User1'
                    },
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
                        author: 'User2'
                    },
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum ante eget ligula egestas iaculis sit amet quis leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas posuere sem quis tortor pulvinar fermentum. Nam eu mauris quam. Aliquam ullamcorper erat ut neque tincidunt, in commodo lectus auctor. Aenean lorem lacus, volutpat et ligula quis, tincidunt blandit risus. Morbi vehicula, nisi eu luctus varius, metus diam condimentum ipsum, et mattis metus ex vel erat.',
                        author: 'User3'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    * {
        text-align: left;
    }

    .post-card {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        width: 75%;
        margin: 20px auto;
    }
</style>