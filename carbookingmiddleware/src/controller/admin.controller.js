const pool = require('../../config/dbconfig.js');

let dbConnPool = {};

//================================Admin Details Starts===================================================================================================
// dbConnPool.insertAdminLogindetails = ( Emailid, pwd, IsAdmin) =>{
//     return new Promise((resolve, reject)=>{
//         var dateVal = new Date();
//         var dateTime= dateVal.toISOString().slice(0, 19).replace('T', ' ');

//         pool.query('INSERT INTO Adminlogindetails (Emailid,pwd,LastloginDate,IsAdmin,IsCancelled) VALUES (?,?,?,?,?)',
//              [Emailid, pwd, dateTime, IsAdmin, 0], (error, result)=>{
//             if(error){
//                 return reject(error);
//             }
             
//               return resolve(result.insertId);
//         });
//     });
// };

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
}

dbConnPool.insertAdminRegis = (Firstname, Lastname, DOB, Gender,Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber,Aadharnumber, Logindetails_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO AdminRegis (Firstname, Lastname, DOB,Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber, Aadharnumber, Logindetails_id,IsCancelled) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
             [Firstname, Lastname, DOB,Gender, Address, City, State, Pincode, Country, Emailid, Contactnumber, Whatsupnumber, Aadharnumber,Logindetails_id,0], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getallAdminRegis = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM AdminRegis', (error, Adminlist)=>{
            if(error){
                return reject(error);
            }
            return resolve(Adminlist);
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


dbConnPool.getAdminRegisById = (AdminRegis_Id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM AdminRegis WHERE AdminRegis_id = ?',[AdminRegis_Id], (error, adminRecord)=>{
            if(error){
                return reject(error);
            }
            return resolve(adminRecord[0]);
        });
    });
};

dbConnPool.updateAdminRegisById  = (Firstname, Lastname, DOB,Address, City, State, Pincode, Country, Contactnumber, Whatsupnumber, Aadharnumber, AdminRegisId) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE AdminRegis SET Firstname = ?, Lastname = ?, DOB = ?,Address = ?, City = ?, State = ?, Pincode = ?, Country = ?, Contactnumber = ?, Whatsupnumber = ?, Aadharnumber = ? WHERE AdminRegis_id = ?', [Firstname, Lastname, DOB,Address, City, State, Pincode, Country, Contactnumber, Whatsupnumber, Aadharnumber, AdminRegisId], (error)=>{
            if(error){
                return reject(error);
            }
             
             return resolve({message: "Admin updated sucessfully.." });
        });
    });
};

dbConnPool.DeleteAdminRegisById = (IsCancelled, AdminRegis_Id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE AdminRegis SET IsCancelled = ? WHERE AdminRegis_id = ?', [IsCancelled, AdminRegis_Id], (error)=>{
            if(error){
                return reject(error);
            }
             
             return resolve({message: "Admin deleted sucessfully.." });
        });
    });
};

dbConnPool.getAdminByEmail = (Emailid) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM logindetails', [Emailid], (error, loginusers)=>{
            if(error){
                return reject(error);
            }
            return resolve(loginusers[0]);
        });
    });
};

// dbConnPool.getAdminByEmail = (Emailid) =>{
//     return new Promise((resolve, reject)=>{
//             pool.query('SELECT * FROM Adminlogindetails log INNER JOIN AdminRegis custom ON  custom.Emailid = log.Emailid Where log.Emailid = ?', [Emailid], (error, loginusers)=>{            
//             if(error){
//                 return reject(error);
//             }
//             return resolve(loginusers[0]);
//         });
//     });
// };

//================================Car Details Starts===================================================================================================

dbConnPool.getallCarDetails = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM CarDetails', (error, cardetails)=>{
            if(error){
                
                return reject(error);
                
            }
            return resolve(cardetails);
        });
    });
};

// dbConnPool.getallAdminRegis = () =>{
//     return new Promise((resolve, reject)=>{
//         pool.query('SELECT * FROM AdminRegis', (error, Adminlist)=>{
//             if(error){
//                 return reject(error);
//             }
//             return resolve(Adminlist);
//         });
//     });
// };

