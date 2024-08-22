// const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
// 用户表
var Schema = require("mongoose").Schema; //引入mongoose

const userSchema = new Schema({
  _id:  {
    type: 'UUID',
    default: () => randomUUID()
  },
  user_id: String, //定义一个属性user_id，类型为String
  content: String, //定义一个属性content，类型为String
  updated_at: Date //定义一个属性updated_at，类型为Date
});
const houseSchema = new Schema({
  // _id: Schema.Types.UUID,
  _id:  {
    type: 'UUID',
    default: () => randomUUID()
  },
  user_id: String, //定义一个属性user_id，类型为String
  address: String, //定义一个属性content，类型为String
  updated_at: Date //定义一个属性updated_at，类型为Date
});
// mongoose.model('User', userSchema);
// mongoose.model('UserHouse', houseSchema);

// module.exports = mongoose;
module.exports = {
  userSchema,
  houseSchema
};