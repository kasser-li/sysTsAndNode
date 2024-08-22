

var mongoose = require("mongoose"); //引入mongoose
mongoose.connect('mongodb://localhost/list'); //连接到mongoDB的todo数据库
//该地址格式：mongodb://[username:password@]host:port/database[?options]
//默认port为27017 
// require('./models/index');
var db = mongoose.connection;
db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
});

// var UserModel = require('./models/userModel')
require('./models/userModel')

// //  添加Schema，并生成对应的model
//   //  Schema 相当于一个表，Model 相当于一条记录
// var ListSchema = new mongoose.Schema({
//   user_id: String, //定义一个属性user_id，类型为String
//   content: String, //定义一个属性content，类型为String
//   updated_at: Date //定义一个属性updated_at，类型为Date
// });

// mongoose.model('user', ListSchema); //将该Schema发布为Model,user就是集合名称
module.exports = mongoose;