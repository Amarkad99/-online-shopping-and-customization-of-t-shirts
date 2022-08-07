create table Address(
	Address_Id int primary key not null auto_increment,
	Plot_No varchar(20) not null,
	Street varchar(50)not null,
	City varchar(20)not null,
	Pincode bigint not null
	);
create table User(
	User_Id int primary key,
	First_Name varchar(50) not null,
	Last_Name varchar(50) not null,
	Gender varchar(6)not null,
	Email_Id varchar(100) not null,
	Mobile_No bigint not null,
	Address_Id int not null,
	Password varchar(10) not null,
	Security_Questions varchar(200) not null,
	Security_Answer varchar(100) not null , 
	constraint Foreign key(Address_Id) references Address(Address_Id) on delete cascade on update cascade
);
create table Product
(
	Product_Id int auto_increment primary key,
	Price double not null,
	Quantity int not null,
	Color varchar(20) not null,
	Material varchar(20) not null,
	Sleeve varchar(20) not null,
	Neck_Type varchar(10) not null,
	Brand varchar(20),
	Size varchar(20) not null,
	IsCustomizable varchar(10),
	Image_Front blob not null,
	Image_Back blob not null,
	Image_Left Blob,Image_Right blob,Likes int
);
create table Customization
(
	Product_Id int auto_increment,
	Front_Image_To_Insert blob,
	Back_Image_to_Insert blob,
	Final_Image_Front blob not null,
	Final_Back_Image blob not null,
	Front_Text varchar(100),
	Back_Text varchar(100) ,
	constraint Foreign key(Product_Id) references Product(Product_Id) on delete cascade on update cascade
);
create table Cart
(
	Cart_Id int auto_increment primary key not null,
	Product_Id int not null,User_Id int not null,
	Quantity int not null,Foreign key(product_Id) references Product(Product_Id) on delete cascade on update cascade,
	constraint fk_user_Id Foreign key(User_Id) references user(User_Id) on delete cascade on update cascade
);
create table Order_Info
   (
      Oder_Id int auto_increment primary key,
      User_Id int not null references User(User_Id) on delete cascade on update cascade ,
     ShippingAddress_Id int not null references Address(Address_Id) on delete cascade on update cascade,
      Satus varchar(50) not null,
      Total_price double not null,
      Order_date date not null,
      Notification_For_Owner int not null,
      Description_If_Rejected varchar(250) not null,
      Notification_For_Customer int not null,
     Order_Status_Changed_DateTime Date not null
      );
create table Order_Detail
(
	Order_ID int references Order_info(order_ID),
	Product_Id int references Product(Product_Id) ,
	Product_Quantity int not null
);
create table Review
(
	Review_ID int primary key,
	User_ID int,
	Product_Id int,
	Rating int,
	Content varchar(250),
	constraint foreign key(User_Id) references user(user_Id),
	constraint Foreign key(product_Id) references Product(product_Id) on delete cascade on update cascade
);
 
 
 
 
 
 
 
 
 
 
