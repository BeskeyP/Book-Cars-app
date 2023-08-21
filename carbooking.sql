 CREATE TABLE CustomerRegis (    
	CustomerRegis_id int NOT NULL AUTO_INCREMENT,
	Firstname varchar(25),
	Lastname varchar(25),
	DOB date,
	Gender varchar (25),
	Address varchar(25),
	City varchar(25),
	State varchar(25),
	Pincode varchar(25),
	Country varchar(25),
	Emailid varchar(25),
	Contactnumber varchar(25),
	Whatsupnumber varchar(25),
	Aadharnumber int,
	CustomerLogindetails_id int,
	IsActive TINYINT,
	PRIMARY KEY (CustomerRegis_id));
	
	
CREATE TABLE Logindetails (
  Logindetails_id INT AUTO_INCREMENT PRIMARY KEY,
  Emailid VARCHAR(25) NOT NULL,
  pwd VARCHAR(25) NOT NULL,
  LastloginDate DATETIME NOT NULL,
  IsCustomer TINYINT NOT NULL,
  IsActive TINYINT NOT NULL
);

 CREATE TABLE AdminRegis(  
	AdminRegis_id int NOT NULL AUTO_INCREMENT,
	Firstname varchar(25),
	Lastname varchar(25),
	DOB date,
	Gender varchar (25),
	Address varchar(25),
	City varchar(25),
	State varchar(25),
	Pincode varchar(25),
	Country varchar(25),
	Emailid varchar(25),
	Contactnumber varchar(25),
	Whatsupnumber varchar(25),
	Aadharnumber int,
	AdminLogindetails_id int,
	IsCancelled TINYINT,
	PRIMARY KEY (AdminRegis_id));
     
 
	
CREATE TABLE CarDetails (
  CarDetails_id INT AUTO_INCREMENT PRIMARY KEY,
  Carname VARCHAR(25),
  Carnumber VARCHAR(25),
  Color VARCHAR(25),
  Fueltype VARCHAR(25),
  Milage VARCHAR(10),
  Fuelcapacity INT,
  Carimage VARCHAR(50),
  RentAmount INT,
  IsActive TINYINT
);
  
 CREATE TABLE SeatCapacity(
  SeatCapacity_id int NOT NULL AUTO_INCREMENT,
  SeatDetails varchar(25),
  Description varchar(50),
  IsActive TINYINT,
  PRIMARY KEY (SeatCapacity_id));  
  
 CREATE TABLE Transaction(
  Transaction_id int NOT NULL AUTO_INCREMENT,
  CustomerRegis_id int,
  CarDetails_id int,
  StartDate datetime NOT NULL,
  EndDate datetime NOT NULL,
  NetAmount int,
  BookingStatus varchar(50),
  IsActive TINYINT,
  PRIMARY KEY (Transaction_id));
  
 CREATE TABLE TransactionDenied(
  TransactionDenied_id int NOT NULL AUTO_INCREMENT,
  Transaction_id int,
  CancelledDate int,
  Reason varchar (255),
  IsActive TINYINT,
  PRIMARY KEY (TransactionDenied_id));
  
 CREATE TABLE Rating(
  Rating_id int NOT NULL AUTO_INCREMENT,
  CustomerRegis_id int,
  Transaction_id int,
  Rating int,
  Comment varchar(100),
  IsActive TINYINT,
  PRIMARY KEY (Rating_id));  
  
  
ALTER TABLE CustomerLogindetails
RENAME COLUMN Logindetails_id TO CustomerLogindetails_id;

DROP TABLE CustomerLogindetails;

ALTER TABLE CarDetails MODIFY COLUMN Milage VARCHAR(10);

DROP TABLE CarDetails;




