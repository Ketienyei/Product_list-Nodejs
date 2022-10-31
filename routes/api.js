const express = require('express')
const routes = express.Router();
const Customer = require('../models/customers');
const Product = require('../models/product');



//list of customers from the database
routes.get('/customers', (req ,res,next) =>{
  Customer.find({}).then,((customer) =>{
    res.send(customer);
  });

routes.get('/customersById:id',(req ,res, next) =>{
  Customer.findById({_id :req.params.id}).then,((customer) =>{
    res.send(customer);

})
});
}, 

//add customers to the db
routes.post('/customers', (req, res, next)=>{
    Customer.create (req.body).then ((customer)=>{
        res.send(customer);
         }).catch(next);
    }),
  
//update customers in db
routes.put('/customers/:id',(req,res) =>{
  res.send({type:'Update Request'});
})
);



  //delete a customer from the db
  routes.delete('/customer/:id', (req, res, next)=>{
    Customer.findByIdAndRemove({_id:req.params.id}).then((
        customer)=> {
            res.send(customer)
        })
  })
 
  // updating customer in the DB
  routes.put('/customers/:id', (req, res, next)=>{
    Customer.findByIdAndUpdate({_id:req.params.id}, req.body).then(()=> {
      Customer.findOne({_id:req.params.id}.then ((customer)=> {
            res.send(customer);
        }));
      });
});



module.exports = routes;