package com.Trendy_T.Entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="orders_tbl")
public class Orders implements Serializable{
	@Id
	@GeneratedValue
	private int order_id;   
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="user_id")
	private User user_id; 
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="address_id")
	private Address shipping_address_id;       
	private String status;                        
	private double total_price;                   
	private Date orderdate;                    
	private Date order_status_changed_datetime;
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public User getUser_id() {
		return user_id;
	}
	public void setUser_id(User user_id) {
		this.user_id = user_id;
	}
	public Address getShipping_address_id() {
		return shipping_address_id;
	}
	public void setShipping_address_id(Address shipping_address_id) {
		this.shipping_address_id = shipping_address_id;
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
	public Date getOrder_date() {
		return orderdate;
	}
	public void setOrder_date(Date order_date) {
		this.orderdate = order_date;
	}
	public Date getOrder_status_changed_datetime() {
		return order_status_changed_datetime;
	}
	public void setOrder_status_changed_datetime(Date order_status_changed_datetime) {
		this.order_status_changed_datetime = order_status_changed_datetime;
	}
	
	public Orders() {
		super();
	}
	public Orders(int order_id, User user_id, Address shipping_address_id, String status, double total_price,
			Date order_date, Date order_status_changed_datetime) {
		super();
		this.order_id = order_id;
		this.user_id = user_id;
		this.shipping_address_id = shipping_address_id;
		this.status = status;
		this.total_price = total_price;
		this.orderdate = order_date;
		this.order_status_changed_datetime = order_status_changed_datetime;
	}
	
	

}
