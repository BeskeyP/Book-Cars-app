const pool = require('../../config/dbconfig.js');

let dbConnPool = {};

//================================Customer Details Starts============================================================

dbConnPool.insertLogindetails = ( Emailid, pwd, IsCustomer) =>{
    return new Promise((resolve, reject)=>{
        var dateVal = new Date();
        var dateTime= dateVal.toISOString().slice(0, 19).replace('T', ' ');

        pool.query('INSERT INTO Logindetails (Emailid,pwd,LastloginDate,IsCustomer,IsActive) VALUES (?,?,?,?,?)',
             [Emailid, pwd, dateTime, IsCustomer, 1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.insertCustomerRegis = (Firstname, Lastname, DOB,Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber,Aadharnumber, Logindetails_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO CustomerRegis (Firstname, Lastname, DOB,Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber, Aadharnumber, Logindetails_id,IsActive) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)',
             [Firstname, Lastname, DOB,Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber, Aadharnumber, Logindetails_id, 1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getallCustomerRegis = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM CustomerRegis', (error, customerlist)=>{
            if(error){
                return reject(error);
            }
            return resolve(customerlist);
        });
    });
};

dbConnPool.getallLogins = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM Logindetails', (error, loginlist)=>{
            if(error){
                return reject(error);
            }
            return resolve(loginlist);
        });
    });
};

dbConnPool.getCustomerRegisById = (CustomerRegis_Id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM CustomerRegis WHERE CustomerRegis_id = ?',[CustomerRegis_Id], (error, customerRecord)=>{
            if(error){
                return reject(error);
            }
            return resolve(customerRecord[0]);
        });
    });
};

dbConnPool.updateCustomerRegisById = (Firstname, Lastname, DOB, Gender, Address, City, State, Pincode, Country, Contactnumber, Whatsupnumber, Aadharnumber, CustomerRegisId) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE CustomerRegis SET Firstname = ?, Lastname = ?, DOB = ?, Gender = ?, Address = ?, City = ?, State = ?, Pincode = ?, Country = ?, Contactnumber = ?, Whatsupnumber = ?, Aadharnumber = ? WHERE CustomerRegis_id = ?', [Firstname, Lastname, DOB, Gender, Address, City, State, Pincode, Country, Contactnumber, Whatsupnumber, Aadharnumber, CustomerRegisId], (error)=>{
            if(error){
                return reject(error);
            }
             
             return resolve({message: "Customer updated sucessfully.." });
        });
    });
};

dbConnPool.DeleteCustomerRegisById = (IsActive, CustomerRegis_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE CustomerRegis SET IsActive = ? WHERE CustomerRegis_id = ?', [IsActive, CustomerRegis_id], (error)=>{
            if(error){
                return reject(error);
            }
             
             return resolve({message: "Customer deleted sucessfully.." });
        });
    });
};

// dbConnPool.getCustomerByEmail = (Emailid) =>{
//     return new Promise((resolve, reject)=>{
//             pool.query('SELECT * FROM Logindetails log INNER JOIN CustomerRegis custom ON  custom.Emailid = log.Emailid Where log.Emailid = ?', [Emailid], (error, loginusers)=>{            
//             if(error){
//                 return reject(error);
//             }
//             return resolve(loginusers[0]);
//         });
//     });
// };

dbConnPool.getCustomerByEmail = (Emailid) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM Logindetails', [Emailid], (error, loginusers)=>{
            if(error){
                return reject(error);
            }
            return resolve(loginusers[0]);
        });
    });
};




module.exports = dbConnPool;