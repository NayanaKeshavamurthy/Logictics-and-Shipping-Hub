CREATE DATABASE deliveryApplication;

USE deliveryApplication;

CREATE TABLE userDetails (
    uId INT unique auto_increment,
    uName varchar(255),
    uEmailId varchar(255),
	uMobileNumber INT,
    uPassword varchar(255),
    PRIMARY KEY (uId)
);

CREATE TABLE adminDetails (
    aId INT unique auto_increment,
    aUserName varchar(255),
    aPassword varchar(255)
);

CREATE TABLE deliveryPersonnelDetails (
    dId INT unique auto_increment,
    dUserName varchar(255),
    dPassword varchar(255)
);

CREATE TABLE packageDetails (
    pId INT unique auto_increment,
    pWeight INT,
    pNumberOfPackages INT,
    pDimensions varchar(255),
    pFromAddress varchar(255),
    pToAddress varchar(255),
    pFromZip INT,
    pToZip INT,
    pFromCity varchar(255),
    pToCity varchar(255),
    PRIMARY KEY (pId)
);

CREATE TABLE paymentDetails (
	paymentDetailsId INT unique auto_increment,  
    uId INT,
    pCardNumber INT,
    pCvv SMALLINT,
    pExpiry date,    
	FOREIGN KEY (uId) REFERENCES userDetails(uId)
);

CREATE TABLE shippingDetails (
	shId INT unique auto_increment,  
    pId INT,
    shPackageShipped BOOL,
    shRescheduleTime datetime, 
	FOREIGN KEY (pId) REFERENCES packageDetails(pId)
);

CREATE TABLE rateUsDetails (
    rId INT unique auto_increment,
    PRIMARY KEY (rId),
    rName varchar(255),
    pId INT,
    rRating tinyint,
    rTitle varchar(255),
    rSuggestions varchar(255),
    rReview varchar(255),
    rRecommendation boolean,
    FOREIGN KEY (pId) REFERENCES packageDetails(pId)
);


