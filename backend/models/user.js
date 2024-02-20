const db = require('../utils/database');

module.exports = class User{
  constructor(name, email, mobile, password){
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
  }


  static findUser(email){
    return db.execute('SELECT * FROM userdetails WHERE uEmailId = ?', [email]);
  }


  static saveUser(user){
    console.log("Backend")
    console.log(user)
    return db.execute(
      'INSERT INTO userdetails (uName, uEmailId, uMobileNumber, uPassword) VALUES (?, ?, ?, ?)',
      [user.name, user.email, user.mobile, user.password]
    );
  }
};