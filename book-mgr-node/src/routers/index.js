const authRouter = require('./auth');
const inviteCodeRouter = require('./invite-code');

module.exports = (app) => {
  app.use(authRouter.routes());
  app.use(inviteCodeRouter.routes());
}