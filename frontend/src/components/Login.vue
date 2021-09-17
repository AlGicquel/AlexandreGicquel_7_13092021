<template>
    <div class="">
        <div class="form">
            <h1>Connection</h1>
            <form action="">
                <div class="form-group">
                    <label for="UserName">
                        Username : <input type="text" class="form-control">
                    </label>
                </div>
                <div class="form-group">
                <label for="password">
                    Password : <input type="password" class="form-control">
                </label>
                </div>
                <button class="btn btn-danger">Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    *{
        text-align: center;
    }

    .form {
        border-radius: 20px;
        background-color: rgba(255, 214, 214, 1);
        padding: 20px;
        width: 75%;
        margin: 20px auto;
    }
</style>