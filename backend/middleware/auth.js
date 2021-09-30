const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const UserId = req.headers.authorization.split(' ')[3];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.UserId;
    if (
        typeof UserId == 'undefined' 
        || UserId != userId
      ) {
        throw 'Invalid user ID';
    } else {
        next();
    }
  } catch {
    res.status(401).json({
        error: new Error('Invalid request!')
    });
  }
};