const express = require('express');

const { body } = require('express-validator');

const orderController = require('../controllers/order');

const router = express.Router();


const Order = require('../models/order')
const User = require('../models/user');

router.get(
  '/viewDetails', orderController.viewDetails
);


router.get('/getWarehouse1Data1',orderController.getWarehouse1Data1);

router.get(
  '/viewOrder/:u_id', orderController.viewOrder);

router.get(
  '/viewModify/:o_id', orderController.viewModify);

  router.get(
    '/getPickup/:o_id', orderController.getPickupData);
  
  
router.post(
  '/placeOrder',orderController.placeOrder
);

router.post(
  '/modifyOrder',orderController.modifyOrder
);


router.post(
  '/orderPicked',orderController.orderPicked
);

router.post(
  '/orderDelivered',orderController.orderDelivered
);



router.post(
  '/orderReschedule',orderController.orderReschedule
);


router.post(
  '/updateWearhouse3',orderController.updateWearhouse3
);


router.post(
  '/updateWearhouse2',orderController.updateWearhouse2
);

router.post(
  '/updateWearhouse1',orderController.updateWearhouse1
);


router.post(
  '/insertWearHouse1',orderController.insertWearHouse1
);
router.post(
  '/insertWearHouse2',orderController.insertWearHouse2
);
router.post(
  '/insertWearHouse3',orderController.insertWearHouse3
);

module.exports = router;