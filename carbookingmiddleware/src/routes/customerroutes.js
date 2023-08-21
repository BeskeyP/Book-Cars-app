const express =require('express');
const customerController = require('../controller/customer.controller.js');
const customerRouter = express.Router();
bodyParser = require('body-parser');

//================================Customer Details Starts============================================================

customerRouter.get('/', async (req, res, next)=>{
    try {
        const customerlist = await customerController.getallCustomerRegis();
        res.json({"customerlist": customerlist});
    } catch(e) {
        console.log(e);
    }
});

customerRouter.get('/login', async (req, res, next)=>{
    try {
        const loginlist = await customerController.getallLogins();
        res.json({"loginlist": loginlist});
    } catch(e) {
        console.log(e);
    }
});

customerRouter.get('/:customerRegisById', async (req, res, next)=> {
    try{
        let customerRegisById = req.params.customerRegisById;

        const customerRecord =  await customerController.getCustomerRegisById(customerRegisById)
        res.json({"customerRecord": customerRecord});
          
    } catch(e) {
        console.log(e);
        res.json(e);
    }
});
 
customerRouter.put('/:customerRegisById',  async (req, res, next)=>{
    try{
        const customerRegisById = req.params.customerRegisById;
        var Firstname = req.body.Firstname;
        var Lastname = req.body.Lastname;
        var DOB = new Date(req.body.DOB);
        var Gender = req.body.Gender;
        var Address = req.body.Address;
        var City = req.body.City;
        var State = req.body.State;
        var Pincode = req.body.Pincode;
        var Country = req.body.Country;
        var Emailid= req.body.Emailid;
        var Contactnumber = req.body.Contactnumber;
        var Whatsupnumber = req.body.Whatsupnumber;
        var Aadharnumber = req.body.Aadharnumber;
        var Logindetails_id = req.body.Logindetails_id;

        if (!Firstname || !Lastname || !DOB) {
            return res.json(e);
         }

         const UpdateCustomerRegisById =  await customerController.updateCustomerRegisById(customerRegisById,Firstname, Lastname, DOB,Gender, Address, City, State, Pincode, Country,Emailid, Contactnumber, Whatsupnumber,Aadharnumber,Logindetails_id);
         res.json({"UpdateCustomerRegisById": UpdateCustomerRegisById});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

customerRouter.delete('/:customerRegisById',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const customerRegisById = req.params.customerRegisById;

       

        const deleteCustomerRegisById =  await customerController.DeleteCustomerRegisById(IsActive, customerRegisById);
        res.json({"deleteCustomerRegisById": deleteCustomerRegisById});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});



module.exports = customerRouter;