const authRouter = require('./auth');
const inviteCodeRouter = require('./invite-code');
const booksRouter = require('./books');

module.exports = (app) => {
  app.use(authRouter.routes());
  app.use(inviteCodeRouter.routes());
  app.use(booksRouter.routes());
}