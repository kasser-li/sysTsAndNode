
const mongoose = require('mongoose');
// const {
//     userSchema,
//     houseSchema
// } = require('./../schema/userSchema');
const allSchema = require('./../schema/userSchema');
for (const key in allSchema) {
    if (Object.hasOwnProperty.call(allSchema, key)) {
        const schema = allSchema[key];
        let schemaName = key.split(/Schema/)[0]
        mongoose.model(schemaName, schema);
    }
}
// Create the User Model based on the UserSchema
// const UserModel = mongoose.model('user', userSchema);
// const HouseModel = mongoose.model('houseInfo', houseSchema);
// mongoose.model('user', userSchema);
// mongoose.model('houseInfo', houseSchema);

// module.exports = {
//     UserModel,
//     HouseModel
// };