const express =require('express');
const adminController = require('../controller/admin.controller.js');
const adminRouter = express.Router();
bodyParser = require('body-parser');

//================================Admin Details Starts===================================================================================================

 adminRouter.get('/', async (req, res, next)=>{
    try {
        const Adminlist = await adminController.getallAdminRegis();
        res.json({"Adminlist": Adminlist});
    } catch(e) {
        console.log(e);
    }
});

adminRouter.get('/login', async (req, res, next)=>{
    try {
        const loginlist = await adminController.getallLogins();
        res.json({"loginlist": loginlist});
    } catch(e) {
        console.log(e);
    }
});

adminRouter.get('/:AdminRegisById', async (req, res, next)=> {
    try{
        let AdminRegisById = req.params.AdminRegisById;
        const adminRecord =  await adminController.getAdminRegisById(AdminRegisById)

        res.json({"adminRecord": adminRecord});
          
    } catch(e) {
        console.log(e);
        res.json(e);
    }
});
 
adminRouter.put('/:AdminRegisById',  async (req, res, next)=>{
    try{
        var Firstname = req.body.Firstname;
        var Lastname = req.body.Lastname;
        var DOB = new Date(req.body.DOB);;
        var Address = req.body.Address;
        var City = req.body.City;
        var State = req.body.State;
        var Pincode = req.body.Pincode;
        var Country = req.body.Country;
        var Contactnumber = req.body.Contactnumber;
        var Whatsupnumber = req.body.Whatsupnumber;
        var Aadharnumber = req.body.Aadharnumber;
        const AdminRegisById = req.params.AdminRegisById;

        if (!Firstname || !Lastname || !DOB) {
            return res.json(e);
         }

        const UpdateAdminRegisById =  await adminController.updateAdminRegisById (Firstname, Lastname, DOB,Address, City, State, Pincode, Country, Contactnumber, Whatsupnumber,Aadharnumber, AdminRegisById);
        res.json({"UpdateAdminRegisById": UpdateAdminRegisById});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.delete('/:AdminRegisById',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const AdminRegisById = req.params.AdminRegisById;

        const deleteAdminRegisById =  await adminController.DeleteAdminRegisById(IsActive, AdminRegisById);
        res.json({"deleteAdminRegisById": deleteAdminRegisById});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

//================================car Details Starts============================================================

adminRouter.get('/CarDetails/CarDetails', async (req, res, next)=>{
    try {
        const cardetails = await adminController.getallCarDetails();
        res.json({"cardetails": cardetails});
    } catch(e) {
        console.log(e);
        res.status(500).json({ "error": "Internal server error" });
    }
});





adminRouter.post('/CarDetails/CarDetails',  async (req, res, next)=>{
        try{
            var Carname = req.body.Carname;
            var Carnumber = req.body.Carnumber;
            var Color = req.body.Color;
            var Fueltype = req.body.Fueltype;
            var Milage = req.body.Milage;
            var Fuelcapacity = req.body.Fuelcapacity;
            var SeatDetails = req.body.SeatDetails;
            var Carimage = req.body.Carimage;
            var RentAmount = req.body.RentAmount;
            const CarDetails_id = req.params.CarDetails;
    
            if (!Carname || !Carnumber || !Color) {
                return res.json(e);
             }
    
            const InsertCarDetails =  await adminController.insertCarDetails(Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity,SeatDetails,Carimage,RentAmount,CarDetails_id);
            res.json({"InsertCarDetails":InsertCarDetails});
     
        } catch(e){    
            console.log(e);
            res.json(e);
        }
    });


    adminRouter.put('/CarDetails/:CarDetails_id',  async (req, res, next)=>{
    try{
        var Carname = req.body.Carname;
        var Carnumber = req.body.Carnumber;
        var Color = req.body.Color;
        var Fueltype = req.body.Fueltype;
        var Milage = req.body.Milage;
        var Fuelcapacity = req.body.Fuelcapacity;
        var SeatDetails = req.body.SeatDetails;
        var Carimage = req.body.Carimage;
        var RentAmount = req.body.RentAmount;
        const CarDetails_id = req.params.CarDetails_id;

        if (!Carname || !Carnumber || !Color || !CarDetails_id) {
            return res.json(e);
         }

        const UpdateCarDetailsbyId =  await adminController.updateCarDetailsbyId(Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity,SeatDetails,Carimage,RentAmount,CarDetails_id);
        res.json({"UpdateCarDetailsbyId":UpdateCarDetailsbyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.get('/CarDetails/:CarDetails_id', async (req, res, next)=>{
    try{
        let CarDetails_id= req.params.CarDetails_id;

        if (!CarDetails_id) {
            return res.json(e);
         }

        const cardetailsbyId =  await adminController.getCarDetailsbyId(CarDetails_id);
        res.json({"cardetailsbyId":cardetailsbyId});
  
    } catch(e){    
        console.log(e);
        res.json(e);
        //res.sendStatus(400);
    }
});

adminRouter.delete('/CarDetails/:CarDetails_id',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const CarDetails_id= req.params.CarDetails_id;

       

        const DeleteCarDetailsbyId =  await adminController.deleteCarDetailsbyId(IsActive, CarDetails_id);
        res.json({"DeleteCarDetailsbyId":DeleteCarDetailsbyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

//================================SeatCapacity Starts============================================================

adminRouter.get('/SeatCapacity/SeatCapacity', async (req, res, next)=>{
    try {
        const SeatCapacitydetails = await adminController.getallSeatCapacity();
        res.json({"SeatCapacitydetails": SeatCapacitydetails});
    } catch(e) {
        console.log(e);
    }
});

adminRouter.post('/SeatCapacity/SeatCapacity',  async (req, res, next)=>{
    try{
        var SeatDetails = req.body.SeatDetails;
        var Description = req.body.Description;
        const SeatCapacity_id = req.params.SeatCapacity_id;

        if (!SeatDetails || !Description) {
            return res.json(e);
         }

        const InsertSeatCapacity =  await adminController.insertSeatCapacity(SeatDetails,Description,SeatCapacity_id);
        res.json({"InsertSeatCapacity": InsertSeatCapacity});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});


adminRouter.put('/SeatCapacity/:SeatCapacity_id',  async (req, res, next)=>{
    try{
        var SeatDetails = req.body.SeatDetails;
        var Description = req.body.Description;
        const SeatCapacity_id = req.params.SeatCapacity_id;

        if (!SeatDetails || !Description) {
            return res.json(e);

         }

        const UpdateSeatCapacitybyId =  await adminController.updateSeatCapacitybyId(SeatDetails,Description,SeatCapacity_id);
        res.json({"UpdateSeatCapacitybyId": UpdateSeatCapacitybyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.get('/SeatCapacity/:SeatCapacity_id', async (req, res, next)=>{
    try{
        let SeatCapacity_id = req.params.SeatCapacity_id;

        if (!SeatCapacity_id) {
            return res.json(e);
         }

        const SeatCapacitybyId =  await adminController.getSeatCapacitybyId(SeatCapacity_id);
        res.json({"SeatCapacitybyId": SeatCapacitybyId});
  
    } catch(e){    
        console.log(e);
        res.json(e);
        //res.sendStatus(400);
    }
});

adminRouter.delete('/SeatCapacity/:SeatCapacity_id',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const SeatCapacity_id = req.params.SeatCapacity_id;

       

        const DeleteSeatCapacitybyId =  await adminController.deleteSeatCapacitybyId(IsActive,SeatCapacity_id);
        res.json({"DeleteSeatCapacitybyId": DeleteSeatCapacitybyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});


//================================Transaction Starts============================================================

adminRouter.get('/Transaction/Transaction', async (req, res, next)=>{
    try {
        const Transactiondetails = await adminController.getallTransaction();
        res.json({"Transactiondetails": Transactiondetails});
    } catch(e) {
        console.log(e);
    }
});



adminRouter.post('/Transaction/Transaction',  async (req, res, next)=>{
    try{
        var CustomerRegis_id = req.body.CustomerRegis_id;
        var CarDetails_id = req.body.CarDetails_id;
        var StartDate = req.body.StartDate;
        var EndDate = req.body.EndDate;
        var NetAmount = req.body.NetAmount;
        var BookingStatus = req.body.BookingStatus;
        const Transaction_id = req.params.Transaction_id;

        if (!CustomerRegis_id || !CarDetails_id || !StartDate) {
            return res.status(400).json({ error: 'Required fields missing' });
         }

         const InsertTransaction =  await adminController.insertTransaction(CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id);
         res.json({"InsertTransaction": InsertTransaction});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.put('/Transaction/:Transaction_id',  async (req, res, next)=>{
    try{
        var CustomerRegis_id = req.body.CustomerRegis_id;
        var CarDetails_id = req.body.CarDetails_id;
        var StartDate = req.body.StartDate;
        var EndDate = req.body.EndDate;
        var NetAmount = req.body.NetAmount;
        var BookingStatus = req.body.BookingStatus;
        const Transaction_id = req.params.Transaction_id;

        if (!CustomerRegis_id || !CarDetails_id || !StartDate) {
            return res.json(e);
         }

        const UpdateTransactionbyId =  await adminController.updateTransactionbyId(CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id);
        res.json({"UpdateTransactionbyId ": UpdateTransactionbyId });
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.get('/Transaction/:Transaction_id', async (req, res, next)=>{
    try{
        let Transaction_id = req.params.Transaction_id;

        if (!Transaction_id) {
            return res.json(e);
         }

        const Transaction =  await adminController.getTransactionbyId(Transaction_id);
        res.json({"Transaction ": Transaction });
  
    } catch(e){    
        console.log(e);
        res.json(e);
        //res.sendStatus(400);
    }
});

adminRouter.delete('/Transaction/:Transaction_id',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const Transaction_id = req.params.Transaction_id;

       

        const DeleteTransactionbyId =  await adminController.deleteTransactionbyId(IsActive, Transaction_id);
        res.json({"DeleteTransactionbyId":DeleteTransactionbyId});
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});


//================================TransactionDenied Starts============================================================

adminRouter.get('/TransactionDenied/TransactionDenied', async (req, res, next)=>{
    try {
        const TransactionDenieddetails = await adminController.getallTransactionDenied();
        res.json({"TransactionDenieddetails": TransactionDenieddetails});
    } catch(e) {
        console.log(e);
    }
});

adminRouter.post('/TransactionDenied/TransactionDenied',  async (req, res, next)=>{
    try{
        var Transaction_id = req.body.Transaction_id;
        var CancelledDate = req.body.CancelledDate;
        var Reason = req.body.Reason;
        const TransactionDenied_id = req.params.TransactionDenied_id;

        if (!Transaction_id || !CancelledDate|| !Reason) {
            return res.json(e);
         }

        const InsertTransactionDenied =  await adminController.insertTransactionDenied(Transaction_id,CancelledDate,Reason,TransactionDenied_id);
        res.json({"InsertTransactionDenied": InsertTransactionDenied});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.put('/TransactionDenied/:TransactionDenied_id',  async (req, res, next)=>{
    try{
        var Transaction_id = req.body.Transaction_id;
        var CancelledDate = req.body.CancelledDate;
        var Reason = req.body.Reason;
        const TransactionDenied_id = req.params.TransactionDenied_id;

        if (!Transaction_id || !CancelledDate|| !Reason) {
            return res.json(e);
         }

        const UpdateTransactionDeniedbyId =  await adminController.updateTransactionDeniedbyId(Transaction_id,CancelledDate,Reason,TransactionDenied_id);
        res.json({"UpdateTransactionDeniedbyId": UpdateTransactionDeniedbyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.get('/TransactionDenied/:TransactionDenied_id', async (req, res, next)=>{
    try{
        let TransactionDenied_id = req.params.TransactionDenied_id;

        if (!TransactionDenied_id) {
            return res.json(e);
         }

        const TransactionDenied =  await adminController.getTransactionDeniedbyId(TransactionDenied_id);
        res.json({"TransactionDenied": TransactionDenied});
  
    } catch(e){    
        console.log(e);
        res.json(e);
        //res.sendStatus(400);
    }
});

adminRouter.delete('/TransactionDenied/:TransactionDenied_id',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const TransactionDenied_id = req.params.TransactionDenied_id;

       

        const DeleteTransactionDeniedbyId =  await adminController.deleteTransactionDeniedbyId(IsActive, TransactionDenied_id);
        res.json({"DeleteTransactionDeniedbyId":DeleteTransactionDeniedbyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});



//================================Rating Starts==========================================================================

adminRouter.get('/Rating/Rating', async (req, res, next)=>{
    try {
        const Ratingdetails = await adminController.getallRating();
        res.json({"Ratingdetails": Ratingdetails});
    } catch(e) {
        console.log(e);
    }
});

adminRouter.post('/Rating/Rating',  async (req, res, next)=>{
    try{
        var CustomerRegis_id = req.body.CustomerRegis_id;
        var Rating = req.body.Rating;
        var Comment = req.body.Comment;
        var Transaction_id = req.body.Transaction_id;
        const Rating_id = req.params.Rating_id;

        if (!CustomerRegis_id || !Rating|| !Comment) {
            return res.json(e);
         }

        const InsertRating =  await adminController.insertRating(CustomerRegis_id,Transaction_id,Rating,Comment,Rating_id,);
        res.json({"InsertRating ":InsertRating });
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.put('/Rating/:Rating_id',  async (req, res, next)=>{
    try{
        var CustomerRegis_id = req.body.CustomerRegis_id;
        var Rating = req.body.Rating;
        var Comment = req.body.Comment;
        var Transaction_id = req.body.Transaction_id;
        const Rating_id = req.params.Rating_id;

        if (!CustomerRegis_id || !Rating|| !Comment) {
            return res.json(e);
         }

        const UpdateRatingbyId =  await adminController.updateRatingbyId(CustomerRegis_id,Transaction_id,Rating,Comment,Rating_id,);
        res.json({"UpdateRatingbyId ":UpdateRatingbyId });
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});

adminRouter.get('/Rating/:Rating_id', async (req, res, next)=>{
    try{
        let Rating_id = req.params.Rating_id;

        if (!Rating_id) {
            return res.json(e);
         }

        const Rating=  await adminController.getRatingbyId(Rating_id);
        res.json({"Rating ":Rating });
  
    } catch(e){    
        console.log(e);
        res.json(e);
        //res.sendStatus(400);
    }
});

adminRouter.delete('/Rating/:Rating_id',  async (req, res, next)=>{
    try{
        var IsActive = req.body.IsActive;
        const Rating_id = req.params.Rating_id;

       

        const DeleteRatingbyId =  await adminController.deleteRatingbyId(IsActive,Rating_id);
        res.json({"DeleteRatingbyId ":DeleteRatingbyId});
 
    } catch(e){    
        console.log(e);
        res.json(e);
    }
});



module.exports = adminRouter;