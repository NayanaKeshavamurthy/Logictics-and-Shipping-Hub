# Logictics-and-Shipping-Hub
This is a Logistic and Shipping Hub website designed to provide the users with atmost ease for shipping and delivering packages

This project is designed by using Angular.js for the client side and using Node.js for the API which in turn calls the MYSQL and MongoDB where all the data is stored.

On this website, there are 3 pages, one for the user where-in he can view, place and ship order, and one page for the admin, who can add/edit/delete orders, and manage warehouses. The last webpage is for the delivery executives who can select the order to be delivered, on choosing the order, the delivery location along with the directions is displayed on google maps.

## Features Implemented

### User End
- Users can Register, Login to their profile
- User can get an cost estimate of a delivery of their package using the service called 'Get Estimate'
- User can place an order with a service called 'Rate & Ship' to get their package delivered to their desired destination
- User can view their orders and also has an option of delay the delivery dates of orders
- User can track the status of orders of weather its shipped, out for delivery or delivered in 'Track & Trace'
- Users can view the nearest warehouses near them using a service called 'Warehouses near me' 
- User can rate the wesite experience of their service using 'Rate Us' feature.

### Admin End 
- Only admin users can access the contents on this webpage
- Admin can register, and login to their profile
- Admin can add new warehouses and update the information on existing warehouses.
- Admin can place orders for the walk-in customers.
- Admin can update order statuses
- Admin can visualise the information of shipments for a warehouse
- Admin can mark an order as ready for delivery when all the products are packed and ready for delivery 
- Admin can mark an order as ready for pickup when all the products are packed and ready for pickup
- Admin can mark an order as picked up when the user picks up the order 

### Delivery Partner End
- Only the delivery Partner can access this webpage
- Delivery partners can notify the users
- When the package is collected from the store, the delivery partner can mark the package as out for delivery.
- Delivery partner can reschedule the delivery

## Folder-Structure
- backend -- This contains the server.js file and handles connection related to mongodb and mysql. Authentication is also handled
- frontend --  
    - Admin -- This contains the admin side webpage code
    - Delivery Partner -- This contains the delivery partner side webpage code
    - User related pages -- This contains all services and user related code , which is used to store/fetch data from the database
    - Services pages - Rateus, Wearhouse near me, Package estimator pages are code in this folder

- Note : If the same has to deployed on local please follow below steps in all folders : 
1. npm install 
2. backend - node server
3. front end - ng serve --open
