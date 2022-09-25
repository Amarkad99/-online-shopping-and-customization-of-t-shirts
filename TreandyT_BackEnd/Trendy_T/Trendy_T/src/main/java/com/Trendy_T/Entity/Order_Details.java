package com.Trendy_T.Entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_detail_tbl")
public class Order_Details implements Serializable {

	@Id
	@GeneratedValue
	private int orderdetailid;
	//@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	//@JoinColumn(name="orderid")
	private int orderid;
	//@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	//@JoinColumn(name="productid")
	private int productid;
	private int product_quantity;
	public int getOrderdetailid() {
		return orderdetailid;
	}
	public void setOrderdetailid(int orderdetailid) {
		this.orderdetailid = orderdetailid;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public int getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}
	public Order_Details() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Order_Details(int orderdetailid, int orderid, int productid, int product_quantity) {
		super();
		this.orderdetailid = orderdetailid;
		this.orderid = orderid;
		this.productid = productid;
		this.product_quantity = product_quantity;
	}
	

	
	
	
}
