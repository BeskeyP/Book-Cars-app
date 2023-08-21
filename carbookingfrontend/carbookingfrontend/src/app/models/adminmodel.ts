export class adminModel {
"Firstname": any;
"Lastname": any;
"Emailid": any;
"pwd": any;
"DOB": any;
"Gender": any;
"Address": any;
"City": any;
"State": any;
"Pincode": any;
"Country": any;
"Contactnumber": any;
"Whatsupnumber": any;
"Aadharnumber": any;
"IsCustomer": any;
 
}

export class adminLoginModel {
    "Emailid": any;
    "pwd": any;
}

export class adminBookingModel {
    "CustomerRegis_id" : any;
    "CarDetails_id" : any;
    "StartDate": any;
    "EndDate": any;
    "NetAmount": any;
    "BookingStatus" : any;
}

export class adminCarDetailsModel {
    "Carname" : any;
    "Carnumber" : any;
    "Color": any;
    "Fueltype": any;
    "Milage": any;
    "Fuelcapacity" : any;
    "SeatDetails": any;
    "Carimage": any;
    "RentAmount" : any;
}
