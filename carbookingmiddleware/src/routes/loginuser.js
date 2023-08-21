const express =require('express');
const cors = require('cors');
const apiRouter = express.Router();
const cookieParser = require('cookie-parser');
apiRouter.use(cookieParser());



const customerController = require('../controller/customer.controller.js');
const adminController = require('../controller/admin.controller.js');
const customerRouter = require('./customerroutes.js');
const adminRouter = require('./adminroutes.js');

const corsOptions = {
    origin: 'http://localhost:4200', // Replace with your Angular app's origin
    credentials: true, // Allow cookies and authentication headers to be sent
  };
  
  apiRouter.use(cors(corsOptions));

  apiRouter.post('/registerCustomer', async (req, res, next) => {
    try {
       
        console.log('Request Body:', req.body);

        const Emailid = req.body.Emailid;
        const pwd = req.body.pwd;
        const IsCustomer = req.body.IsCustomer;


        const Logindetailsid = await customerController.insertLogindetails(Emailid, pwd, IsCustomer);

        var Firstname = req.body.Firstname;
        var Lastname = req.body.Lastname;
        var DOB = new Date(req.body.DOB);
        var Gender = req.body.Gender;
        var Address = req.body.Address;
        var City = req.body.City;
        var State = req.body.State;
        var Pincode = req.body.Pincode;
        var Country = req.body.Country;
        var Contactnumber = req.body.Contactnumber;
        var Whatsupnumber = req.body.Whatsupnumber;
        var Aadharnumber = req.body.Aadharnumber;
        var Logindetails_id = Logindetailsid;


        const createsCustomerId = await customerController.insertCustomerRegis(Firstname, Lastname, DOB, Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber, Aadharnumber, Logindetails_id);

        res.json({ "createsCustomerId": createsCustomerId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ "error": "An error occurred while registering the customer." });
    }
});


apiRouter.post('/registerAdmin', async (req, res, next) => {
    try {

        console.log('Request Body:', req.body);

        const Emailid = req.body.Emailid;
        const pwd = req.body.pwd;
        const IsCustomer = req.body.IsCustomer;

        const Logindetailsid = await adminController.insertLogindetails(Emailid, pwd, IsCustomer);

  
        var Firstname = req.body.Firstname;
        var Lastname = req.body.Lastname;
        var DOB = new Date(req.body.DOB);
        var Gender = req.body.Gender;
        var Address = req.body.Address;
        var City = req.body.City;
        var State = req.body.State;
        var Pincode = req.body.Pincode;
        var Country = req.body.Country;
        var Contactnumber = req.body.Contactnumber;
        var Whatsupnumber = req.body.Whatsupnumber;
        var Aadharnumber = req.body.Aadharnumber;
        var Logindetails_id = Logindetailsid;

 
        const createsAdminId = await adminController.insertAdminRegis(Firstname, Lastname, DOB, Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber, Aadharnumber, Logindetails_id);

        res.json({ "createsAdminId": createsAdminId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ "error": "An error occurred while registering the admin." });
    }
});

apiRouter.post('/login', async(req, res, next)=>{
    try{
        const Emailid = req.body.Emailid;
        const pwd = req.body.pwd;
        const IsCustomer = req.body.IsCustomer;
        
        if(IsCustomer)
            user = await customerController.getCustomerByEmail(Emailid);
        else 
            user = await adminController.getAdminByEmail(Emailid);
        
        
        if(!user){
            return res.json({
                message: "Invalid email or pwd"
            })
        }
    
        if(Emailid == user.Emailid && pwd == user.pwd)
        {
            return res.json(user);
        }
        else
        {
            return res.json({
                message: "Invalid password.."
            });
        }
    
    } catch(e){
        console.log(e);
        res.status(500).json({ "error": "An error occurred while processing the login." });
    }
});

apiRouter.use('/Customer', verifyCustomer, customerRouter);
apiRouter.use('/Admin', verifyCustomer, adminRouter);
apiRouter.use('/login', verifyCustomer, adminRouter);
apiRouter.use('/login', verifyCustomer, customerRouter);


 //  Verify Candidate
 async function  verifyCustomer (req, res, next){
     next();
 }


 module.exports = apiRouter;