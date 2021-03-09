const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const InviteCodeSchemas = new mongoose.Schema({
  code: String, // 邀请码
  user: String, // 用来注册哪个账户
  meta: getMate(),
})

mongoose.model('InviteCode', InviteCodeSchemas);
