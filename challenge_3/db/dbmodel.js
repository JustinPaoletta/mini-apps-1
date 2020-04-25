const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Mongoo');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: { line1: String, line2: String, city: String, state: String, zipcode: Number },
  payment: { ccnum: Number, expiration: Number, cvv: Number, zipcode: Number }
});

var User = mongoose.model('User', userSchema);

let saveUser = (data) => {
  let saveData = new User({
    name: data.name,
    email: data.email,
    password: data.password
  })
  saveData.save(err => { if (err) return console.log(err) });
}




module.exports.save = saveUser;