dbConnPool.insertCarDetails = (Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity, SeatDetails, Carimage,RentAmount) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO CarDetails (Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity,SeatDetails,Carimage,RentAmount,IsActive) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)',
        [Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity,SeatDetails,Carimage,RentAmount,1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getCarDetailsbyId = (CarDetails_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM CarDetails WHERE CarDetails_id  = ?',[CarDetails_id], (error, cardetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(cardetails);
        });
    });
};


dbConnPool.updateCarDetailsbyId = (Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity,SeatDetails,Carimage,RentAmount,CarDetails_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE CarDetails SET Carname = ?,Carnumber = ?,Color = ?,Fueltype = ?,Milage = ?,Fuelcapacity = ?,SeatDetails = ?,Carimage = ?,RentAmount = ? WHERE CarDetails_id = ?'
        [Carname,Carnumber,Color,Fueltype,Milage,Fuelcapacity,SeatDetails,Carimage,RentAmount,CarDetails_id], (error)=>{
            if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "CarDetails updated sucessfully.." });
            });
        });
    };
    
    dbConnPool.deleteCarDetailsbyId = (IsActive,CarDetails_id) =>{
        return new Promise((resolve, reject)=>{
            pool.query('UPDATE CarDetails SET IsActive = ? WHERE CarDetails_id = ?', [IsActive, CarDetails_id], (error)=>{
                if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "CarDetails deleted sucessfully.." });
            });
        });
    };
    
//================================Seat Capacity Details Starts===================================================================================================

dbConnPool.getallSeatCapacity = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM SeatCapacity  order by SeatDetails asc', (error, SeatCapacitydetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(SeatCapacitydetails);
        });
    });
};

dbConnPool.insertSeatCapacity = (SeatDetails,Description,SeatCapacity_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO SeatCapacity (SeatDetails,Description,SeatCapacity_id,IsActive) VALUES (?, ?, ?,?)',
        [SeatDetails,Description,SeatCapacity_id,1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getSeatCapacitybyId = (SeatCapacity_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM SeatCapacity WHERE SeatCapacity_id  = ?',[SeatCapacity_id], (error, SeatCapacitydetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(SeatCapacitydetails);
        });
    });
};


dbConnPool.updateSeatCapacitybyId = (SeatDetails,Description,SeatCapacity_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE SeatCapacity SET SeatDetails = ?,Description = ? WHERE SeatCapacity_id = ?',
        [SeatDetails,Description,SeatCapacity_id], (error)=>{
            if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "SeatCapacityDetails updated sucessfully.." });
            });
        });
    };
    
    dbConnPool.deleteSeatCapacitybyId = (IsActive,SeatCapacity_id) =>{
        return new Promise((resolve, reject)=>{
            pool.query('UPDATE SeatCapacity SET IsActive = ? WHERE SeatCapacity_id = ?', [IsActive, SeatCapacity_id], (error)=>{
                if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "SeatCapacityDetails deleted sucessfully.." });
            });
        });
    };



//================================Transaction Details Starts===================================================================================================

dbConnPool.getallTransaction = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM Transaction', (error, Transactiondetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(Transactiondetails);
        });
    });
};

// dbConnPool.insertSeatCapacity = (SeatDetails,Description,SeatCapacity_id) =>{
//     return new Promise((resolve, reject)=>{
//         pool.query('INSERT INTO SeatCapacity (SeatDetails,Description,SeatCapacity_id,IsActive) VALUES (?, ?, ?,?)',
//         [SeatDetails,Description,SeatCapacity_id,1], (error, result)=>{
//             if(error){
//                 return reject(error);
//             }
             
//               return resolve(result.insertId);
//         });
//     });
// };

dbConnPool.insertTransaction = (CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO Transaction (CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id,IsActive) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id,1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getTransactionbyId = (Transaction_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM Transaction WHERE Transaction_id  = ?',[Transaction_id], (error, Transactiondetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(Transactiondetails);
        });
    });
};


