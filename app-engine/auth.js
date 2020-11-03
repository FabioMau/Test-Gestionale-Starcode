var admin = require('firebase-admin');
admin.initializeApp();

module.exports = (req, res, next) => {
    if (req.headers.authorization === undefined)
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    const token = req.headers.authorization.split(' ')[1];
    admin.auth().verifyIdToken(token)
        .then(function (decodedToken) {
            let userId = decodedToken.uid;
            next();
        }).catch(function (error) {
            res.status(401).json({
                error: new Error('Invalid request!')
            });
        });
};