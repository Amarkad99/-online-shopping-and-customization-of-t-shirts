package com.Trendy_T.pojo;

import com.Trendy_T.Entity.Orders;

public class Delivery_Details {
	private String first_name;
	private String last_name;
	private long mobile_number;
	private String address_line;
	private String street;
	private String city;
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public Delivery_Details(int order_id) {
		super();
		this.order_id = order_id;
	}
	public String getLast_name() {
		return last_name;
	}
	public Delivery_Details(String first_name, String last_name, long mobile_number, String address_line, String street,
			String city, String pincode, int price, int order_id) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.mobile_number = mobile_number;
		this.address_line = address_line;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
		Price = price;
		this.order_id = order_id;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public long getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}
	public String getAddress_line() {
		return address_line;
	}
	public void setAddress_line(String address_line) {
		this.address_line = address_line;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public Delivery_Details() {
		super();
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	private String pincode;
	private int Price;
	private int order_id;

}