dbConnPool.updateTransactionbyId = (CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE Transaction SET CustomerRegis_id = ?,CarDetails_id = ?,StartDate = ?,EndDate = ?,NetAmount = ?,BookingStatus = ? WHERE Transaction_id = ?' [CustomerRegis_id,CarDetails_id,StartDate,EndDate,NetAmount,BookingStatus,Transaction_id], (error)=>{
            if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "TransactionDetails updated sucessfully.." });
            });
        });
    };
    
    dbConnPool.deleteTransactionbyId = (IsActive,Transaction_id) =>{
        return new Promise((resolve, reject)=>{
            pool.query('UPDATE Transaction SET IsActive = ? WHERE Transaction_id = ?', [IsActive, Transaction_id], (error)=>{
                if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "TransactionDetails deleted sucessfully.." });
            });
        });
    };

//================================Transaction Denied Details Starts===================================================================================================

dbConnPool.getallTransactionDenied = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM TransactionDenied', (error, TransactionDenieddetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(TransactionDenieddetails);
        });
    });
};


dbConnPool.insertTransactionDenied = (Transaction_id,CancelledDate,Reason,TransactionDenied_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO TransactionDenied (Transaction_id,CancelledDate,Reason,TransactionDenied_id,IsActive) VALUES (?, ?, ?, ? ,?)',
        [Transaction_id,CancelledDate,Reason,TransactionDenied_id,1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getTransactionDeniedbyId = (TransactionDenied_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM TransactionDenied WHERE TransactionDenied_id  = ?',[TransactionDenied_id], (error, TransactionDenieddetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(TransactionDenieddetails);
        });
    });
};


dbConnPool.updateTransactionDeniedbyId = (Transaction_id,CancelledDate,Reason,TransactionDenied_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE TransactionDenied SET Transaction_id = ?,CancelledDate = ?,Reason = ? WHERE TransactionDenied_id = ?', [Transaction_id,CancelledDate,Reason,TransactionDenied_id], (error)=>{
            if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "TransactionDeniedDetails updated sucessfully.." });
            });
        });
    };
    
    dbConnPool.deleteTransactionDeniedbyId = (IsActive,TransactionDenied_id) =>{
        return new Promise((resolve, reject)=>{
            pool.query('UPDATE TransactionDenied SET IsActive = ? WHERE TransactionDenied_id = ?', [ TransactionDenied_id,IsActive], (error)=>{
                if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "TransactionDeniedDetails deleted sucessfully.." });
            });
        });
    };


//================================Rating Details Starts===================================================================================================

dbConnPool.getallRating = () =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM Rating', (error, Ratingdetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(Ratingdetails);
        });
    });
};

dbConnPool.insertRating = (CustomerRegis_id,Transaction_id,Rating,Comment,Rating_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO Rating (CustomerRegis_id,Transaction_id,Rating,Comment,Rating_id,IsActive) VALUES (?, ?, ?, ?, ?, ?)',
        [CustomerRegis_id,Transaction_id,Rating,Comment,Rating_id,1], (error, result)=>{
            if(error){
                return reject(error);
            }
             
              return resolve(result.insertId);
        });
    });
};

dbConnPool.getRatingbyId = (Rating_id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM Rating WHERE Rating_id  = ?',[Rating_id], (error, Ratingdetails)=>{
            if(error){
                return reject(error);
            }
            return resolve(Ratingdetails);
        });
    });
};


dbConnPool.updateRatingbyId = (Rating_id,CustomerRegis_id,Transaction_id,Rating,Comment) =>{
    return new Promise((resolve, reject)=>{
        pool.query('UPDATE Rating SET CustomerRegis_id = ?,Transaction_id = ?,Rating = ?,Comment = ? WHERE Rating_id = ?' [CustomerRegis_id,Transaction_id,Rating,Comment,Rating_id], (error)=>{
            if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "RatingDetails updated sucessfully.." });
            });
        });
    };
    
    dbConnPool.deleteRatingbyId = (IsActive,Rating_id) =>{
        return new Promise((resolve, reject)=>{
            pool.query('UPDATE Rating SET IsActive = ? WHERE Rating_id = ?', [IsActive, Rating_id], (error)=>{
                if(error){
                    return reject(error);
                }
                 
                 return resolve({message: "RatingDetails deleted sucessfully.." });
            });
        });
    };


module.exports = dbConnPool;