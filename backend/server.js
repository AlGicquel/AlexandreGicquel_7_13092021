const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Contourne les erreur de cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    // console.log(req.headers.authorization);
    next();
  });

const PostRoutes = require('./routes/PostRoutes');
const UserRoutes = require('./routes/UserRoutes');
const CommentRoutes = require('./routes/CommentRoutes');
const LikeRoutes = require('./routes/LikeRoutes');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', PostRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/comments', CommentRoutes);
// app.use('/api/likes', LikeRoutes);


db.sequelize.sync({ 
    // force: true 
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
}).catch(error => {
    console.log(error);
})