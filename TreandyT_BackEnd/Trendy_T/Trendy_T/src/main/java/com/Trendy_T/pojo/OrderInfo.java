package com.Trendy_T.pojo;

import java.util.Date;

public class OrderInfo {
    
	private double price;
	private String color;;
	public OrderInfo(double price, String color, String neck_type, String sleev, String size, int product_quantity,
			String status, double total_price, Date orderdate) {
		super();
		this.price = price;
		this.color = color;
		this.neck_type = neck_type;
		Sleev = sleev;
		Size = size;
		this.product_quantity = product_quantity;
		this.status = status;
		this.total_price = total_price;
		this.orderdate = orderdate;
	}
	public OrderInfo() {
		super();
	}
	public String getSleev() {
		return Sleev;
	}
	public void setSleev(String sleev) {
		Sleev = sleev;
	}
	private String neck_type;
	private String Sleev;
	private String Size;
	private int product_quantity;
	private String status;                        
	private double total_price;                   
	public OrderInfo(int price, String color, String neck_type, String size, int product_quantity, String status,
			double total_price, Date orderdate) {
		super();
		this.price = price;
		this.color = color;
		this.neck_type = neck_type;
		this.Size = size;
		
		this.product_quantity = product_quantity;
		this.status = status;
		this.total_price = total_price;
		this.orderdate = orderdate;
	}
	
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getNeck_type() {
		return neck_type;
	}
	public void setNeck_type(String neck_type) {
		this.neck_type = neck_type;
	}
	public String getSize() {
		return Size;
	}
	public void setSize(String size) {
		Size = size;
	}
	public int getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getTotal_price() {
		return total_price;
	}
	public void setTotal_price(double total_price) {
		this.total_price = total_price;
	}
	public Date getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}
	private Date orderdate;

}
