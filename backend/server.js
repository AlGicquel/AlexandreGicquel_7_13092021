const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PostRoutes = require('./routes/PostRoutes');
const UserRoutes = require('./routes/UserRoutes');
const CommentRoutes = require('./routes/CommentRoutes');

app.use('/api/posts', PostRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/comments', CommentRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
}).catch(error => {
    console.log(error);
})