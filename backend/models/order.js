const db = require('../utils/database');

module.exports = class OrderDetails{
  constructor(o_id, fAdd, fCity, fZip,dAdd,dCity,dZip,top, fName, dName, fmobile, dmobile, fstate, dstate){
    this.o_id = o_id;
    this.fAdd = fAdd;
    this.fCity = fCity;
    this.fZip = fZip;
    this.dAdd = dAdd;
    this.dCity = dCity;
    this.dZip = dZip;
    this.top = top;
    this.fstate = fstate;
    this.dstate = dstate;
    this.fmobile = fmobile;
    this.dmobile = dmobile;
    this.fName = fName;
    this.dName = dName;
  }


  static viewModify(o_id){

    console.log("inside viewDetails in the model ",o_id);
    return db.execute('SELECT * FROM orderStatus WHERE o_id = ?', [o_id]);
  }

  static viewOrders(o_id){

    console.log("inside viewDetails in the model ",o_id);
    return db.execute('SELECT * FROM orderStatus WHERE u_id = ?', [o_id]);
  }

  static getPickupData(o_id){

    console.log("inside getPickupDatain the model ",o_id);
    return db.execute('SELECT * FROM orderdetails WHERE o_id = ?', [o_id]);
  }

  static updateReschedule(o_id,dDate)
  {
    return db.execute('UPDATE  orderStatus SET dDate = ? WHERE o_id = ?', [dDate,o_id]);
 
  }
  static viewDetails(o_id){

    console.log("inside viewDetails in the model ",o_id);
    return db.execute('SELECT * FROM orderdetails WHERE o_id = ?', [o_id]);
  }

  static modifyOrder(o_id,pDate){

    return db.execute('UPDATE  orderStatus SET pDate = ? WHERE o_id = ?', [pDate,o_id]);
 
  }

 static orderDeliveryUpdation(o_id, status){
  return db.execute('UPDATE  orderStatus SET orderStatus = ? WHERE o_id = ?', [status,o_id]);
 
 }

  static orderPickUpdation(o_id,status){
    return db.execute('UPDATE  orderStatus SET orderStatus = ? WHERE o_id = ?', [status,o_id]);
 
  }

  
  static updateWearHouse2(o_id,status){
    

    this.orderDeliveryUpdation(o_id,status);
    return db.execute('UPDATE warehouse2 SET oStatus = ? WHERE o_id = ? ',[status,o_id]);
 
  }

  static updateWearHouse3(o_id,status){
    

    this.orderDeliveryUpdation(o_id,status);
    return db.execute('UPDATE warehouse3 SET oStatus = ? WHERE o_id = ? ',[status,o_id]);
 
  }
  static updateWearHouse1(o_id,status){
    

    this.orderDeliveryUpdation(o_id,status);
    return db.execute('UPDATE warehouse1 SET oStatus = ? WHERE o_id = ?',[status,o_id]);
 
  }



  static getWarehouse1Data1(){
    console.log("inside getwear");
    return db.execute('SELECT * FROM warehouse1');
  }

  static insertWearHouse3(o_id,status){

    this.orderDeliveryUpdation(o_id,status);

    return db.execute('INSERT INTO  warehouse3 (o_id, oStatus) VALUES (?, ?) ', [o_id,status]);
 
  }
  static insertWearHouse2(o_id,status){
    

    this.orderDeliveryUpdation(o_id,status);
    return db.execute('INSERT INTO  warehouse2 (o_id, oStatus) VALUES (?, ?) ', [o_id,status]);
 
  }



  static insertWearHouse1(o_id,status){
    

    this.orderDeliveryUpdation(o_id,status);
    return db.execute('INSERT INTO  warehouse1 (o_id, oStatus) VALUES (?, ?) ', [o_id,status]);
 
  }






  static placeOrder(order,uId, o_status, pDate, dDate,slpk){

    console.log(order);
    db.execute(
      'INSERT INTO orderdetails (o_id, fAdd, fCity, fZip, dAdd, dCity, dZip, typeOfPackage, fName, dName, fmobile, dmobile, fstate, dstate ) VALUES (?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?,?, ?, ?)',
      [order.o_id, order.fAdd, order.fCity, order.fZip, order.dAdd, order.dCity, order.dZip, order.top, order.fName, order.dName, order.fmobile, order.dmobile, order.fstate, order.dstate]
    );

    return db.execute(
      'INSERT INTO orderstatus (o_id, u_id, orderStatus, pDate, dDate, selfPickup) VALUES (?, ?, ?, ?, ?, ?)',
      [order.o_id, uId, o_status, pDate, dDate, slpk]
    );
  }


  static placeOrderStatus(uId, o_status, pDate, dDate,slpk){
    

    console.log("inside controler place orderstatus");
    console.log(o_id, uId, o_status, pDate, dDate, slpk);
    return db.execute(
      'INSERT INTO orderstatus (o_id, u_id, orderStatus, pDate, dDate, selfPickup) VALUES (?, ?, ?, ?, ?, ?)',
      [o_id, uId, o_status, pDate, dDate, slpk]
    );

  }



};