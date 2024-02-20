const { validationResult } = require('express-validator');


const jwt = require('jsonwebtoken');


const User = require('../models/user');
const OrderDetails = require('../models/order');

exports.viewDetails = async (req, res, next)=> {};



exports.viewOrder = async (req, res, next)=> { 

  const o_id = req.params.u_id;

  console.log(o_id);
  console.log("now calling");

  try{
    
    const [details_order] =  await OrderDetails.viewOrders(o_id);

    
    res.status(200).json(details_order);
  }
  catch (err){
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};

exports.viewModify = async (req, res, next)=> {

  const o_id = req.params.o_id;

  console.log(o_id);
  console.log("now calling");

  try{
    
    const [details_order] =  await OrderDetails.viewModify(o_id);

    
    res.status(200).json(details_order);
  }
  catch (err){
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};

exports.getPickupData = async (req, res, next)=> {

  const o_id = req.params.o_id;

  console.log(o_id);
  console.log("now calling");

  try{
    
    const [details_order] =  await OrderDetails.getPickupData(o_id);

    
    res.status(200).json(details_order);
  }
  catch (err){
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};

exports.placeOrder = async (req, res, next)=> {


  console.log("inside place order controller");

  console.log(req.body);

  const o_id = req.body.o_id;
  const fAdd = req.body.fAdd;
  const fCity = req.body.fCity;
  const fZip = req.body.fZip;
  const dAdd = req.body.dAdd;
  const dCity = req.body.dCity;
  const dZip = req.body.dZip;
  const top =  req.body.top;
  const fName = req.body.fName;
  const dName = req.body.dName;
  const dstate = req.body.dstate;
  const fstate = req.body.fstate;
  const fmobile = req.body.fmobile;
  const dmobile = req.body.dmobile;
  const uId = req.body.uId;
  const pDate =  req.body.pDate;
  const o_status = req.body.o_status;
  const dDate = req.body.dDate;
  const sp = req.body.o_status;

  

  try {
    
    const order = {
      o_id :o_id,
      fAdd : fAdd,
      fCity : fCity,
      fZip :fZip,
      dAdd :dAdd,
      dCity :dCity,
      dZip :dZip,
      top : top,
      fName : fName,
      dName : dName,
      fstate : fstate,
      dstate : dstate,
      fmobile : fmobile,
      dmobile : dmobile
    }



    console.log(order);
    console.log("inside contorller");
    const result = await OrderDetails.placeOrder(order,uId, o_status, pDate,dDate,sp);
    console.log(result);

    console.log(uId);
    console.log(o_status);
    console.log(pDate);
    console.log(dDate);

   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.orderDelivered = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
   
    const result = await OrderDetails.orderDeliveryUpdation(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.orderReschedule = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const dDate = req.body.dDate;
  
  console.log(o_id,dDate);

  try {
    
    const result = await OrderDetails.updateReschedule(o_id, dDate);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.insertWearHouse3 = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
    const result = await OrderDetails.insertWearHouse3(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.insertWearHouse2 = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
    const result = await OrderDetails.insertWearHouse2(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.insertWearHouse1 = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
    const result = await OrderDetails.insertWearHouse1(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};




exports.updateWearhouse3 = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
    const result = await OrderDetails.updateWearHouse3(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateWearhouse2 = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
    const result = await OrderDetails.updateWearHouse2(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getWarehouse1Data1= async (req, res, next)=> {

  try {
    
    const [result] = await OrderDetails.getWarehouse1Data1();
    res.status(200).json(result);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};

exports.updateWearhouse1 = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
    const result = await OrderDetails.updateWearHouse1(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};



exports.orderPicked = async (req, res, next)=> {


  console.log("inside order pick update controller");

  console.log(req.body);

  const o_id = req.body.oid;
  const status = req.body.status;
  
  console.log(o_id,status);

  try {
    
   
    const result = await OrderDetails.orderPickUpdation(o_id, status);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.modifyOrder = async (req, res, next)=> {


  console.log("inside place order controller");

  console.log(req.body);

  const o_id = req.body.o_id;
  const pDate = req.body.pDate;
  
  console.log(o_id,pDate);

  try {
    
   
    const result = await OrderDetails.modifyOrder(o_id, pDate);
  
   //result = await OrderDetails.placeOrderStatus(order.o_id, uId, o_status, pDate,dDate,sp);
   console.log(result);

    res.status(200).json({ o_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};