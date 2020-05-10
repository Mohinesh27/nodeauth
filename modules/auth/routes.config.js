const VerifyUserMiddleware = require('./middlewares/verify.user.middleware');
const AuthController = require('./controllers/auth.controller');
const AuthValidationMiddleware = require('../shared/middlewares/auth.validation.middleware');
exports.routesConfig = function (app) {

    app.post('/auth', [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isPasswordAndUserMatch,
        AuthController.login
    ]);

    app.post('/auth/refresh', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefreshNeeded,
        AuthController.login
    ]);
};