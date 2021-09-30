const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.UserId;
    console.log(req.body,userId);
    if (typeof req.body.UserId === 'undefined' || parseInt(req.body.UserId) !== userId) {
        console.log('probleme auth', req.body.UserId, userId);
        throw 'Invalid user ID';
    } else {
        console.log('request authorized')
        next();
    }
  } catch {
    res.status(401).json({
        error: new Error('Invalid request!')
    });
  }
};